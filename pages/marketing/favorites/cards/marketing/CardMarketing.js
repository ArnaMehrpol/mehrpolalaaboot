import Image from 'next/image'
import React from 'react'

import MarketingPNG from '/public/assets/img/logos/3.png'

import styleMarketing from './CardMarketing.module.css'

const CardMarketing = (props) => {

  // const {name, price, productVeiw, productLike, productOff, imgUrt} = props.product

  return (
    <div className={styleMarketing.gh_marketingContainer}>
      <div>
        <div className={styleMarketing.gh_marketingTop}>
          <div className={styleMarketing.gh_marketingImageDIV}>
            <Image className={styleMarketing.gh_marketingImage} src={MarketingPNG} alt='nameProduct' width='100' height='100'/>
          </div>
          <div className={styleMarketing.gh_marketingTopTitr}>
            <h4>فروشگاه بتن آماده</h4>
            <h6>تامین کننده - ساختمان</h6>
          </div>
        </div>
        <div className={styleMarketing.gh_marketingText}>
          <p>فروشگاه بزرگ بتن آماده در سال ۱۳۹۲ با هدف تامین نیاز شرکت های ساختمانی و پیمانکاری ...</p>
          <p>تهران - تهران</p>
          <p>امتیاز: ۹۰۰</p>
        </div>
      </div>
      <hr />
      <div className={styleMarketing.gh_marketingIcons}>
        <div className={styleMarketing.gh_productIconsTrash}>
          <i className="bi bi-trash3"></i>
        </div>
        <div className={styleMarketing.gh_marketingIconsShare}>
          <i className="bi bi-share"></i>
        </div>
        <div className={styleMarketing.gh_marketingIconsEye}>
          <h6>{'۲۳'}</h6><i className="bi bi-eye-fill"></i>
        </div>
        <div className={styleMarketing.gh_marketingIconsHeart}>
          <h6>{'۲۳'}</h6><i className="bi bi-heart-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default CardMarketing
