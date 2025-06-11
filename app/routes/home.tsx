import type { Route } from "./+types/home";
import { Link } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FAQ } from "../components/FAQ";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Capybara protects your Birdhouse" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mt-30 text-black dark:text-white">
        <section
          id="hero"
          className="mt-12 mb-12 flex items-center justify-center px-4 lg:mt-20"
        >
          <div className="grid w-fit max-w-[1400px] grid-cols-2 gap-[100px] max-lg:grid-cols-1">
            <div className="flex flex-col justify-center max-lg:w-full max-lg:items-center">
              <h1 className="mb-4 text-[2.5rem] font-bold lg:mb-8 lg:text-6xl">
                Camera Birdhouse
              </h1>
              <p className="mb-6 text-[1.15rem] lg:text-[1.5rem]">
                Capybara is a smart birdhouse that uses AI to monitor and
                protect your birds. It provides real-time insights into bird
                activity, feeding schedules, and more. With its advanced camera
                system, you can watch your feathered friends live from anywhere.
              </p>
              <div className="flex gap-4">
                <Link
                  to="get_started"
                  className="bg-primary border-primary w-fit rounded-lg border-4 px-2 py-1 text-[1.4rem] font-semibold text-white hover:cursor-pointer lg:text-[1.7rem]"
                >
                  Get Started
                </Link>
                <Link
                  to="app"
                  className="text-primary dark:text-dark-white dark:bg-dark-primary w-fit rounded-lg border-4 bg-white px-2 py-1 text-[1.4rem] font-semibold hover:cursor-pointer lg:text-[1.7rem]"
                >
                  Go to App
                </Link>
              </div>
            </div>
            <div>
              <img src="illustrations/hero.svg" alt="Birdhouse" width="500px" />
            </div>
          </div>
        </section>
        <svg
          className="h-[100px] w-full"
          viewBox="0 460 960 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 475L26.7 480.8C53.3 486.7 106.7 498.3 160 501.5C213.3 504.7 266.7 499.3 320 489.7C373.3 480 426.7 466 480 464C533.3 462 586.7 472 640 483.2C693.3 494.3 746.7 506.7 800 503.2C853.3 499.7 906.7 480.3 933.3 470.7L960 461L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#204116"
          />
        </svg>

        <section
          id="artificial-intelligence"
          className="bg-primary min-h-[900px] text-white"
        >
          <h2 className="text-center text-[2rem] font-bold lg:text-[3rem]">
            Artificial Intelligence
          </h2>
        </section>
        <svg
          className="h-[100px] w-full rotate-180"
          viewBox="0 460 960 60"
          width="100%"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 503L26.7 499.5C53.3 496 106.7 489 160 480.8C213.3 472.7 266.7 463.3 320 469C373.3 474.7 426.7 495.3 480 495.8C533.3 496.3 586.7 476.7 640 472.8C693.3 469 746.7 481 800 487C853.3 493 906.7 493 933.3 493L960 493L960 540L933.3 540C906.7 540 853.3 540 800 540C746.7 540 693.3 540 640 540C586.7 540 533.3 540 480 540C426.7 540 373.3 540 320 540C266.7 540 213.3 540 160 540C106.7 540 53.3 540 26.7 540L0 540Z"
            fill="#204116"
          />
        </svg>

        <section id="smart-birdhouse" className="mt-12">
          <h2 className="text-center text-[2rem] font-bold lg:text-[3rem]">
            Smart Birdhouse
          </h2>
          <p></p>
        </section>
        <section id="faq" className="mt-12">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}
