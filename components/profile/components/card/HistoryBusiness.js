import react from "react";
import Image from "next/image";
import Link from "next/link";
import Png1 from "/public/assets/img/logos/1.png";
import { fixNumbers } from "../../../tools/ChangeLanguage";
import Cookies from "universal-cookie";
import {axiosSetup} from '../../../utils/axiosSetup'

const Business = ({data}) => {
  
  const cookies = new Cookies();
  const tokenId = cookies.get('token')
  const method = 'post'
  const header = {
    'Accept': "application/json",
    'Authorization':"Bearer " + tokenId,
  }

  const favoriteClickHandler = () =>{
    // const address = '/user/favorites/favorite'
    // const data = {'to_business_id' : 1}
    // axiosSetup(address, method, header, '', getResult)
    // function getResult (data){
    //   console.log({data})
    //   setLoadCategories(data)
    // }
  }

  return (
    <>
      <div className="h-full bg-white p-3 space-y-3 border border-slate-300 rounded-md">
        <div className="flex">
          <div className="w-14 h-14 rounded-full bg-white outline-slate-300 outline-dashed outline-2 outline-offset-2 relative">
            <Image
              src={Png1}
              className="w-full h-full rounded-full flex justify-center items-center"
              width="80"
              height="80"
            />
          </div>
          <div className="flex flex-col justify-center mr-4 space-y-1.5">
            <p className="text-slate-600 text-md font-semibold">
              {/* فروشگاه بتن آماده */}
              {data.name}
            </p>
            <span className="text-slate-500 text-xs">
              {/* تامین کننده - ساختمان */}
                  <span className="text-slate-500 text-xs">
                    {data.categories[0].parent_row.parent_row.name} - {data.categories[0].parent_row.name}
                  </span>
                 
            </span>
            <span className="text-slate-500 text-xs">
              {`مدیریت : ${"آقای / خانم " + data.owner.name} `}
            </span>
          </div>
        </div>
        <p className="md:text-xs text-[11px] text-slate-600 !leading-5">
          {data.about}
        </p>
        <div className="flex flex-col space-y-1.5 ">
          <div className="md:text-xs text-[11px] text-slate-600 space-x-2 rtl:space-x-reverse">
          <i class="bi bi-geo-alt"></i>
           <span>{data.address.place.parent.name} - {data.address.place.name}</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3 md:text-xs text-[11px] text-slate-600">
          
           <div className="w-full h-full flex items-center justify-between ">
           <div>
           <i class="bi bi-star"></i>
           <span className="">امتیاز :</span>
            <span className="">۹۰۰</span>
           </div>
           <div>
           <span className="">رتبه :</span>
            <span className="font-semibold">عالی </span>
           </div>
           </div>
          </div>
          <div className="border-dotted border-[1px] border-slate-300 -mx-3"></div>
          <div className="w-full flex justify-around items-center mt-3 text-lg">
            <i onClick={favoriteClickHandler} class="bi bi-bookmark text-slate-500"></i>
            <i className="bi bi-share text-slate-500"></i>
            <label className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <span className="text-slate-500 text-xs">{fixNumbers(data.count_score.toString())}</span>
              <i className="bi bi-eye text-slate-500"></i>
            </label>
            <button className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <span className="text-slate-500 text-xs">{fixNumbers(data.count_likes.toString())}</span>
              <i className="bi bi-suit-heart-fill text-red-500"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business
