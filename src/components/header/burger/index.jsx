'use client';
import styles from './style.module.scss';

export default function Burger({openMenu}) {

    return (
      <div
        onClick={() => {
          openMenu();
        }}
        className="w-[150px] h-[80px] bg-black hover:bg-[#76d5cb] hover:text-black text-white transition duration-500 flex flex-col justify-between fixed right-0 top-0 p-[10px] cursor-pointer"
      >
        <div className="bg-[#76d5cb] w-full absolute left-0 top-0 h-0 -z-[1] transition duration-300 hover:h-full"></div>
        <svg
          width="56"
          height="7"
          viewBox="0 0 56 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="56"
            y1="0.5"
            x2="4.37114e-08"
            y2="0.500005"
            stroke="white"
          />
          <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
        </svg>
        <p className=" uppercase  ">
          Menu
        </p>
      </div>
    );
}

