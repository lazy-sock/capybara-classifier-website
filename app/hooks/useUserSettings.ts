import { useState, useEffect } from "react";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "./useAuth";

export const useUserSettings = () => {
  const { user } = useAuth();
  const [setting, setSetting] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Load setting when user changes
  useEffect(() => {
    if (!user) {
      setSetting("");
      return;
    }

    setLoading(true);

    // Real-time listener for setting changes
    const unsubscribe = onSnapshot(doc(db, "userSettings", user.uid), (doc) => {
      if (doc.exists()) {
        setSetting(doc.data().customSetting || "");
      } else {
        setSetting("");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const updateSetting = async (newSetting: string) => {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "userSettings", user.uid),
        {
          customSetting: newSetting,
          updatedAt: new Date(),
        },
        { merge: true },
      );
    } catch (error) {
      console.error("Error updating setting:", error);
    }
  };

  return { setting, updateSetting, loading };
};
