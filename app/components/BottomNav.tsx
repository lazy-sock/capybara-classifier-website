import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tabs = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        viewBox="0 0 576 512"
        className="fill-white"
      >
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
    ),
    label: "app",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={30}
        className="fill-white"
      >
        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
      </svg>
    ),
    label: "settings",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        viewBox="0 0 448 512"
        className="fill-white"
      >
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    ),
    label: "Wiki",
  },
];

export const BottomNav = ({ selected = 0 }) => {
  const [active, setActive] = useState(selected || 0);
  const [bubbleLeft, setBubbleLeft] = useState(0);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const el = buttonRefs.current[active];
    if (el) {
      setBubbleLeft(el.offsetLeft + el.offsetWidth / 2);
    }
  }, [active]);

  const bubbleRadius = 24; // half of bubble size (48x48)

  return (
    <div className="relative">
      <div className="fixed bottom-6 left-1/2 z-10 w-[90%] max-w-md -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100px"
          className="absolute z-0"
          style={{ left: 0, bottom: 0 }}
        >
          <defs>
            <mask id="navbarMask" maskUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="white" />
              <path
                id="cutRoute"
                transform={`translate(${bubbleLeft - bubbleRadius - 43}, -10)`}
                fill="black"
                d="M0 6L0 8C12.6512 12.2911 24.7136 15.8978 36 23.5201C48.747 32.1287 55.5251 45.1789 73 41.6204C82.5498 39.6756 90.2195 30.4457 97 24.0355C107.135 14.4536 116.79 7.0228 130 3C122.87-3.22852 108.124-3.77869 99-5.42439C86.7211-7.63904 74.5586-10.51542 62-9.96065C53.6654-9.59247 45.0654-6.88929 37-4.87346C24.526-1.755747 12.0074 1.368 0 6z"
              />
            </mask>
          </defs>
        </svg>
        {/* Common relative container for navbar + bubble */}
        {/* SVG mask positioned behind navbar */}

        {/* Navbar with SVG mask applied */}
        <div
          className="bg-primary relative z-5 flex justify-between rounded-full px-4 py-2 shadow-lg"
          style={{
            mask: `url(#navbarMask)`,
            WebkitMask: `url(#navbarMask)`,
          }}
        >
          {tabs.map((tab, index) => (
            <Link
              to={`/${tab.label.toLowerCase()}`}
              key={index}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              onClick={() => setActive(index)}
              className="relative z-10 flex w-1/4 flex-col items-center bg-transparent"
            >
              {/* Hide icon if active (shown in bubble) */}
              <div
                className={`text-xl transition-opacity duration-200 ${
                  active === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {tab.icon}
              </div>
              <div
                className={`mt-1 h-1 w-1 rounded-full ${
                  active === index ? "bg-white" : "bg-transparent"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Bubble, positioned absolutely on top */}
        <div
          className="bg-secondary absolute z-20 flex h-12 w-12 items-center justify-center rounded-full"
          style={{ left: bubbleLeft - bubbleRadius, top: -28 }}
          // animate={{ left: bubbleLeft - bubbleRadius }}
          // transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {tabs[active].icon}
        </div>
      </div>
    </div>
  );
};
