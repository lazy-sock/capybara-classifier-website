import type { Route } from "./+types/home";
import { Link } from "react-router";
import Footer from "../components/Footer";
import NavBar from "~/components/NavBar";
import React, { useState, useEffect } from "react";

// Animated SVG icons for hardware
const icons = {
  "esp32-cam": (
    <svg
      className="h-8 w-8 animate-pulse text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <circle cx="12" cy="14" r="3"></circle>
      <line x1="8" y1="7" x2="8" y2="4"></line>
      <line x1="16" y1="7" x2="16" y2="4"></line>
    </svg>
  ),
  "pir-motion-sensor": (
    <svg
      className="h-8 w-8 animate-bounce text-yellow-400"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v10l3 3" />
    </svg>
  ),
  "battery-pack": (
    <svg
      className="h-8 w-8 animate-pulse text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
    </svg>
  ),
  "arduino-ide": (
    <svg
      className="animate-spin-slow h-8 w-8 text-purple-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const hardwareData = [
  {
    id: "esp32-cam",
    name: "ESP32-CAM Module",
    imageUrl:
      "https://images.unsplash.com/photo-1590080877777-f1344849a34b?auto=format&fit=crop&w=600&q=80",
    shortDesc:
      "Compact microcontroller with camera & WiFi, perfect for live bird monitoring.",
    features: [
      "Built-in OV2640 camera module",
      "Supports WiFi & Bluetooth",
      "MicroSD card slot for storage",
    ],
    whyChosen:
      "Versatile and affordable, with ample processing power for AI image capture.",
    usage:
      "Captures images & streams video, connects wirelessly to your app for real-time bird recognition.",
  },
  {
    id: "pir-motion-sensor",
    name: "PIR Motion Sensor",
    imageUrl:
      "https://images.unsplash.com/photo-1600718373091-9baf50d30191?auto=format&fit=crop&w=600&q=80",
    shortDesc:
      "Passive infrared sensor that detects movement inside the birdhouse.",
    features: [
      "High sensitivity to movement",
      "Low power consumption",
      "Simple digital output signal",
    ],
    whyChosen:
      "Ensures the camera only activates when birds are present, saving battery life.",
    usage:
      "Triggers camera capture and AI processing only when motion is detected.",
  },
  {
    id: "battery-pack",
    name: "Rechargeable Battery Pack",
    imageUrl:
      "https://images.unsplash.com/photo-1583432595197-f9ffaf5ab254?auto=format&fit=crop&w=600&q=80",
    shortDesc:
      "Lithium-ion battery providing power to the ESP32 and sensors for off-grid operation.",
    features: [
      "3.7V, 18650 format",
      "Rechargeable via solar panel",
      "Long-lasting capacity",
    ],
    whyChosen:
      "Reliable power source ensuring uninterrupted operation in remote locations.",
    usage:
      "Supplies energy to the entire system, keeping your birdhouse smart and autonomous.",
  },
  {
    id: "arduino-ide",
    name: "Arduino IDE",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Arduino_Logo.svg",
    shortDesc:
      "User-friendly software for programming the ESP32 microcontroller.",
    features: [
      "Open source and widely supported",
      "Simplifies microcontroller programming",
      "Serial monitor for debugging",
    ],
    whyChosen: "Easy to use and supports the ESP32 ecosystem extensively.",
    usage: "Used for flashing firmware and updating birdhouse control logic.",
  },
];


// Wiring diagram component with hoverable tooltips
const WiringDiagram = () => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const parts = [
    {
      id: "esp32",
      name: "ESP32-CAM",
      coords: { top: "40%", left: "20%" },
      description:
        "The main controller with camera and WiFi. Captures images and streams data.",
    },
    {
      id: "pir",
      name: "PIR Motion Sensor",
      coords: { top: "60%", left: "50%" },
      description:
        "Detects movement inside the birdhouse, triggers image capture.",
    },
    {
      id: "battery",
      name: "Battery Pack",
      coords: { top: "75%", left: "80%" },
      description:
        "Provides off-grid power for the system, rechargeable via solar panels.",
    },
  ];

  return (
    <div className="relative mx-auto my-16 w-full max-w-4xl select-none">
      <img
        src="https://community.appinventor.mit.edu/uploads/default/original/2X/0/0cc1991000324f1473a3d75f5b0cb0a055b0eb93.png"
        alt="Birdhouse wiring diagram"
        className="w-full rounded-lg object-cover shadow-lg"
        loading="lazy"
      />
      {parts.map(({ id, name, coords, description }) => (
        <button
          key={id}
          className={`bg-primary absolute cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-white transition-opacity duration-300 ${
            hoveredPart === id ? "z-30 opacity-100" : "opacity-70"
          }`}
          style={{
            top: coords.top,
            left: coords.left,
            transform: "translate(-50%, -50%)",
          }}
          onMouseEnter={() => setHoveredPart(id)}
          onMouseLeave={() => setHoveredPart(null)}
          aria-describedby={`${id}-desc`}
        >
          {name}
        </button>
      ))}
      {/* Tooltip box */}
      {hoveredPart && (
        <div
          id={`${hoveredPart}-desc`}
          className="absolute z-40 max-w-xs rounded-lg bg-white p-4 text-sm text-gray-900 shadow-lg"
          style={{
            top: parts.find((p) => p.id === hoveredPart)?.coords.top || "50%",
            left: parts.find((p) => p.id === hoveredPart)?.coords.left || "50%",
            transform: "translate(110%, -50%)",
            minWidth: "200px",
          }}
          role="tooltip"
        >
          {parts.find((p) => p.id === hoveredPart)?.description}
        </div>
      )}
    </div>
  );
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Hardware() {
  return (
    <div className="dark:from-dark-secondary dark:to-dark-secondary min-h-screen bg-gradient-to-tr from-blue-50 via-white to-green-50 transition-colors duration-700 dark:via-green-950">
      <NavBar />
      <main className="mx-auto mt-28 max-w-6xl p-4">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="dark:text-dark-white flex-grow text-center text-4xl font-extrabold text-gray-900">
            Hardware
          </h1>
        </div>

        {/* Hardware sections */}
        <section aria-label="Hardware components" className="space-y-12">
          {hardwareData.map(
            ({ id, name, imageUrl, shortDesc, features, whyChosen, usage }) => (
              <article
                key={id}
                className="dark:bg-dark-primary flex flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:flex-row"
              >
                <div className="mb-4 flex items-center justify-center md:mb-0 md:w-1/3">
                  {icons[id]}
                </div>
                <div className="dark:text-dark-white text-gray-900 md:w-2/3 md:pl-6">
                  <h2 className="mb-2 text-2xl font-bold">{name}</h2>
                  <p className="mb-2 italic">{shortDesc}</p>
                  <ul className="mb-2 list-inside list-disc">
                    {features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                  <p className="mb-1 font-semibold">Why this?</p>
                  <p className="mb-2">{whyChosen}</p>
                  <p className="mb-1 font-semibold">Usage</p>
                  <p>{usage}</p>
                </div>
              </article>
            ),
          )}
        </section>

        {/* Wiring Diagram */}
        <h2 className="dark:text-dark-white mt-16 mb-6 text-center text-3xl font-bold">
          Wiring Diagram
        </h2>
        <WiringDiagram />
      </main>
      <Footer />
    </div>
  );
}

