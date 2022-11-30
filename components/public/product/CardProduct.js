import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItem, removeItem, increase, decrease } from '../../../redux/cart/cartAction'
import { fixNumbers } from '../../tools/ChangeLanguage'

import { shorten, isInCart, quantityCount } from '../../tools/functionsHelpers'

import styles from './CardProduct.module.css'

const CardProduct = ({productData}) => {
  console.log({productData})
  const state = useSelector(state => state.cartState)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="m-y-product ">
        <div className="m-y-product-image"></div>
        <div className="m-y-product-info">
          <h2 title="آون توستر پارس پیدن مدل Oster-Digital-60L ">
            آون توستر پارس پیدن مدل Oster-Digital-60L
          </h2>
        </div>
        <div className="m-y-product-prices">
          <div className="m-y-product-discount">30%</div>
          <div className="m-y-product-price">
            <div className="m-y-product-price-detail"><span>189.000</span> <span className="m-y-toman">توما</span></div>
            <strike>269.000</strike>
          </div>
        </div>
      <div className={styles.linkContainer}>
        <div className={styles.buttonContainer}>
            {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><i class="bi bi-trash3-fill text-white"></i></button>}
            {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
            {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{fixNumbers(quantityCount(state, productData.id)+'')}</span>}
            {
              isInCart(state, productData.id) ?
              <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
              <button onClick={() => dispatch(addItem(productData))}>افزودن به سبد خرید</button>
            }
        </div>
        <p >جزپیات</p>
      </div>
      </div>
    </div>
  )
}

export default CardProduct
