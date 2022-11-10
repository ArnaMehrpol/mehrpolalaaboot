import React from 'react'
import CardMarketing from './feedback/cardMarketing/CardMarketing'
import PanelProduct from './feedback/cardProduct/PanelProduct'
// import DetailScore from './detailScore/DetailScore'
import Handicap from './handicap/Handicap'
import styleScore from './Scores.module.css'
// import Feedback from './feedback/Feedback'
import ShowpathProfile from '../../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../../components/profile/layouts/ProfileLayout'

const Scores = () => {
  return (
    <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
    dir="rtl">
      {/* <Feedback/>
      <DetailScore/> */}
      <div>
        <ShowpathProfile/>
      </div>
      <div className='flex flex-row'>
        <div className=''>
          <ProfileLayout/>
        </div>
        <div>
          <Handicap/>
        </div>
      </div>
    </div>

  )
}

export default Scores;
