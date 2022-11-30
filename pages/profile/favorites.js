import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HistoryProducts from "../../components/profile/components/card/HistoryProducts";
import HistoryBusiness from "../../components/profile/components/card/HistoryBusiness";
import Pagination from "../../components/profile/components/pagination/Pagination";
import { axiosSetup } from "../../components/utils/axiosSetup";
import Cookies from "universal-cookie";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

const products = () => {
  const cookies = new Cookies();
  const tokenId = cookies.get('token')
  const [getAllFavorites, setGetAllFavorites] = useState()
  const [getAllMarketing, setGetAllMarketing] = useState()
  const address ='/user/favorites/product-favorites'
  const method= 'get'
  const header= {
    'Accept': "application/json",
    'Authorization':"Bearer " + tokenId
  }

  useEffect(()=>{
    axiosSetup(address, method, header, '', getResult)
   function getResult (data){
    setGetAllFavorites(data)
   }
  }, [])

  useEffect(()=>{
    const address = '/user/favorites/business-favorites'
    axiosSetup(address, method, header, '', getResult)
   function getResult (data){
    setGetAllMarketing(data)
   }
  }, [])
  
  const addressPageFunc = () =>{
    
  }

  console.log({getAllFavorites})
  console.log({getAllMarketing})

  return (
    <>
      <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
        dir="rtl">
        <div>
        <ShowpathProfile/>
        </div>
        <div className='flex flex-row'>
          <div className=''>
            <ProfileLayout/>
          </div>
          <div className="profile-content z-50 w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
            <div className="mainTitle relative lg:my-0 my-4">
              <h6 className="text-muted fw-bold border-b-2 border-blue-500 w-24 py-1.5">
                علاقه مندی ها{" "}
              </h6>
            </div>
            <nav className="mb-3">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  محصولات
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  کسب وکار{" "}
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                {/* product tab content start */}
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="product-content">
                      <div className="product-grid grid grid-cols-12 gap-3 border border-slate-100 rounded-md p-4">
                      <div className="product-col md:col-span-4 col-span-12">
                        {
                          !getAllFavorites ? <p>loading ...</p> :
                          getAllFavorites.status !== 200 ?
                          <p>خطا در بارگذاری داده (دوباره تلاش کنید) </p> :
                          getAllFavorites.data &&
                          getAllFavorites.data.data.map(favorites => 
                            <HistoryProducts key={favorites.operatorable_id} data={favorites.operatorable}/>)
                        }
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  ></div>
                </div>
                {/* product tab content end */}
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                <div className="business-content ">
                  <div className="business-grid grid grid-cols-12 gap-3 border border-slate-100 rounded-md p-4">
                    <div className="business-col md:col-span-4 col-span-12">
                      {
                        !getAllMarketing ? <p>loading ...</p> :
                        getAllMarketing.status !== 200 ?
                        <p>خطا در بارگذاری داده (دوباره تلاش کنید) </p> :
                        getAllMarketing.data &&
                        getAllMarketing.data.data.map(marketing => 
                          <HistoryBusiness key={marketing.operatorable_id} data={marketing.operatorable}/>)
                      }
                      
                    </div>
                    {/* 
                    <div className="business-col md:col-span-4 col-span-12">
                      <HistoryBusiness />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <Pagination addressPage={addressPageFunc} linksData={getAllMarketing && getAllMarketing.data}/> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default products;
