import React from 'react'

import product15PNG from '/public/assets/img/products/8.png'

import style from './CardHandicap.module.css'
import Image from 'next/image'

const CardHandicap = () => {
  return (
    <div className={style.gh_ScoreContainer}>
      <div className={style.gh_ScoreAvatar}>
        <div className={style.gh_ScoreAvatarImageDIV}>
          <Image className={style.gh_ScoreAvatarImage} src={product15PNG} alt='product' width='110' height='110'/>
        </div>
        <div className={style.gh_ScoreAvatarText}>
          <h6>دستگاه چوب خرد کن و برگ خرد کن سه تیغه</h6>
          <h6>مدل راک عسلی</h6>
          <p>{`کد کالا: ${`۱۲۵۸۷۶۵۷۶`}`}</p>
        </div>
      </div>
      <div>
        <div className='w-full flex justify-between'>
          <div>
            <p className='px-2'>کیفیت</p>
          </div>
          <div class="w-full lg:w-8/12 px-2">
            <div class="mb-5">
              <div class="w-full h-[10px] relative bg-light rounded-2xl">
                <div class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[65%]
                    ">
                    <span className="shadow-md rounded text-[12px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                      <span class="w-2 h-2 rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                      "></span>
                    ۶۵%
                    </span>
                </div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='rounded text-xs px-2 '>۱۰۰</p>
                <p className='rounded text-xs px-2 '>۰</p>
              </div>
            </div>              
          </div>
        </div>
        <div className='w-full  flex justify-between'>
          <div>
            <p className='px-2'>تحویل به موقع</p>
          </div>
          <div class="w-full lg:w-8/12 px-2">
            <div class="mb-5">
              <div class="w-full h-[10px] relative bg-light rounded-2xl">
                <div class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[82%]
                    ">
                    <span className="shadow-md rounded text-[12px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                      <span class="w-2 h-2 rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                      "></span>
                    ۸۲%
                    </span>
                </div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='rounded text-xs px-2 '>۱۰۰</p>
                <p className='rounded text-xs px-2 '>۰</p>
              </div>
            </div>              
          </div>
        </div>
        <div className='w-full  flex justify-between'>
          <div>
            <p className='px-2'>ارزش خرید</p>
          </div>
          <div class="w-full lg:w-8/12 px-2">
            <div class="mb-3">
              <div class="w-full h-[10px] relative bg-light rounded-2xl">
                <div class="absolute top-0 left-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl h-full w-[47%]
                    ">
                    <span className="shadow-md rounded text-[12px] py-1 px-2 absolute -right-4 bottom-full mb-2 ">
                      <span class="w-2 h-2 text-[14px] rotate-45 bg-primary absolute -z-10 bottom-[-8px] left-1/2 -translate-x-1/2 rounded
                      "></span>
                    ۴۷%
                    </span>
                </div>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='rounded text-xs px-2 '>۱۰۰</p>
                <p className='rounded text-xs px-2 '>۰</p>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHandicap
