import Image from 'next/image'
import React from 'react'

import styleScoreMarketing from './CardMarketing.module.css'
import MarketingPNG from '/public/assets/img/logos/b-1.jpg'


const CardMarketing = () => {
  return (
    <div className={styleScoreMarketing.gh_marketingContainer}>
      <div className={styleScoreMarketing.gh_marketingRight}>
        <div className={styleScoreMarketing.gh_marketingAvatar}>
          <div className={styleScoreMarketing.gh_marketingImageDIV}>
            <Image className={styleScoreMarketing.gh_marketingImage} src={MarketingPNG} alt='nameProduct' width='100' height='100'/>
          </div>
          <div className={styleScoreMarketing.gh_marketingAvatarText}>
            <h4>فروشگاه شیک نو</h4>
            <h6>خدمات - فروشگاهی</h6>
            <p>گیلان - رشت</p>
          </div>
        </div>      
        <div className={styleScoreMarketing.gh_marketingRightText}>
          <p>{`تعداد سفارش: ${'۱۱۲'}`}</p>
          <p>{`تعداد رای دهندگان: ${'۱۰۵'}`}</p>
        </div>        
      </div>
      <div className={styleScoreMarketing.gh_marketingMiddel}>
        <div>
          <p>نحوه پاسخگویی</p>
          <p>۷۴٪</p>
        </div>
        <div>
          <p>مرجوعی</p>
          <p>۳۳٪</p>
        </div>
        <div>
          <p>رسیدگی به شکایات</p>
          <p>۸۳٪</p>
        </div>
        <hr/>
        <div>
          <p>معدل امتیاز کل</p>
          <p>۹۳٪</p>
        </div>
      </div>
      <div className={styleScoreMarketing.gh_marketingLeft}>
        <div className={styleScoreMarketing.gh_marketingLeftStars}>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <div className={styleScoreMarketing.gh_marketingRank}>
          <p>{`رتبه: ${'عالی'}`}</p>
        </div>
      </div>
    </div>
  )
}

export default CardMarketing
