import React from 'react'
import Image from 'next/image'

import product15PNG from '/public/assets/img/products/15.png'
import style from './Question.module.css'


const Question = () => {
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
          <p>خریدار</p>
        </div>
        <hr/>
        <div className={style.gh_QAADownDown}>
          <p className='break-words w-[70%]'>آیا طرح های دیگری نیز از این محصول موجود دارید؟</p>
          <button>ثبت پاسخ</button>
        </div>
      </div>
    </div>
  )
}

export default Question
