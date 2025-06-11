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
          <h2 className="mb-8 text-center text-[2rem] font-semibold lg:text-[3rem]">
            Artificial Intelligence
          </h2>
          <p className="mx-auto mb-10 max-w-[1000px] text-center text-[1.25rem]">
            We created an AI algorithm to classify birds. That's not a
            particularly new idea. But this task is done quite well. The AI not
            only classifies birds, but is also able to learn new species by
            itself. It was trained with images from an image generation model
            and still recognizes real birds easily.
          </p>
          <h3 className="text-center text-[2.5rem]">Statistics</h3>
          <h3 className="text-center text-[2.5rem]">Want to learn more?</h3>
          <div className="flex w-full flex-col justify-center gap-[100px] lg:flex-row">
            <div>
              <button className="hover:cursor-pointer">
                <svg
                  id="visual"
                  viewBox="0 0 450 450"
                  width="450"
                  height="450"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <rect
                    x="0"
                    y="0"
                    width="450"
                    height="450"
                    fill="#204116"
                  ></rect>
                  <g transform="translate(204.38153791676166 225.8110429923688)">
                    <path
                      d="M118.4 -135.5C155.3 -110.1 188.4 -74.6 200.4 -31.6C212.4 11.3 203.2 61.6 177.9 100.1C152.6 138.6 111.2 165.1 68.4 175.1C25.7 185.1 -18.5 178.5 -57.8 162.6C-97.2 146.6 -131.7 121.3 -149 87.8C-166.2 54.2 -166.2 12.5 -162.2 -31.8C-158.1 -76 -150.1 -122.6 -122.4 -149.7C-94.7 -176.9 -47.4 -184.4 -3.3 -180.5C40.7 -176.5 81.4 -161 118.4 -135.5"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </button>
              <h3 className="-mt-[30px] text-center text-[2rem]">Dataset</h3>
            </div>
            <div>
              <button className="hover:cursor-pointer">
                <svg
                  id="visual"
                  viewBox="0 0 450 450"
                  width="450"
                  height="450"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <rect
                    x="0"
                    y="0"
                    width="450"
                    height="450"
                    fill="#204116"
                  ></rect>
                  <g transform="translate(226.66265055739558 215.8023946868828)">
                    <path
                      d="M119.1 -144.7C147.3 -118.2 158.3 -74 164.2 -30.5C170.1 13.1 170.8 56 153.6 91.4C136.4 126.8 101.4 154.5 60 173.3C18.6 192 -29.2 201.7 -70.7 188.9C-112.2 176.1 -147.5 140.8 -162.3 100.7C-177.2 60.6 -171.7 15.6 -159.6 -23.8C-147.4 -63.2 -128.7 -97.1 -101 -123.7C-73.3 -150.3 -36.6 -169.7 4.4 -174.9C45.4 -180.1 90.8 -171.3 119.1 -144.7"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </button>
              <h3 className="-mt-[30px] text-center text-[2rem]">Algorithm</h3>
            </div>
            <div>
              <button className="hover:cursor-pointer">
                <svg
                  id="visual"
                  viewBox="0 0 450 450"
                  width="450"
                  height="450"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <rect
                    x="0"
                    y="0"
                    width="450"
                    height="450"
                    fill="#204116"
                  ></rect>
                  <g transform="translate(219.1576523566743 210.8573209521628)">
                    <path
                      d="M128.9 -145.3C164.9 -123.5 190.3 -80.8 199.2 -34.5C208.2 11.8 200.6 61.7 177.1 102.1C153.6 142.6 114.1 173.7 70.5 186.5C26.9 199.2 -20.7 193.6 -65.7 178.2C-110.6 162.8 -152.7 137.6 -174 100.6C-195.2 63.5 -195.6 14.5 -181.7 -26.4C-167.7 -67.2 -139.5 -99.9 -106.8 -122.2C-74.1 -144.6 -37.1 -156.7 4.7 -162.3C46.5 -167.9 93 -167.1 128.9 -145.3"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </button>
              <h3 className="-mt-[30px] text-center text-[2rem]">Usage</h3>
            </div>
          </div>
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
