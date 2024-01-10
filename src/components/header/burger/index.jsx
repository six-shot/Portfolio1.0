'use client';
import styles from './style.module.scss';

export default function Burger({openMenu}) {

    return (
      <div>
        <div
          onClick={() => {
            openMenu();
          }}
          className="pr-[4%] py-[10px] h-[80px] bg-black hover:bg-[#76d5cb] hover:text-black text-white transition duration-500 xl:flex hidden flex-col fixed top-0 right-0 justify-between   cursor-pointer"
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
          <p className=" uppercase  font-monument_normal">Menu</p>
        </div>
        <div
          onClick={() => {
            openMenu();
          }}
          className="w-[150px] h-[80px] bg-black hover:bg-[#76d5cb] hover:text-black text-white transition duration-500 xl:hidden flex flex-col fixed top-0 right-0 justify-between  items-end p-[10px] cursor-pointer"
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
          <p className=" uppercase  font-monument_normal">Menu</p>
        </div>
      </div>
    );
}

