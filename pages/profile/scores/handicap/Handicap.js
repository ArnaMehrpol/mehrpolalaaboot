import React from "react";
import CardHandicap from "./card/CardHandicap";

import style from "./Handicap.module.css";

const Handicap = () => {
  return (
    <>
    <div>
        <div className="mainTitle relative lg:my-0 my-4" dir="rtl">
          <h6 className="text-muted fw-bold border-b-2 border-blue-500 w-20 py-1.5">
            امتیاز دهی
          </h6>
        </div>
        <div className="w-full h-full flex justify-between items-center px-2">
          <p className="text-[13px] font-semibold my-3 text-slate-500">{`شماره سفارش: ${"۲۱۳۵۴۷۷۸"}`}</p>
          <p className="text-[13px] font-semibold my-3 text-slate-500">{`مبلغ خرید: ${"۲۱۳.۵۴۷.۷۸۵"}`}</p>
          <p className="text-[13px] font-semibold my-3 text-slate-500">{` تاریخ تحویل: ${"۱۴۰۱/۰۷/۲۲"}`}</p>
        </div>
        <div className="bg-white shadow shadow-slate-400 px-2 pt-6 rounded-lg border border-slate-600">
          <div className="flex flex-col">
            <div className="w-full grid grid-cols-3 ">
              <div className="md:col-span-1 col-span-3 border-l border-slate-200">
                <CardHandicap/>
              </div>
              <div className="md:col-span-1 col-span-3 border-l border-slate-200">
                <CardHandicap />
              </div>
              <div className="md:col-span-1 col-span-3">
                <CardHandicap />
              </div>
            </div>
            <div className="border-b-2 border-dotted border-slate-300 -mx-2"></div>
            <div className="w-full h-full flex md:flex-row flex-col md:justify-between md:items-center mb-4 mt-5">
            <div className="md:w-1/2 w-full  flex justify-between items-center">
                  <p className="w-48 px-2 text-[11px] text-slate-500
                  
                  ">
                    نحوه پاسخگویی الگانس
                  </p>
                <div class="w-full">
                  <div class="">
                    <div class="w-full h-[10px] relative bg-light rounded-2xl">
                      <div
                        class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[82%]
                        "
                      >
                        <span className="shadow-md rounded text-[10px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                          <span
                            class="w-2 h-2 rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                          "
                          ></span>
                          ۸۲%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="rounded text-[11px] px-2 ">۱۰۰</p>
                      <p className="rounded text-[11px] px-2 ">۰</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="inline-flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 md:px-4 px-3 rounded text-sm">
                  ثبت
                </button>
              </div>
            </div>   
          </div>
        </div>
     </div>
    </>
  );
};

export default Handicap;
