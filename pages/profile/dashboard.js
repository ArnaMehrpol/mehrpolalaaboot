import React from 'react'
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

const dashboard = () => {
  return (
    <div className=' max-w-screen-2xl bg-light md:px-12 pt-3'
      dir="rtl">
      <div>
        <ShowpathProfile/>
      </div>
      <div className='flex flex-row'>
        <div className=''>
          <ProfileLayout/>
        </div>
        <div className="mainbar-content md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          داشبورد
        </div>
      </div>
    </div>
  )
}

export default dashboard
