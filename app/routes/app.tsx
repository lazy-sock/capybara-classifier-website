import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Cam from "../components/Cam";
import BirdhouseDashboard from "../components/BirdhouseDashboard";
import RecentImageCard from "../components/RecentImageCard";
import { BottomNav } from "~/components/BottomNav";
import { useEffect, useState } from "react";

import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import type { User } from "firebase/auth";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "App von Capybara" },
  ];
}

const getActiveBirds = () => {};

const getRecentImages = async () => {
  try {
    const q = query(
      collection(db, "sightings"),
      orderBy("timestamp", "desc"),
      limit(4),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc, index) => ({
      id: index + 1, // Convert to number for compatibility
      imageUrl: doc.data().photoUrl, // Cloudinary URL from Firestore
      time: doc.data().time,
      species: doc.data().species,
    }));
  } catch (error) {
    console.error("Error fetching recent images:", error);
    return [];
  }
};

type RecentImage = {
  id: number;
  imageUrl?: string;
  time: string;
  species: string;
};

export default function App() {
  const [recentImages, setRecentImages] = useState<RecentImage[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoading, setImagesLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setImagesLoading(true);
      getRecentImages()
        .then(setRecentImages)
        .finally(() => setImagesLoading(false));
    }
  }, [user]);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  if (user)
    return (
      <div className="flex-grow flex flex-col">
        <NavBar />
        <main className="mx-auto mt-25 max-w-[1000px] p-2 text-black dark:text-white">
          {/* <h1 className="text-center text-[2rem] font-semibold lg:text-[2.5rem]">
            Live Camera
          </h1> */}
          {/* <Cam /> */}
          {/* <BirdhouseDashboard /> */}

          <section className="space-y-4">
            <h2 className="text-center text-[2rem] font-semibold">
              Recent Sightings
            </h2>
            {imagesLoading ? (
              <div className="flex justify-center">
                <p>Loading recent sightings...</p>
              </div>
            ) : recentImages.length === 0 ? (
              <div className="flex items-center flex-col">
                <h3 className="text-[2rem]">No Photos yet.</h3>
                <img width={400} src="illustrations/no_photos.svg" alt="" />
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-4">
                {recentImages.map((img) => (
                  <RecentImageCard key={img.id} image={img} />
                ))}
              </div>
            )}
          </section>
        </main>
        <Footer />
        <BottomNav selected={0} />
      </div>
    );
  else
    return (
  <>
      <NavBar />
      <main className="flex h-screen flex-grow flex-col items-center justify-center text-black dark:text-white">
        <h1 className="mb-4 text-3xl font-bold">Willkommen zu Capybara!</h1>
        <p className="mb-6 text-[1.25rem]">
          Bitte registriere dich oder melde dich an um die App zu verwenden. <br></br>Falls du bei der Einrichtung hilfe brauchst, schaue <a href="/get_started" className="text-blue-400">hier</a> nach.
        </p>
        <div className="flex gap-6">
        <Link
          to="/registrieren"
          className="bg-primary cursor-pointer rounded px-2 py-1 text-[1.25rem] text-white"
        >
          Registrieren
        </Link>
        <Link
          to="/anmelden"
          className="bg-primary cursor-pointer rounded px-2 py-1 text-[1.25rem] text-white"
        >
          Anmelden
        </Link>
        </div>
      </main>
      </>
    );
}
