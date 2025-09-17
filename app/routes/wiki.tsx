import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import { BottomNav } from "~/components/BottomNav";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Capybara-WIKI für Vögel" },
  ];
}

function capitalizeFirstLetter(val: String) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default function Wiki() {
  const birds: String[] = ["amsel", "blaumeise", "buchfink", "buntspecht", "elster", "feldsperling", "gimpel", "kohlmeise", "rabe", "rotkehlchen", "eichhoernchen"];
  return (
    <div className="flex flex-col flex-grow">
      <NavBar />
      <main className="mx-auto w-full max-w-[1000px] pt-28">
        <h1 className="text-center text-[3rem] font-bold mb-4">Von Capybara unterstützte Vögel</h1>
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {birds.map((bird) => {
            return ( <div className="bg-primary h-fit w-[250px] rounded-lg flex flex-col items-center text-center text-[1.5rem] pt-3 pb-1 px-4">
                        <div className="rounded-lg overflow-hidden h-[150px] w-[220px]">
                          <img 
                            src={`/images/${bird}.jpg`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {capitalizeFirstLetter(bird)}
                      </div>
            );
          })}
        </div>
        <BottomNav selected={2} />
      </main>
        <Footer />
    </div>
  );
}
