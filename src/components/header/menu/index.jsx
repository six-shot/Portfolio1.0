import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./style.module.scss";
import Link from "./link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Github from "../../../../public/assets/github";
import Image from "next/image";
import git from "../../../../public/git.gif"
import LinkedIn from "../../../../public/assets/linkedin";
import X from "../../../../public/assets/x";
import Instagram from "../../../../public/assets/instagram";

const menu = [
  {
    title: "About",
    description: "To  Know Everything About Me",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Projects",
    description: "To See Everything I Have Done",
    images: ["projects1.jpg", "projects2.jpg"],
  },

  {
    title: "Contact",
    description: "To Send A Message",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function index({ closeMenu }) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.div
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <IoCloseOutline style={{ fontWeight: "light" }} />
          </IconContext.Provider>
        </motion.div>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}
      >
        <a>
          <Github />
        </a>
        <a>
          {" "}
          <LinkedIn />
        </a>
        <a>
          {" "}
          <X />
        </a>
        <a>
          {" "}
          <Instagram />
        </a>
    
      </motion.div>
    </motion.div>
  );
}
