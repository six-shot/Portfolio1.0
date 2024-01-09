import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./style.module.scss";
import Link from "./link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const menu = [
  {
    title: "About",
    description: "To  Know Everything",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Projects",
    description: "To See Everything",
    images: ["projects1.jpg", "projects2.jpg"],
  },

  {
    title: "Contact",
    description: "To Send a FAX",
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
        <a>GT</a>
        <a>X</a>
        <a>IG</a>
        <a>IN</a>
      </motion.div>
    </motion.div>
  );
}
