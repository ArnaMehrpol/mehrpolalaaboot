import React from 'react'
import Image from 'next/image'

import product15PNG from '/public/assets/img/products/15.png'
import style from './ProductComments.module.css'


const ProductComments = () => {
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
          <div className={style.gh_QAADownDownComments}>
            <p>این محصول بسیار سبک و با کیفیت می باشد همچنین با توجه به مواد بکار رفته در این محصول از قیمت مناسبی نیز برخوردار است</p>
          </div>
          <div>
            <div className={style.gh_QAADownDownP}>
            <p>خرید این محصول را پیشنهاد می کنم</p>
            </div>
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

export default ProductComments
