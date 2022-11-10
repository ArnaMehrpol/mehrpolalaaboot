import Image from "next/image";
import React from "react";
import Link from "next/link";

const Price = () => {
  return (
    <>
      <div className="flex relative pl-1">
        <strong className="text-xs text-black px-2">۵۶۷.۰۰۰</strong>
        <strong className="text-xs text-black">تومان</strong>
        <strong className="text-xs text-black absolute -top-[10px] right-[65px]">
          ن
        </strong>
      </div>
    </>
  );
};
export default Price;
