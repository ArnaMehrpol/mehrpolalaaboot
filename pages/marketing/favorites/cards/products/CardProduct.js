import Image from 'next/image'
import React from 'react'

import product15PNG from '/public/assets/img/products/8.png'

import styleProduct from './CardProduct.module.css'

const CardProduct = (props) => {

  const {name, price, productVeiw, productLike, productOff, imgUrt} = props.product

  return (
    <div className={styleProduct.gh_productContainer}>
      <div>
        <div>
          <div className={styleProduct.gh_productImageDIV}>
            <Image className={styleProduct.gh_productImage} src={product15PNG} alt='nameProduct' width='120' height='120'/>
          </div>
        </div>
        <div className={styleProduct.gh_productText}>
          <p>{name}</p>
          <p>{productOff}</p>
          <p>{price}</p>
        </div>
      </div>
      <hr />
      <div className={styleProduct.gh_productIcons}>
        <div className={styleProduct.gh_productIconsTrash}>
          <i className="bi bi-trash3"></i>
        </div>
        <div className={styleProduct.gh_productIconsShare}>
          <i className="bi bi-share"></i>
        </div>
        <div className={styleProduct.gh_productIconsEye}>
          <h6>{productVeiw}</h6><i className="bi bi-eye-fill"></i>
        </div>
        <div className={styleProduct.gh_productIconsHeart}>
          <h6>{productLike}</h6><i className="bi bi-heart-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
