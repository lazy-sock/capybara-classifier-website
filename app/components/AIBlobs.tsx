import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

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
        <div className="relative">
          {/* Hidden SVG to define the mask */}
          <svg
            width="0"
            height="0"
            style={{ position: "absolute" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blobMask">
                {/* Use the EXACT same transform that works in your visible SVG */}
                <path d={normalBlobs[0]} transform="translate(225, 225)" />
              </clipPath>
            </defs>
          </svg>

          {/* Image container with the mask applied */}
          <div
            className="h-[450px] w-[450px] bg-cover bg-center"
            style={{
              backgroundImage: 'url("/blobs/image1.jpg")',
              clipPath: "url(#blobMask)",
            }}
          >
            <Link
              to={"/ai#dataset"}
              className="block h-full w-full hover:cursor-pointer"
            ></Link>
          </div>
          <h3 className="-mt-[30px] text-center text-[2rem]">Dataset</h3>
        </div>
        <div className="relative">
          {/* Hidden SVG to define the mask */}
          <svg
            width="0"
            height="0"
            style={{ position: "absolute" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blobMask">
                {/* Use the EXACT same transform that works in your visible SVG */}
                <path d={normalBlobs[1]} transform="translate(225, 225)" />
              </clipPath>
            </defs>
          </svg>

          {/* Image container with the mask applied */}
          <div
            className="h-[450px] w-[450px] bg-cover bg-center"
            style={{
              backgroundImage: 'url("/blobs/image2.webp")',
              clipPath: "url(#blobMask)",
            }}
          >
            <Link
              to={"/ai#dataset"}
              className="block h-full w-full hover:cursor-pointer"
            ></Link>
          </div>
          <h3 className="-mt-[30px] text-center text-[2rem]">Algorithm</h3>
        </div>
        <div className="relative">
          {/* Hidden SVG to define the mask */}
          <svg
            width="0"
            height="0"
            style={{ position: "absolute" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blobMask">
                {/* Use the EXACT same transform that works in your visible SVG */}
                <path d={normalBlobs[2]} transform="translate(225, 225)" />
              </clipPath>
            </defs>
          </svg>

          {/* Image container with the mask applied */}
          <div
            className="h-[450px] w-[450px] bg-cover bg-center"
            style={{
              backgroundImage: 'url("/blobs/image3.jpg")',
              clipPath: "url(#blobMask)",
            }}
          >
            <Link
              to={"/ai#dataset"}
              className="block h-full w-full hover:cursor-pointer"
            ></Link>
          </div>
          <h3 className="-mt-[30px] text-center text-[2rem]">Usage</h3>
        </div>
      </div>
    </>
  );
}
