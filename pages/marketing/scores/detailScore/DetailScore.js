import React from 'react'
import TableDetailScore from './table/TableDetailScore'

import style from './DetailScore.module.css'

const DetailScore = () => {
  return (
    <div className={style.gh_detailScoreContainer}>
      <div className={style.gh_detailScoreTitr}>
        <h2>جزئیات امتیاز محصول</h2>
        <p>در این صفحه آنالیز امتیاز رای دهندگان برای محصول مورد نظر مشاهده می شود</p>
      </div>
      <div className={style.gh_detailScoreProduct}>
        <div className={style.gh_detailScoreProductRight}>
          <p>اره برقی بازل</p>
          <p>{`کد کالا ${'۱۲۴۵۳۷'}`}</p>
        </div>
        <div className={style.gh_detailScoreProductLeft}>
          <div className={style.gh_detailScoreProductStars}>
            <i className="bi bi-star-fill" style={{color: '#f7db15'}}></i>
            <i className="bi bi-star-fill" style={{color: '#f7db15'}}></i>
            <i className="bi bi-star-fill" style={{color: '#f7db15'}}></i>
            <i className="bi bi-star-fill" style={{color: '#f7db15'}}></i>
            <i className="bi bi-star-fill" style={{color: '#f7db15'}}></i>
          </div>
          <div className={style.gh_ScoreRank}>
            <p>{`رتبه ${'عالی'}`}</p>
          </div>
        </div>
      </div>
      <TableDetailScore/>
    </div>
  )
}

export default DetailScore
