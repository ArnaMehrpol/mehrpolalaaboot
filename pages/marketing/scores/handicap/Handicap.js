import React from 'react'
import CardHandicap from './card/CardHandicap'

import style from './Handicap.module.css'

const Handicap = () => {
  return (
    <div className='bg-white rounded-[20px] border max-w-[950px] my-10 mx-auto shadow shadow-slate-400'>
      <h4 className='mt-8 mr-16 text-[18px] font-bold'>امتیازها</h4>
        <p className='mt-2 mr-16 text-[12px] '>در این بخش به محصول و کسب و کار فروشنده محصول امتیاز داده می شود</p>
        <p className='mr-14 text-[13px] mt-8 font-medium mb-2'>{`شماره سفارش: ${'۲۱۳۵۴۷۷۸'}`}</p>
      <div className='flex flex-col border mx-4 mb-16 rounded-[20px]'>
        <div className='flex flex-wrap border-dashed'>
          <CardHandicap/>
          <div className='border'></div>
          <CardHandicap/>
          <div className='border'></div>
          <CardHandicap/>
        </div>
        <div className='flex justify-between px-4 py mt-10'>
          <div className='flex justify-between w-6/12'>
            <div>
              <p className='text-nowrap'>نحوه پاسخگویی الگانس</p>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="mb-4">
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
          <div >
            <button className='bg-primary text-white py-1 px-3 rounded'>ثبت</button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Handicap
