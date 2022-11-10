import React from 'react'
import Link from "next/link";
import Image from "next/image";

const MarketingInfoHeader = () => {
  return (
    <div>
      <header className="header-container w-[100%] px-12 mx-auto bg-white h-[60px] relative lg:z-[10]">
        <div className="header-flex h-full flex items-center">
          <Link href="/">
            <a className="header-link relative">
              <span className="w-5 h-5 rounded-full flex justify-center items-center bg-rose-500 text-white text-xs absolute -top-3 -right-[5px] opacity-80">
                ۳
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </a>
          </Link>
          <form className="d-flex me-auto relative mr-20" role="search">
            <input
              className="px-6 py-1.5 bg-slate-100 rounded-full focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-600 overflow-hidden"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <i class="bi bi-search absolute right-5 bottom-1"></i>
          </form>
        </div>
      </header>
    </div>
  )
}

export default MarketingInfoHeader
