import type { Route } from "./+types/home";
import { BottomNav } from "../components/BottomNav";
import { useState, useEffect } from "react";

import { useUserSettings } from "~/hooks/useUserSettings";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Einstellungen für Capybara" },
  ];
}

export default function Settings() {
  const { setting, updateSetting, loading } = useUserSettings();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(setting);
  }, [setting]);

  const handleSave = () => {
    updateSetting(inputValue);
  };

  if (loading) return <div>Loading settings...</div>;

  return (
    <div className="flex flex-col flex-grow">
      <NavBar />
      <main className="mx-auto w-full max-w-[1000px] pt-16">
        <h1 className="text-center text-[3rem] font-bold">Settings</h1>
        <div className="flex justify-center">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your setting"
          />
          <button onClick={handleSave}>Save Settings</button>
        </div>
        <BottomNav selected={1} />
      </main>
      <Footer />
    </div>
  );
}
