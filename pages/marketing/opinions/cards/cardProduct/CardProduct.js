import React from 'react'
import Image from 'next/image'


import product15PNG from '/public/assets/img/products/8.png'
import style from './CardProduct.module.css'

const CardProduct = () => {
  return (
    <div className={style.gh_ContainerP}>
      <div className={style.gh_QAAUpP}>
        <div className={style.gh_QAAUpImageP}>
          <div className={style.gh_QAAUpImageDIVP}>
            <Image className={style.gh_QAAImageP} src={product15PNG} alt='product' width='80' height='80'/>
          </div>
          <h6>دستگاه چوب خرد کن و برگ خرد کن سه تیغه</h6>
        </div>
        <div className={style.gh_QAAUpPriceP}>
          <p>قیمت اولیه</p>
          <p>۳۵۶۴۱۴۵ تومان</p>
        </div>
        <div className={style.gh_QAAUpPrice2P}>
          <p>قیمت نهایی</p>
          <p>۲۵۴۴۳۲۴۰۱۲ تومان</p>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
