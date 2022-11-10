import React, { useEffect, useState } from 'react'
import ProfileLayout from '../components/profile/layouts/ProfileLayout';
// import Master from './profile/layouts/Master'

const Profile = ({ Component, props }) => {

  const [showing ,setshowing ] = useState(false);
  
  useEffect(()=>{
    setshowing(true);
  },[]);

  return (
    <ProfileLayout>
    </ProfileLayout>
    // <Master>
    //   {/* <Component {...pageProps}/> */}
    //   {children}
    // </Master>
  )
}

export default Profile
