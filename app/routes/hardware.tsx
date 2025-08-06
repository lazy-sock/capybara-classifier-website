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
      <main className="mx-auto mt-35 max-w-[800px] px-4 text-black dark:text-white">
        <h1 className="mb-4 text-center text-[3rem] font-bold">Hardware</h1>
        <section id="esp32-cam">
          <h2 className="text-center text-[2.25rem] font-semibold">
            ESP32-CAM
          </h2>
          <p className="text-center text-[1.25rem]">
            The ESP32-CAM is the main microcontroller. It is a simple camera
            with enough computational power and features.
          </p>
        </section>
        <section id="motion-sensor">
          <h2 className="text-center text-[2.25rem] font-semibold">
            Motion Sensor
          </h2>
          <p className="text-center text-[1.25rem]">
            Simple PIR motion sensor.
          </p>
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
