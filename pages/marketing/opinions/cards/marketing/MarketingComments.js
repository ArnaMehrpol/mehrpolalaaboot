import React from 'react'
import Image from 'next/image'

import product15PNG from '/public/assets/img/products/15.png'
import style from './MarketingComments.module.css'


const MarketingComments = () => {
  return (
    <div className={style.gh_Container}>
      {/* <div className={style.gh_QAAUp}>
        <div className={style.gh_QAAUpImage}>
          <div className={style.gh_QAAUpImageDIV}>
            <Image className={style.gh_QAAImage} src={product15PNG} alt='product' width='80' height='80'/>
          </div>
          <h6>دستگاه چوب خرد کن و برگ خرد کن سه تیغه</h6>
        </div>
        <div className={style.gh_QAAUpPrice}>
          <p>قیمت اولیه</p>
          <p>۳۵۶۴۱۴۵ تومان</p>
        </div>
        <div className={style.gh_QAAUpPrice2}>
          <p>قیمت نهایی</p>
          <p>۲۵۴۴۰۱۲ تومان</p>
        </div>
      </div>
      <hr/> */}
      <div className={style.gh_QAADown}>
        <div className={style.gh_QAADownUp}>
          <p>مهرداد باقری</p>
          <p>۱۴۰۱/۰۶/۰۶</p>
          <div className='flex justify-between w-[170px]'>
            <p className='ml-4'>مبلغ خرید کل</p>
            <p>۲۴۵۶۷۳۷۶ تومان</p>
          </div>
        </div>
        <hr/>
        <div className={style.gh_QAADownDown}>
          <div className={style.gh_QAADownDownComments}>
            <p>کار کردن با این مجموعه تجربه خوب و مفیدی بود و با توجه به کیفیت محصولات قیمت های منصفانه ای داشت و برای خریدهای بعدی تخفیف در نظر گرفتند</p>
          </div>
          <div>
            <div className={style.gh_QAADownDownLikeDislike}>
              <div>
                <i className='bi bi-hand-thumbs-up'></i>
                <h6>۴۵۰</h6>
              </div>
              <div>
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

export default MarketingComments
