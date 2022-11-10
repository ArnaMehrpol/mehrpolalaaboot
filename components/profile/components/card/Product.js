import Image from "next/image";
import React from "react";
import Link from "next/link";
import Price from "../cart/Price";

const Favoritcard = () => {
  return (
    <>
      <div className="relative">
        <svg
          width="50"
          height="50"
          viewBox="0 0 200 200"
          className="-rotate-45 absolute -right-[23px] top-0"
        >
          <g transform="translate(100,100)">
            <path d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#f00" />
          </g>
        </svg>
        <span className="text-[11px] font-semibold text-white z-[999999] overflow-hidden relative top-[24px] right-[3px] ">
          %۲۰
        </span>
      </div>
      <div className="product-flex flex bg-white overflow-hidden rounded-md border border-slate-50">
        <div className="product-image lg:ml-2">
          <div className="bg-slate-100 flex justify-center items-center rounded-sm lg:w-20 w-12 lg:h-20 h-12">
            <Link href="/">
              <a>
                <Image
                  src="/../public/assets/img/products/1.png"
                  alt='pic'
                  width="50"
                  height="50"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="product-info w-full h-full flex flex-col">
          <h4 className="text-xs lg:font-semibold text-slate-600
           mt-2">
            علوفه خرد کن یک تن در ساعت سه فاز
          </h4>
          <div className="inline-flex justify-end mx-2 mt-4">
            <del className="text-xs text-slate-400 font-semibold">
              ۵.۱۳۰.۰۰۰
            </del>
            <Price />
          </div>
        </div>
      </div>
    </>
  );
};
export default Favoritcard;
