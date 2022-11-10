import React from 'react'
import product15PnsjG from '/public/assets/img/products/8.png'
import Image from 'next/image'

const CardHandicap = () => {
  return (
    <div>
      <div className="flex mx-2">
        <div className="">
          <Image className="border border-slate-300 p-1 rounded-md" src={product15PnsjG} alt='product' width='80' height='80'/>
        </div>
        <div className="space-y-2 px-3">
          <p className='text-[10px] font-semibold'>دستگاه چوب خرد کن و برگ خرد کن سه تیغه مدل راک عسلی</p>
          <p className='text-[10px] text-slate-500'>{`کد کالا: ${`۱۲۵۸۷۶۵۷۶`}`}</p>
        </div>
      </div>
      <div className='mt-12'>
        <div className='w-full flex justify-between'>
          <div>
            <p className='px-2 text-xs text-slate-500'>کیفیت</p>
          </div>
          <div class="w-9/12 md:w-full px-2">
            <div class="mb-5">
              <div class="w-full h-[10px] relative bg-light rounded-2xl">
                <div class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[65%]
                    ">
                    <span className="shadow-md rounded text-[11px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                      <span class="w-2 h-2 rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                      "></span>
                    ۶۵%
                    </span>
                </div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='rounded text-[11px] px-2 '>۱۰۰</p>
                <p className='rounded text-[11px] px-2 '>۰</p>
              </div>
            </div>              
          </div>
        </div>
        <div className='w-full  flex justify-between'>
          <div className='w-36'>
            <p className='px-2 text-xs text-slate-500'>تحویل به موقع</p>
          </div>
          <div class="w-9/12 md:w-full px-2">
            <div class="mb-5">
              <div class="w-full h-[10px] relative bg-light rounded-2xl">
                <div class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[82%]
                    ">
                    <span className="shadow-md rounded text-[11px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                      <span class="w-2 h-2 rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                      "></span>
                    ۸۲%
                    </span>
                </div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='rounded text-[11px] px-2 '>۱۰۰</p>
                <p className='rounded text-[11px] px-2 '>۰</p>
              </div>
            </div>              
          </div>
        </div>
        <div className='w-full  flex justify-between'>
          <div className='w-36'>
            <p className='px-2 text-xs text-slate-500'>ارزش خرید</p>
          </div>
          <div class="w-9/12 md:w-full px-2">
            <div class="mb-3">
              <div class="w-full h-[10px] relative bg-light rounded-2xl">
                <div class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[47%]
                    ">
                    <span className="shadow-md rounded text-[11px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                      <span class="w-2 h-2 text-[14px] rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                      "></span>
                    ۴۷%
                    </span>
                </div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='rounded text-[11px] px-2 '>۱۰۰</p>
                <p className='rounded text-[11px] px-2 '>۰</p>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHandicap;
