import Image from "next/image";
import React from "react";
import Link from "next/link";
import Price from "../cart/Price";
import Rebate from "../cart/Rebate";

function Card(props) {
  return (
    <>
      <div className="my-3">
        <div className="card-flex w-100 flex border-dotted border-b-2 border-slate-200">
          <div className="card-right ">
            <Image
              src={props.image}
              title="product"
              className="overflow-hidden border border-slate-200 rounded-sm p-2"
              width="80px"
              height="80px"
            ></Image>
            <div className="w-full count flex justify-center items-center border border-slate-200 rounded-sm">
              <Link href="/">
                <a className="text-slate-400 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 bg-slate-200 rounded-sm p-0.5 text-slate-400 hover:bg-blue-500 hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </a>
              </Link>
              <span className="text-slate-400 text-base items-center mx-3.5">
                ۲
              </span>
              <Link href="/">
                <a className="text-slate-400 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 bg-slate-200 rounded-sm p-0.5 text-slate-400 hover:bg-rose-500 hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="card-left w-100 pr-2">
            <div className="w-full flex justify-between items-center">
              <Link href="/">
                <a className="w-full">
                  <h6 className="lg:text-sm text-xs font-semibold  text-slate-900">
                    {props.title}
                  </h6>
                </a>
              </Link>
              <div class=" btn-group mx-2 dropend">
                <a
                  class=""
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class=" float-end bi bi-three-dots"></i>
                </a>
                <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                  <li class="flex items-center pb-2 ">
                    <i class="bi bi-pencil-fill text-sm ml-2"></i>
                    <span className="lg:text-sm text-xs">ویرایش </span>
                  </li>
                  <li class="flex items-center pt-2">
                    <i class="bi bi-trash3-fill text-sm ml-2"></i>
                    <span className="lg:text-sm text-xs">حذف</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <p className="text-slate-400 text-xs pr-2">{props.subTitle}</p>
            </div>
            <div className="flex my-2.5">
              <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                رنگ:قرمز
              </span>
              <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                گران ترین
              </span>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between justify-start">
              <div className="flex">
                <Price />
                <Rebate />
              </div>
              <div className="flex justify-end lg:my-0 my-2">
                <Link href="/">
                  <a className="w-full h-full text-[10px] text-blue-500 hover:text-blue-400">
                    انتقال به خرید بعدی
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
