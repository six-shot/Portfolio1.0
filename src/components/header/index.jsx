"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Burger from "./burger";
import Stairs from "./stairs";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className=" ">
      <h2 className="uppercase font-monument_bold text-[26px] hidden text-white w-full bg-black px-[4%] h-[80px] sm:flex items-center fixed top-0 left-0"> Optimus Prime</h2>
      <h2 className="uppercase font-monument_bold text-white text-[26px] sm:hidden fixed top-0 left-0 h-[80px] flex w-full bg-black items-center p-[10px]"> O.P</h2>

      <div>
        <Burger
          openMenu={() => {
            setMenuIsOpen(true);
          }}
        />
        <AnimatePresence mode="wait">
          {menuIsOpen && (
            <>
              <Stairs />
              <Menu
                className="font-monument_bold"
                closeMenu={() => {
                  setMenuIsOpen(false);
                }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
