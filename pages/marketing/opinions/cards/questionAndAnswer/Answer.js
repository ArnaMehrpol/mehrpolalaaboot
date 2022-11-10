import React from 'react'
import Image from 'next/image'

import product15PNG from '/public/assets/img/products/15.png'
import style from './Answer.module.css'


const Answer = () => {
  return (
    <div className={style.gh_Container}>
      <div className={style.gh_QAADown}>
        <div className={style.gh_QAADownUp}>
          <p>مهرداد باقری</p>
          <p>۱۴۰۱/۰۶/۰۶</p>
          <p>خریدار</p>
        </div>
        <hr/>
        <div className={style.gh_QAADownDown}>
            <p className='break-words w-[70%]'>بله طرح حای دیگری هم موجود است</p>
            <button>ثبت پاسخ</button>
        </div>
      </div>
    </div>
  )
}

export default Answer
