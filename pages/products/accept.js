import React from "react";
import Link from "next/link";
import Image from "next/image";
import picPNG from "/public/assets/img/logos/1.png";
const accept = () => {
  return (
    <div>
      <section
        className="max-w-screen-lg mx-auto px-3 relative lg:mt-[85px] mt-[42px]"
        dir="rtl"
      >
        <div className=" bg-white overflow-hidden rounded-lg shadow-md p-4 pb-3">
          <div className="list-products-title flex flex-col">
            <h5 className="text-base font-semibold">محصولات دریافتی</h5>
            <small className="text-slate-600 text-xs mt-0.5">
              محصولات دریافتی در این قسمت نمایش داده می شود .
            </small>
          </div>
          <div className="flex flex-col mb-5">
            <div className="accept-products-title flex flex-col my-4">
              <h5 className="text-sm text-slate-600 font-semibold">
                امروز ۱۴۰۱/۰۶/۰۶
              </h5>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="md:col-span-1 col-span-3 border border-slate-300 rounded-md flex flex-col ">
                <div className="w-full bg-slate-100 flex p-2 relative border-b border-slate-300">
                  <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
                    <Image
                      src={picPNG}
                      className="w-full h-full rounded-full flex justify-center items-center"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex flex-col justify-center mr-4 space-y-1.5">
                    <p className="text-slate-600 text-sm font-semibold">
                      فروشگاه مبل لند
                    </p>
                    <span className="text-slate-500 text-xs">
                      تولیدی - لوازم خانگی - مبلمان
                    </span>
                  </div>
                  <div className="absolute left-3">
                    <div class="btn-group dropend">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                        <li class="flex items-center pb-2 ">
                          <i class="bi bi-pencil-fill text-xs ml-2"></i>
                          <span className="text-xs">ویرایش </span>
                        </li>
                        <li class="flex items-center pt-2">
                          <i class="bi bi-trash3-fill text-xs ml-2"></i>
                          <span className="text-xs">حذف</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="w-full pictures flex items-end space-x-2 rtl:space-x-reverse border-b-2 border-dotted border-slate-300 pb-3">
                    <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 md:space-y-0 space-y-2 mt-2">
                    <div className="md:col-span-2 col-span-5">
                      <p className="text-slate-600 text-xs">
                        صندلی مدل تمام چوب دسته دار
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-5 flex flex-col">
                      <del className="text-slate-400 text-[12px]">
                        ۳.۵۶۸.۱ تومان
                      </del>
                      <p className="text-slate-600 text-sm">۲.۵۴۸.۱۴۵ تومان</p>
                    </div>
                    <Link href="/">
                      <a className="md:col-span-1 col-span-5 flex flex-col items-end">
                        <i class="bi bi-heart text-base text-rose-500"></i>
                        <i class="bi bi-trash text-base text-slate-500"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 col-span-3 border border-slate-300 rounded-md flex flex-col ">
                <div className="w-full bg-slate-100 flex p-2 relative border-b border-slate-300">
                  <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
                    <Image
                      src={picPNG}
                      className="w-full h-full rounded-full flex justify-center items-center"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex flex-col justify-center mr-4 space-y-1.5">
                    <p className="text-slate-600 text-sm font-semibold">
                      فروشگاه مبل لند
                    </p>
                    <span className="text-slate-500 text-xs">
                      تولیدی - لوازم خانگی - مبلمان
                    </span>
                  </div>
                  <div className="absolute left-3">
                    <div class="btn-group dropend">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                        <li class="flex items-center pb-2 ">
                          <i class="bi bi-pencil-fill text-xs ml-2"></i>
                          <span className="text-xs">ویرایش </span>
                        </li>
                        <li class="flex items-center pt-2">
                          <i class="bi bi-trash3-fill text-xs ml-2"></i>
                          <span className="text-xs">حذف</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="w-full pictures flex items-end space-x-2 rtl:space-x-reverse border-b-2 border-dotted border-slate-300 pb-3">
                    <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 md:space-y-0 space-y-2 mt-2">
                    <div className="md:col-span-2 col-span-5">
                      <p className="text-slate-600 text-xs">
                        صندلی مدل تمام چوب دسته دار
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-5 flex flex-col">
                      <del className="text-slate-400 text-[12px]">
                        ۳.۵۶۸.۱ تومان
                      </del>
                      <p className="text-slate-600 text-sm">۲.۵۴۸.۱۴۵ تومان</p>
                    </div>
                    <Link href="/">
                      <a className="md:col-span-1 col-span-5 flex flex-col items-end">
                        <i class="bi bi-heart text-base text-rose-500"></i>
                        <i class="bi bi-trash text-base text-slate-500"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 col-span-3 border border-slate-300 rounded-md flex flex-col ">
                <div className="w-full bg-slate-100 flex p-2 relative border-b border-slate-300">
                  <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
                    <Image
                      src={picPNG}
                      className="w-full h-full rounded-full flex justify-center items-center"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex flex-col justify-center mr-4 space-y-1.5">
                    <p className="text-slate-600 text-sm font-semibold">
                      فروشگاه مبل لند
                    </p>
                    <span className="text-slate-500 text-xs">
                      تولیدی - لوازم خانگی - مبلمان
                    </span>
                  </div>
                  <div className="absolute left-3">
                    <div class="btn-group dropend">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                        <li class="flex items-center pb-2 ">
                          <i class="bi bi-pencil-fill text-xs ml-2"></i>
                          <span className="text-xs">ویرایش </span>
                        </li>
                        <li class="flex items-center pt-2">
                          <i class="bi bi-trash3-fill text-xs ml-2"></i>
                          <span className="text-xs">حذف</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="w-full pictures flex items-end space-x-2 rtl:space-x-reverse border-b-2 border-dotted border-slate-300 pb-3">
                    <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 md:space-y-0 space-y-2 mt-2">
                    <div className="md:col-span-2 col-span-5">
                      <p className="text-slate-600 text-xs">
                        صندلی مدل تمام چوب دسته دار
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-5 flex flex-col">
                      <del className="text-slate-400 text-[12px]">
                        ۳.۵۶۸.۱ تومان
                      </del>
                      <p className="text-slate-600 text-sm">۲.۵۴۸.۱۴۵ تومان</p>
                    </div>
                    <Link href="/">
                      <a className="md:col-span-1 col-span-5 flex flex-col items-end">
                        <i class="bi bi-heart text-base text-rose-500"></i>
                        <i class="bi bi-trash text-base text-slate-500"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-t border-dashed border-slate-300">
            <div className="accept-products-title flex flex-col my-4">
              <h5 className="text-sm text-slate-600 font-semibold">
                روزهای گذشته
              </h5>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="md:col-span-1 col-span-3 border border-slate-300 rounded-md flex flex-col ">
                <div className="w-full bg-slate-100 flex p-2 relative border-b border-slate-300">
                  <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
                    <Image
                      src={picPNG}
                      className="w-full h-full rounded-full flex justify-center items-center"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex flex-col justify-center mr-4 space-y-1.5">
                    <p className="text-slate-600 text-sm font-semibold">
                      فروشگاه مبل لند
                    </p>
                    <span className="text-slate-500 text-xs">
                      تولیدی - لوازم خانگی - مبلمان
                    </span>
                  </div>
                  <div className="absolute left-3">
                    <div class="btn-group dropend">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                        <li class="flex items-center pb-2 ">
                          <i class="bi bi-pencil-fill text-xs ml-2"></i>
                          <span className="text-xs">ویرایش </span>
                        </li>
                        <li class="flex items-center pt-2">
                          <i class="bi bi-trash3-fill text-xs ml-2"></i>
                          <span className="text-xs">حذف</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="w-full pictures flex items-end space-x-2 rtl:space-x-reverse border-b-2 border-dotted border-slate-300 pb-3">
                    <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 md:space-y-0 space-y-2 mt-2">
                    <div className="md:col-span-2 col-span-5">
                      <p className="text-slate-600 text-xs">
                        صندلی مدل تمام چوب دسته دار
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-5 flex flex-col">
                      <del className="text-slate-400 text-[12px]">
                        ۳.۵۶۸.۱ تومان
                      </del>
                      <p className="text-slate-600 text-sm">۲.۵۴۸.۱۴۵ تومان</p>
                    </div>
                    <Link href="/">
                      <a className="md:col-span-1 col-span-5 flex flex-col items-end">
                        <i class="bi bi-heart text-base text-rose-500"></i>
                        <i class="bi bi-trash text-base text-slate-500"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 col-span-3 border border-slate-300 rounded-md flex flex-col ">
                <div className="w-full bg-slate-100 flex p-2 relative border-b border-slate-300">
                  <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
                    <Image
                      src={picPNG}
                      className="w-full h-full rounded-full flex justify-center items-center"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex flex-col justify-center mr-4 space-y-1.5">
                    <p className="text-slate-600 text-sm font-semibold">
                      فروشگاه مبل لند
                    </p>
                    <span className="text-slate-500 text-xs">
                      تولیدی - لوازم خانگی - مبلمان
                    </span>
                  </div>
                  <div className="absolute left-3">
                    <div class="btn-group dropend">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                        <li class="flex items-center pb-2 ">
                          <i class="bi bi-pencil-fill text-xs ml-2"></i>
                          <span className="text-xs">ویرایش </span>
                        </li>
                        <li class="flex items-center pt-2">
                          <i class="bi bi-trash3-fill text-xs ml-2"></i>
                          <span className="text-xs">حذف</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="w-full pictures flex items-end space-x-2 rtl:space-x-reverse border-b-2 border-dotted border-slate-300 pb-3">
                    <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 md:space-y-0 space-y-2 mt-2">
                    <div className="md:col-span-2 col-span-5">
                      <p className="text-slate-600 text-xs">
                        صندلی مدل تمام چوب دسته دار
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-5 flex flex-col">
                      <del className="text-slate-400 text-[12px]">
                        ۳.۵۶۸.۱ تومان
                      </del>
                      <p className="text-slate-600 text-sm">۲.۵۴۸.۱۴۵ تومان</p>
                    </div>
                    <Link href="/">
                      <a className="md:col-span-1 col-span-5 flex flex-col items-end">
                        <i class="bi bi-heart text-base text-rose-500"></i>
                        <i class="bi bi-trash text-base text-slate-500"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 col-span-3 border border-slate-300 rounded-md flex flex-col ">
                <div className="w-full bg-slate-100 flex p-2 relative border-b border-slate-300">
                  <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
                    <Image
                      src={picPNG}
                      className="w-full h-full rounded-full flex justify-center items-center"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="flex flex-col justify-center mr-4 space-y-1.5">
                    <p className="text-slate-600 text-sm font-semibold">
                      فروشگاه مبل لند
                    </p>
                    <span className="text-slate-500 text-xs">
                      تولیدی - لوازم خانگی - مبلمان
                    </span>
                  </div>
                  <div className="absolute left-3">
                    <div class="btn-group dropend">
                      <a
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                        <li class="flex items-center pb-2 ">
                          <i class="bi bi-pencil-fill text-xs ml-2"></i>
                          <span className="text-xs">ویرایش </span>
                        </li>
                        <li class="flex items-center pt-2">
                          <i class="bi bi-trash3-fill text-xs ml-2"></i>
                          <span className="text-xs">حذف</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-3">
                  <div className="w-full pictures flex items-end space-x-2 rtl:space-x-reverse border-b-2 border-dotted border-slate-300 pb-3">
                    <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                    <div className="w-14 h-14 bg-slate-100 rounded-md border border-slate-100">
                      {/* <Image src="/public/assets/img/logos/2.png"></Image> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3 md:space-y-0 space-y-2 mt-2">
                    <div className="md:col-span-2 col-span-5">
                      <p className="text-slate-600 text-xs">
                        صندلی مدل تمام چوب دسته دار
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-5 flex flex-col">
                      <del className="text-slate-400 text-[12px]">
                        ۳.۵۶۸.۱ تومان
                      </del>
                      <p className="text-slate-600 text-sm">۲.۵۴۸.۱۴۵ تومان</p>
                    </div>
                    <Link href="/">
                      <a className="md:col-span-1 col-span-5 flex flex-col items-end">
                        <i class="bi bi-heart text-base text-rose-500"></i>
                        <i class="bi bi-trash text-base text-slate-500"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default accept;
