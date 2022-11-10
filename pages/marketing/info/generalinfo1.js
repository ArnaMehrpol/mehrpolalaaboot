import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const generalinfo = () => {
  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex bg-slate-100 ">
          <div>
            <MarketingInfoSide/>
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span- col-span- shadow-lg shadow-slate-100 relative">
            <MarketingInfoHeader/>
            <section className="generalinfo-container max-w-screen-md mx-auto flex justify-center items-center relative z-[]">
              <div className="generalinfo-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[5rem]">
                <div className="generalinfo-title flex flex-col my-4">
                  <h5 className="text-base font-semibold text-slate-600">
                    مشخصات عمومی
                  </h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    اطلاعات عمومی صاحب کسب و کار را وارد نمایید
                  </small>
                </div>
                <div className="generalinfo">
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام"
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام خانوادگی
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام خانوادگی"
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        کدملی
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="کدملی"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        تاریخ تولد
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="تاریخ تولد"
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        محل تولد
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="محل تولد "
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        جنسیت
                      </label>
                      <select
                        class="form-select form-select-text-style  py-[0.575rem]"
                        aria-label="Default select example"
                      >
                        <option selected>جنسیت</option>
                        <option className="text-slate-400 text-sm" value="1">
                          مرد
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        سمت را انتخاب کنید
                      </label>
                      <select
                        class="form-select form-select-text-style  py-[0.575rem]"
                        aria-label="Default select example"
                      >
                        <option selected>سمت را انتخاب کنید</option>
                        <option
                          className="text-slate-400 text-sm"
                          value="1"
                        ></option>
                      </select>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        تاریخ تولد
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="شماره همراه ۱"
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        شماره همراه ۲
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="شماره همراه ۲"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-6 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        حساب بانکی
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="شماره حساب"
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-6 col-span-12">
                      <div class="all-input-group input-group mt-[30px]">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="شماره شبا "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-text my-3">
                    <p className="text-xs text-slate-600 text-justify">
                      این شماره صرفا برای واریز مبالغ دریافتی بابت فروش و برگشتی
                      استفاده می شود و از نظر مهر پل به عنوان حساب مرجع شناخته
                      می شود.{" "}
                    </p>
                  </div>
                </div>
                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <Link href="/">
                    <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                      <span className="text-white text-xs">
                        ثبت و مرحله بعد
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default generalinfo;
