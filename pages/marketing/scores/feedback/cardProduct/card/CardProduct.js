import Image from 'next/image'
import React from 'react'

import product15PNG from '/public/assets/img/products/8.png'
import style from './CardProduct.module.css'

const CardProduct = () => {
  return (
    <div className={style.gh_ScoreContainer}>
      <div className={style.gh_ScoreTop}>
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
          <i class="bi bi-arrow-left"></i>
        </div>
      </div>
      <div className={style.gh_ScoreMiddel}>
        <div className={style.gh_ScoreMiddelPercent}>
          <div>
            <p>امتیاز کیفیت</p>
            <p>۷۴٪</p>
          </div>
          <div className='mt-1'>
            <p>امتیاز تحویل به موقع</p>
            <p>۳۳٪</p>
          </div>
          <div className='mt-1'>
            <p>امتیاز ارزش خرید</p>
            <p>۸۳٪</p>
          </div>
          <div>
            <p>معدل امتیاز کل</p>
            <p>۹۳٪</p>
          </div>
        </div>
        <div className={style.gh_ScoreMiddelLeft}>
          <div className={style.gh_ScoreLeftStars}>
            <i className="bi bi-star-fill text-yellow-400"></i>
            <i className="bi bi-star-fill text-yellow-400"></i>
            <i className="bi bi-star-fill text-yellow-400"></i>
            <i className="bi bi-star-fill  text-gray-300"></i>
            <i className="bi bi-star-fill  text-gray-300"></i>
          </div>
          <div className={style.gh_ScoreRank}>
            <p>{`رتبه: ${'متوسط'}`}</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className={style.gh_ScoreBottom }>
        <p>{`تعداد سفارش: ${'۱۱۲'}`}</p>
        <p>{`تعداد رای دهندگان: ${'۱۰۵'}`}</p>
      </div>     
    </div>
  )
}

export default CardProduct
