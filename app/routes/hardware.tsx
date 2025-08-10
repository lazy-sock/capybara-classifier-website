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
      <main className="mx-auto mt-35 max-w-[1600px] px-4 text-black dark:text-white flex flex-col items-center">
        {/* <h1 className="mb-4 text-center text-[3rem] font-bold">Hardware</h1> */}
        <h2 className="text-[3rem] font-semibold">Komponenten</h2>
        <section id="esp32-cam" className="p-5 mt-4 max-w-[1000px]">
            <h2 className="text-center text-[2rem] font-semibold">
              ESP32-CAM
            </h2>
              <p className="text-center text-[1.25rem] mb-8">
                Die Kamera zusammen mit ausreichend Rechenleistung und geringem Stromverbrauch.
              </p>
          <div className="flex gap-12 max-lg:flex-col">
            <img src="/images/ESP32.jpg" alt="ESP32" className="rounded-2xl" width="500px"/>
            <div className="flex flex-col gap-4 text-[1.5rem]">
              <p>WIFI und Bluetooth</p>
              <p>OV2640 Kamera</p>
              <p>2 MegaPixel</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
          </div>
        </section>
        <div className="flex max-lg:flex-col">
        <section id="sensor" className="p-5 mt-15 flex flex-col items-center">
            <h2 className="text-center text-[1.5rem] font-semibold">
               BerryBase HC-SR501 PIR Sensor
            </h2>
          <div className="flex flex-col justify-around">
            <img src="/images/PIR.jpg" alt="ESP32" className="rounded-2xl" width="250px"/>
          </div>
            
        </section>
        <section id="battery" className="p-5 mt-15 flex flex-col items-center">
            <h2 className="text-center text-[1.5rem] font-semibold">
               5000mAh Batterie
            </h2>
          <div className="flex flex-col justify-around">
            <img src="/images/PIR.jpg" alt="ESP32" className="rounded-2xl" width="250px"/>
          </div>
            
        </section>
        <section id="sensor" className="p-5 mt-15 flex flex-col items-center">
            <h2 className="text-center text-[1.5rem] font-semibold">
               3D-gedruckter Kasten
            </h2>
          <div className="flex flex-col justify-around">
            <img src="/images/PIR.jpg" alt="ESP32" className="rounded-2xl" width="250px"/>
          </div>
            
        </section>
        </div>
        <h2 className="text-[3rem] font-semibold">Setup</h2>
        <h2 className="text-[3rem] font-semibold">Funktionierende Kamera</h2>
      </main>
      <Footer />
    </div>
  );
}
