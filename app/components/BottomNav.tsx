import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    label: "Home",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        viewBox="0 0 512 512"
        className="fill-white"
      >
        <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
      </svg>
    ),
    label: "Camera",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        viewBox="0 0 512 512"
        className="fill-white"
      >
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
      </svg>
    ),
    label: "Images",
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

export const BottomNav = () => {
  const [active, setActive] = useState(0);
  const [bubbleLeft, setBubbleLeft] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
          style={{ left: 0, top: 0 }}
        >
          <defs>
            <mask id="navbarMask">
              <rect width="100%" height="100%" fill="white" />
              <path
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
            <button
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
            </button>
          ))}
        </div>

        {/* Bubble, positioned absolutely on top */}
        <motion.div
          className="bg-secondary absolute z-20 flex h-12 w-12 items-center justify-center rounded-full"
          style={{ left: bubbleLeft - bubbleRadius, top: -28 }}
          animate={{ left: bubbleLeft - bubbleRadius }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {tabs[active].icon}
        </motion.div>
      </div>
    </div>
  );
};
