import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Cam from "../components/Cam";
import BirdhouseDashboard from "../components/BirdhouseDashboard";
import RecentImageCard from "../components/RecentImageCard";
import { BottomNav } from "~/components/BottomNav";

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
  return (
    <div>
      <main className="mx-auto mt-12 max-w-[1000px] p-2">
        <h1 className="text-center text-[2rem] font-bold lg:text-[2.5rem]">
          Live Camera
        </h1>
        <Cam />
        {/* <BirdhouseDashboard /> */}

        <section className="space-y-4">
          <h2 className="text-center text-2xl font-semibold">
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
      <BottomNav />
    </div>
  );
}
