import React from 'react'
import CardMarketing from './feedback/cardMarketing/CardMarketing'
import PanelProduct from './feedback/cardProduct/PanelProduct'
import DetailScore from './detailScore/DetailScore'
import Handicap from './handicap/Handicap'


import styleScore from './Scores.module.css'
import Feedback from './feedback/Feedback'

const Scores = () => {
  return (
    <div>
      <Feedback/>
      <DetailScore/>
      <Handicap/>
    </div>

  )
}

export default Scores
