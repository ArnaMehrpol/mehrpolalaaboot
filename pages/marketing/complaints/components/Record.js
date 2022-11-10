import React from "react";
import Link from "next/link";
import Image from "next/image";

const Record = () => {
  return (
    <div>
       <div className="overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="bg-white rounded-lg border border-slate-100 p-4 flex flex-col">
            <div className="grid grid-cols-4 space-x-2 space-y-4">
              <div className="w-full md:col-span-2 col-span-4 flex md:flex-row flex-col md:items-center md:space-x-2 rtl:space-x-reverse md:space-y-0 space-y-2">
                <p className="md:w-[14rem] text-slate-600 text-xs"> شکایت از :</p>
                <div className="w-full">
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> انتخاب کنید</option>
                    <option
                      className="text-sm text-slate-400"
                      value="1"
                    ></option>
                    <option
                      className="text-sm text-slate-400"
                      value="2"
                    ></option>
                    <option
                      className="text-sm text-slate-400"
                      value="3"
                    ></option>
                  </select>
                </div>
                <div className="all-input-group input-group md:col-span-1 col-span-2">
                  <input
                    type="text"
                    className="form-control placeholder:text-[7px]"
                    placeholder="نام کسب و کار "
                  />
                </div>
              </div>
              <div className="w-full md:col-span-2 col-span-4 flex md:items-start md:justify-end">
                <p className="text-slate-500 text-xs">
                  تولیدی / ساختمان / دکوراسیون داخلی{" "}
                </p>
              </div>
              <div className="w-full md:col-span-2 col-span-4 flex md:flex-row flex-col md:items-center">
                <p className="md:w-28 text-slate-600 text-xs md:pb-0 pb-2">
                  موضوع شکایت :
                </p>
                <div className="w-full">
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> انتخاب کنید</option>
                    <option
                      className="text-sm text-slate-400"
                      value="1"
                    ></option>
                    <option className="text-sm text-slate-400" value="2">
                      {" "}
                    </option>
                    <option className="text-sm text-slate-400" value="3">
                      {" "}
                    </option>
                  </select>
                </div>
              </div>
              <div className="w-full md:col-span-2 col-span-4 flex md:flex-row flex-col md:items-center md:pr-2">
                <p className="md:w-24 text-slate-600 text-xs md:pb-0 pb-2">
                  شماره سفارش:
                </p>
                <div className="w-full">
                  <div className="w-full all-input-group input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full col-span-4 flex md:flex-row flex-col md:items-start">
                <p className="md:w-24 text-slate-600 text-xs md:pb-0 pb-2">
                  {" "}
                  متن شکایت :
                </p>
                <div class="w-full input-group">
                  <textarea
                    class="form-control"
                    rows="6"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
              <div className="w-full col-span-4 flex md:pr-24">
                <p className="text-slate-600 text-xs">پیوست :</p>
                <Link href="/">
                  <a>
                    <i class="bi bi-paperclip text-lg text-slate-600"></i>
                  </a>
                </Link>
              </div>
              <div className="w-full md:col-span-2 col-span-4 flex md:flex-row flex-col md:items-center md:space-x-2 rtl:space-x-reverse md:space-y-0 space-y-2">
                <p className="lg:w-[14rem] w-[rem] text-slate-600 text-xs"> اولویت :</p>
                <div className="w-full">
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> انتخاب کنید</option>
                    <option
                      className="text-sm text-slate-400"
                      value="1"
                    ></option>
                    <option
                      className="text-sm text-slate-400"
                      value="2"
                    ></option>
                    <option
                      className="text-sm text-slate-400"
                      value="3"
                    ></option>
                  </select>
                </div>
                <div className="w-full all-input-group input-group">
                  <Link href="complaints/components/history">
                    <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center px-1 md:py-2 py-0.5 rounded-sm">
                      مشاهده تاریخچه معاملات
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full end-save flex justify-end">
              <Link href="/">
                <a className="px-3 py-1 bg-blue-500 rounded-md hover:bg-blue-400">
                  <span className="text-xs text-white">ارسال</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Record;
