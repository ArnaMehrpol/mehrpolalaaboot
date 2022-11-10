import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const agreement = () => {
  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex bg-slate-100 ">
          <MarketingInfoSide/>
          <div className="business-panel-mainbar w-100 lg:col-span- col-span- shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader/>
            <section className="agreement-container max-w-screen-md mx-auto flex justify-center items-center relative z-[]">
              <div className="agreement-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[4.5rem]">
                <div className="agreement-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">قراردادها</h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    در این قسمت قراردادهای خود را وارد کنید.
                  </small>
                </div>
                <div className="agreement">
                  <div className="agreement-grid grid grid-cols-12 gap-3">
                    <div className="agreement-input lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        موضوع قرارداد
                      </label>
                      <div class="agreement-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="موضوع قرارداد"
                        />
                      </div>
                    </div>
                    <div className="agreement-select lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        استان
                      </label>
                      <select
                        class="form-select form-select-text-style py-[0.575rem]"
                        aria-label="Default select example"
                      >
                        <option selected className="">
                          البرز
                        </option>
                        <option className="text-slate-600 text-sm" value="1">
                          تهران
                        </option>
                        <option className="text-slate-600 text-sm" value="2">
                          اصفهان
                        </option>
                        <option className="text-slate-600 text-sm" value="3">
                          مرکزی
                        </option>
                      </select>
                    </div>
                    <div className="agreement-input lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        نام کارفرما
                      </label>
                      <div class="agreement-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام کارفر"
                        />
                      </div>
                    </div>
                    <div className="agreement-select lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        وضعیت
                      </label>
                      <select
                        class="form-select form-select-text-style py-[0.565rem]"
                        aria-label="Default select example"
                      >
                        <option selected className="text-slate-600 text-sm">
                          وضعیت
                        </option>
                        <option className="text-slate-600 text-sm" value="1">
                          درجریان
                        </option>
                        <option className="text-slate-600 text-sm" value="2">
                          به اتمام رسیده{" "}
                        </option>
                        <option className="text-slate-600 text-sm" value="3">
                          فسخ
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="save-btn flex justify-end items-end mt-2">
                    <Link href="/">
                      <a className="px-3.5 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                        <span className="text-white text-xs">ثبت اطلاعات</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="agreement-list-tabele-content mt-5">
                  <div className="agreement-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لیست قراردادها</h5>
                  </div>
                  <table class="agreement-list-tabele table table-bordered rounded-md overflow-hidden mb-8">
                    <thead>
                      <tr className=" bg-slate-100 text-center text-slate-500 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">موضوع قرارداد</th>
                        <th scope="col">نام کارفرما</th>
                        <th scope="col">وضعیت</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۱
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۲
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۳
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۴
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <Link href="/aa/user-info/social">
                      <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                        <span className="text-white text-xs">
                          ثبت و مرحله بعد
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default agreement;
