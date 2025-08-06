import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Hardware used for Capybara." },
  ];
}

export default function Hardware() {
  return (
    <div>
      <NavBar />
      <main className="mx-auto mt-35 max-w-[1600px] px-4 text-black dark:text-white">
        <h1 className="mb-4 text-center text-[3rem] font-bold">Hardware</h1>
        <section id="esp32-cam" className="bg-[#2d2d2d] rounded-2xl p-5 mt-15 flex flex-row justify-around text-black">
          <div className="flex flex-col justify-around">
            <img src="/images/ESP32.jpg" alt="ESP32" className="rounded-2xl" width="500px"/>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-center text-[2.25rem] font-semibold text-white">
              ESP32 Cam Module
            </h2>
            <div className="bg-white rounded-2xl p-3 ml-3 min-h-[27vh]">
              <p className="text-center text-[1.25rem]">
                Die Hauptkomponente mit einer Kamera ausgestattet und genügend Rechenleistung.
              </p>
            </div>
          </div>
        </section>
        <section id="esp32-cam" className="bg-[#2d2d2d] rounded-2xl p-5 mt-15 flex flex-row justify-around text-black">
          <div className="flex flex-col justify-around">
            <img src="/images/PIR.jpg" alt="ESP32" className="rounded-2xl" width="500px"/>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-center text-[2.25rem] font-semibold text-white">
               Motion Sensor
            </h2>
            <div className="bg-white rounded-2xl p-3 ml-3 min-h-[27vh]">
              <p className="text-center text-[1.25rem]">
                Ein einfacher Bewegungssensor.
              </p>
            </div>
          </div>
        </section>
        <section id="battery">
          <h2 className="text-center text-[2.25rem] font-semibold">Battery</h2>
          <p className="text-center text-[1.25rem]">5V</p>
        </section>
        <section id="case">
          <h2 className="text-center text-[2.25rem] font-semibold">Case</h2>
          <p className="text-center text-[1.25rem]">3d printed.</p>
        </section>
      </main>
    </div>
  );
}
