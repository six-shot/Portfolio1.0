"use client";
import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../app/utils/useMousePosition";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <div className="font-monument_normal ">
      <main className="h-screen w-full bg-black">
        <motion.div
          className="w-full h-full flex justify-center items-center sm:text-[64px] leading-[50px]  text-[40px] sm:leading-[66px] text-[#afa18f] cursor-default mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="px-[4%] "
          >
            Some call me Optimus Prime - Your Trusty guide through the intricate
            and ever-evolving world of Frontend.
          </p>
        </motion.div>

        <div className="w-full h-full flex justify-center items-center sm:text-[64px] leading-[50px]  text-[40px] sm:leading-[66px] text-[#afa18f] cursor-default">
          <p className="px-[4%] ">
            I &apos; m a <span className="text-[#76d5cb]">selectively skilled</span>{" "}
            Frontend Developer with strong focus on producing high quality &
            impactful digital experience.
          </p>
        </div>
      </main>
    </div>
  );
}
