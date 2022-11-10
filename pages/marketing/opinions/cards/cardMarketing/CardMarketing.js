import React from 'react'
import Image from 'next/image'

import product15PNG from '/public/assets/img/logos/b-2.png'
import style from './CardMarketing.module.css'

const CardMarketing = () => {
  return (
    <div className={style.gh_Container}>
      <div className={style.gh_QAAUp}>
        <div className={style.gh_QAAUpImage}>
          <div className={style.gh_QAAUpImageDIV}>
            <Image className={style.gh_QAAImage} src={product15PNG} alt='product' width='50' height='50'/>
          </div>
          <div className={style.gh_QAAUpImageTitr}>
            <h6>فروشگاه الگانس</h6>
            <h6>تولیدی - لوازم خانگی</h6>
          </div>
        </div>
        {/* <div className={style.gh_QAAUpPrice}>
          <p>قیمت اولیه</p>
          <p>۳۵۶۴۱۴۵ تومان</p>
        </div> */}
        <div className={style.gh_QAAUpPrice2}>
          <p>مبل خرید کل</p>
          <p>۲۵۴۴۰۱۲ تومان</p>
        </div>
      </div>
      <hr className='border-2 border-dashed'/>
      <div className='pb-2'>
        <div className='text-center mt-3 mb-4'>
          <p>۱۴۰۱/۰۶/۰۱</p>
        </div>
        <div className='flex justify-between px-4 mb-4'>
          <div className=''>
              <p>کار کردن با این مجموعه تجربه خوبی بود و همه چیز مرتب و خوب بود.</p>
            </div>
            <div>
              <div className='flex' >
                <div className='text-[#3c82f4] flex'>
                  <i className='bi bi-hand-thumbs-up'></i>
                  <h6>۴۵۰</h6>
                </div>
                <div className='flex mr-4'>
                  <i className='bi bi-hand-thumbs-down text-[#c4253e]'></i>
                  <h6 className='text-[#c4253e]'>۱۷۰</h6>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardMarketing
