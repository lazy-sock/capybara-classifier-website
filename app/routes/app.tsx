import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Cam from "../components/Cam";
import BirdhouseDashboard from "../components/BirdhouseDashboard";
import RecentImageCard from "../components/RecentImageCard";
import { BottomNav } from "~/components/BottomNav";
import { useEffect, useState } from "react";

import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const getActiveBirds = () => {};
const getRecentImages = () => {};

type RecentImage = {
  id: number;
  imageUrl?: string;
  time: string;
  species: string;
};

export default function App() {
  const recentImages: RecentImage[] = [
    { id: 1, time: "15:02", species: "Blue Tit" },
    { id: 2, time: "14:58", species: "Great Tit" },
    { id: 3, time: "14:49", species: "Sparrow" },
    { id: 4, time: "14:33", species: "Robin" },
  ];
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  if (user)
    return (
      <div>
        <main className="mx-auto mt-12 max-w-[1000px] p-2">
          <h1 className="text-center text-[2rem] font-semibold lg:text-[2.5rem]">
            Live Camera
          </h1>
          <Cam />
          {/* <BirdhouseDashboard /> */}

          <section className="space-y-4">
            <h2 className="text-center text-[2rem] font-semibold">
              Recent Sightings
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {recentImages.map((img) => (
                <RecentImageCard key={img.id} image={img} />
              ))}
            </div>
          </section>
        </main>
        <Footer />
        <BottomNav selected={0} />
      </div>
    );
  else
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold">Welcome to Capybara!</h1>
        <p className="mb-6">
          Please log in to access the live camera and recent sightings.
        </p>
        <Link
          to="/anmelden"
          className="bg-primary cursor-pointer rounded px-2 py-1 text-[1.25rem]"
        >
          Anmelden
        </Link>
      </div>
    );
}
