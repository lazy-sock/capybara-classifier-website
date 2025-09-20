import type { Route } from "./+types/home";
import { Link } from "react-router-dom";
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
        <section id="esp32-cam" className="p-5 mt-4 max-w-[1000px] rounded-2xl shadow-xl">
            <h2 className="text-center text-[2rem] font-semibold">
              ESP32-CAM
            </h2>
              <p className="text-center text-[1.25rem] mb-8">
                Die Kamera zusammen mit ausreichend Rechenleistung und geringem Stromverbrauch.
              </p>
          <div className="flex gap-10 max-lg:flex-col">
            <img src="/images/ESP32.jpg" alt="ESP32" className="rounded-2xl" width="500px"/>
            <div className="flex flex-col gap-2 text-[1.5rem]">
              <p>WIFI und Bluetooth</p>
              <p>OV2640 Kamera</p>
              <p>2 MegaPixel</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
          </div>
        </section>
        <div className="flex justify-between max-lg:flex-col">
          <section id="sensor" className="p-5 mt-8 flex flex-col items-center">
              <h2 className="text-center text-[1.5rem] font-semibold">
                PIR Motion Sensor
              </h2>
            <div className="flex flex-col justify-around">
              <img src="/images/PIR.jpg" alt="ESP32" className="rounded-2xl" width="250px"/>
            </div>
              
          </section>
          <section id="battery" className="p-5 mt-8 flex flex-col items-center">
              <h2 className="text-center text-[1.5rem] font-semibold">
                5000mAh Batterie
              </h2>
            <div className="flex flex-col justify-around">
              <img src="/images/Battery.JPG" alt="ESP32" className="rounded-2xl" width="250px"/>
            </div>
              
          </section>
          <section id="sensor" className="p-5 mt-8 flex flex-col items-center">
              <h2 className="text-center text-[1.5rem] font-semibold">
                3D-gedrucktes Casing
              </h2>
            <div className="flex flex-col justify-around">
              <img src="/images/Casing.JPG" alt="ESP32" className="rounded-2xl" width="250px"/>
            </div>
              
          </section>
        </div>
        <div className="p-6 mt-4 max-w-[850px] rounded-2xl shadow-xl">
          <h2 className="text-[3rem] font-semibold">Setup</h2>
          <p className="p-2">
            Um die Kamera nachzubauen, musst die die oben gennanten komponenten wie in der folgenden Abbildung gezeigt verbinden.
          </p>
          <div className="flex justify-between max-lg:flex-col">
              <img src="/images/WiringEasy.png" alt="ESP32" className="rounded-2xl m-3 max-lg:mx-auto" width="500px"/>
            <p className="m-3">
              Wenn du den ESP programmieren möchtest, benötigst du ein FTDI Module den du an dein Endgerät anschließen kannst. Nachdem du die Kamera und den Adapter mit zwei weiteren Jumperkabeln verbunden hast, kannst du mit der Arduino IDE anfangen deinen ESP32 zu programmieren.
              <br/>Ein gutes Grundgerüst, an dem du dich orientiren kannst, ist das Beispiel 'Camera Webserver', das direkt mitimportiert wird, wenn du das ESP32 Board in der Arduino IDE installierst. 
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
