import Image from 'next/image'
import React from 'react'

import styleLoading from './loadingComponent.module.css'

import loadingSvg from '../../../../../../public/assets/img/loading/loading.svg'

const loadingComponent = () => {
  return (
      <div className={styleLoading.gh_loadingDiv}>
        <Image src={loadingSvg} width='100px' height='100px'/>
        <h5>در حال بارگذاری ...</h5>
      </div>
  )
}

export default loadingComponent
