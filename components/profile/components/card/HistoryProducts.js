import react from "react";
import Image from "next/image";
import Png9 from "/public/assets/img/products/1.png";
import { fixNumbers } from "../../../tools/ChangeLanguage";
import { numberWithCommas } from "../../../tools/thousandsSeparator";

const Products = ({data}) => {
  console.log({data})

  const price = numberWithCommas(data.price)

  return (
    <>
      <div className="bg-white space-y-3 border border-slate-300 rounded-md flex flex-col justify-center items-center pt-4 pb-2">
      <div className="relative">
       <svg width="100" height="100" viewBox="0 0 200 200" className="-rotate-45 absolute -bottom-[26px] -right-[187px]">
            <g transform="translate(100,100)">
            <path d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#f00"/>
            </g>
      </svg>
      <span className="text-xs font-semibold text-white absolute left-[104px] -top-[9px]">%۲۰</span>
       </div>
        <div className="w-36 h-36 bg-slate-100 flex justify-center items-center border border-slate-300 rounded-sm p-2">
          <Image src={Png9} width="120" height="120" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
          <p className="text-slate-600 text-sm font-semibold">
            {/* صندلی مدل تمام چوب دسته دار */}
            {data.name}
          </p>
          <del className="text-slate-500 text-[12px]">{`${fixNumbers(price)} تومان`}</del>
          <span className="md:text-base text-sm text-slate-600">
            {`${fixNumbers(price)} تومان`}
          </span>
          <div className="md:text-xs text-[11px] text-slate-600 space-x-2 rtl:space-x-reverse">
          <i class="bi bi-geo-alt"></i>
           <span> تهران - تهران</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3 md:text-xs text-[11px] text-slate-600">
          <i class="bi bi-star"></i>
            <span className="">امتیاز :</span>
            <span className="">۹۰۰</span>
            <span className="">رتبه :</span>
            <span className="font-semibold">عالی </span>
          </div>
        </div>
        <div className="w-full flex justify-around items-center pt-3 text-lg border-dotted border-t-[2px] border-slate-300">
        <a href="/"><i class="bi bi-bookmark text-slate-500"></i></a>
         <a href="/"><i className="bi bi-share text-slate-500"></i></a>
          <a className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span className="text-slate-500 text-xs">۶۳</span>
            <i className="bi bi-eye text-slate-500"></i>
          </a>
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span className="text-slate-500 text-xs">۸۴</span>
            <i className="bi bi-suit-heart-fill text-red-500"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
