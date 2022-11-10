import React from 'react'
import CardProduct from './card/CardProduct'

import style from './PanelProduct.module.css'

const PanelProduct = () => {
  return (
    <div className={style.panelProductContainer}>
      <CardProduct/>
      <div className='border-l-2'></div>
      <CardProduct/>
      <div className='border-l-2'></div>
      <CardProduct/>
    </div>
  )
}

export default PanelProduct
