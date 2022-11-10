import Image from "next/image";
import React from "react";
import Link from "next/link";
import Price from "../cart/Price";
import Rebate from "../cart/Rebate";

const questionAnswer = () => {
  return (
    <>
      <div className="border border-slate-200 rounded-md mt-3 bg-white lg:p-3">
        <div className="question-answer flex">
          <Image
            src="/../public/assets/img/products/14.png"
            title="product"
            className="border border-slate-200 rounded-sm lg:p-2 bg-white"
            height="80"
            width="80"
          ></Image>
          <div className="flex flex-col pr-3 space-y-2">
            <div className="w-full h-full flex justify-between items-center">
              <span></span>
            <span className="lg:w-14 w-12 lg:h-5 h-3 bg-slate-100 text-slate-400 md:text-xs text-[10px] flex items-center justify-center rounded-sm">
            ۱۴۰۱/۰۷/۲۶
              </span>

            </div>
            <p
              className="text-xs font-semibold"
              title="دستگاه کراشر چوب و برگ خرد کن آسیاب دار موتوری دیزلی مدل TP520"
            >
              {" "}
              دستگاه کراشر چوب و برگ خرد کن آسیاب دار موتوری دیزلی مدل TP520
            </p>
            <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:items-center ">
              <div className="flex">
                <Price />
                <Rebate />
              </div>
              <Price />
            </div>
          </div>
        </div>
        <div className="w-full h-ful flex justify-between items-center mt-2">
          <p className="text-xs text-slate-400">
            این محصول از نظر کیفیت بی نظیر است ، آیا رنگ دیگری هم دارد؟
          </p>
        </div>
      </div>
    </>
  );
};

export default questionAnswer;
