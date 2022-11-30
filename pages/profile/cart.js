import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../../components/profile/components/card/Card";
import { useSelector, useDispatch } from 'react-redux';
import Price from "../../components/profile/components/cart/Price";
import Favoritcard from "../../components/profile/components/card/Product";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

import { clear, checkout } from "../../redux/cart/cartAction";

const cart = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.cartState)

  return (
    <>
    <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
      dir="rtl">
      <div>
        <ShowpathProfile/>
      </div>
      <div className='flex flex-row'>
        <div className=''>
          <ProfileLayout/>
        </div>
        <div className="mainbar-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          <div className="mainTitle relative mb-4 md:mt-0 mt-2">
            <h6 className="text-muted fw-bold border-b-2 border-blue-500 w-16">
              سبد خرید
            </h6>
          </div>
          <div className="grid grid-cols-11">
            <div className="lg:col-span-6 md:col-span-6 border-slate-100 rounded-md bg-white p-3 lg:ml-3 md:ml-3 lg:mb-0 mb-4">
              
            {state.selectedItems.map(item => <Card key={item.id} data={item}/>)}
              
              <Card
                image="/../public/assets/img/products/1.png"
                title="دستگاه کراشر چوبی مدل mvc"
                subTitle="با گارانتی طلایی"
              />
              <Card
                image="/../public/assets/img/products/1.png"
                title="دستگاه کراشر چوبی مدل mvc"
                subTitle="با گارانتی طلایی"
              />
              <Card
                image="/../public/assets/img/products/1.png"
                title="دستگاه کراشر چوبی مدل mvc"
                subTitle="با گارانتی طلایی"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-4 col-span-12 space-y-3">
              <div className="price-box w-full flex flex-col border border-slate-100 rounded-sm bg-white space-y-5 py-2.5 px-2">
                <div className="w-full flex justify-between items-center">
                  <p className="text-slate-400 text-xs">قیمت کالاها (۴)</p>
                  <Price className="font-semibold" />
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-slate-400 text-xs">جمع سبد خرید</p>
                  <Price className="font-semibold" />
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-xs text-rose-500">
                    سود شما از خرید
                    <span className="text-rose-500 text-xs font-semibold mr-0.5">
                      (۱۲%)
                    </span>
                  </p>
                  <Price className="font-semibold" />
                </div>
                <p className="text-slate-400 text-[10px]">
                  هزینه ارسال بر اساس آدرس ،زمان تحویل ، وزن و حجم مرسوله شما محاسبه
                  می شود .
                </p>
                <Link href="cart-success">
                  <a className="lg:w-full md:w-full w-1/3 mr-auto text-white bg-blue-500 hover:bg-blue-400 rounded-lg lg:text-xs text-[10px] px-2 py-2 text-center inline-flex items-center justify-center mb-2">
                    ثبت و مرحله بعد
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-xs mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="warning-box bg-orange-100 rounded-md p-2 overflow-hidden">
                <p className="text-[10px] text-orange-500">
                  هزینه این سفارش هنوز پرداخت نشده و در صورت اتمام موجودی ، کالاها
                  از سبد خرید شما حذف می شوند .
                </p>
              </div>
              <div className="suggested-products">
                <div className="suggested-products-title">
                  <h6 className="text-xs font-semibold border-b-2 border-blue-500 w-24 py-2">
                    محصولات پیشنهادی
                  </h6>
                </div>
                <div className="flex flex-col">
                  <Favoritcard className="font-normal" />
                  <Favoritcard className="font-normal" />
                  <Favoritcard className="font-normal" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  );
};
export default cart;
