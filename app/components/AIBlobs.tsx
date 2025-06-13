import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";

export default function AIBlobs() {
  const normalBlobs = [
    "M118.4 -135.5C155.3 -110.1 188.4 -74.6 200.4 -31.6C212.4 11.3 203.2 61.6 177.9 100.1C152.6 138.6 111.2 165.1 68.4 175.1C25.7 185.1 -18.5 178.5 -57.8 162.6C-97.2 146.6 -131.7 121.3 -149 87.8C-166.2 54.2 -166.2 12.5 -162.2 -31.8C-158.1 -76 -150.1 -122.6 -122.4 -149.7C-94.7 -176.9 -47.4 -184.4 -3.3 -180.5C40.7 -176.5 81.4 -161 118.4 -135.5",
  ];
  const hoveredBlobs = [
    "M127.6 -182.1C159.9 -152.1 177 -107.6 186.1 -64.1C195.3 -20.6 196.6 21.8 188.7 66.1C180.9 110.3 163.9 156.3 130.9 177C98 197.8 49 193.4 6.1 185C-36.7 176.6 -73.5 164.1 -106.4 143.3C-139.4 122.6 -168.6 93.4 -182 57.8C-195.3 22.2 -192.7 -19.8 -179.8 -58C-166.8 -96.2 -143.3 -130.6 -111.6 -160.8C-79.9 -191 -40 -217 3.8 -222.3C47.6 -227.5 95.2 -212.1 127.6 -182.1",
  ];
  return (
    <>
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
              <rect x="0" y="0" width="450" height="450" fill="#204116"></rect>
              <g transform="translate(204.38153791676166 225.8110429923688)">
                <motion.path d={normalBlobs[0]} fill="#FFFFFF"></motion.path>
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
              <rect x="0" y="0" width="450" height="450" fill="#204116"></rect>
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
              <rect x="0" y="0" width="450" height="450" fill="#204116"></rect>
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
    </>
  );
}
