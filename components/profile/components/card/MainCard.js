import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Price from "../cart/Price";
import Rebate from "../cart/Rebate"


const MainCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="MainCard MainCardStyle bg-white rounded-md border border-slate-100 overflow-hidden" data-aos="zoom-out">
       <div className="relative">
       <svg width="100" height="100" viewBox="0 0 200 200" className="-rotate-45 absolute -bottom-[18px] -right-[58px]">
            <g transform="translate(100,100)">
            <path d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#f00"/>
            </g>
      </svg>
      <span className="text-xs font-semibold text-white z-[999999] overflow-hidden relative right-[4px] -bottom-[5px]">%۲۰</span>
       </div>
      <div className="w-full h-full flex justify-center items-center">
        <Link href="/">
        <a>
        <Image
          className=""
          src="/../public/assets/img/products/1.png"
          width={150}
          height={150}
          alt="مهرپل"
        />
        </a>
        </Link>
      </div>
      <div className="MainCard-body text-center bg-slate-200 p-2">
        <Link href='/'>
        <a>
        <h5 className="text-center mt-2 text-xs font-semibold hover:text-slate-800">
          ماشین چمن زنی مدل ایستاده
        </h5>
        </a>
        </Link>
        <div className="MainCardPrice my-2.5">
        <Rebate />
         <Price />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
