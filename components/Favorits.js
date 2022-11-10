import React from "react";
import Image from "next/image";

const Favorits = () => {
  return (
    <div className="blueSheet">
      <div className="favoritsBody mt-16">
        <div className="sidebarFavorit mt-5">
          <h6 className="text-white text-center">
            ما پر امتیازترین کالاها را برای
          </h6>
          <h3 className="text-white text-center">بهترین انتخاب</h3>
          <h3 className="text-white text-center">به شما</h3>
          <h3 className="text-white text-center">معرفی می کنیم!</h3>
          <Image
            src="/../public/assets/img/aIcons/smile.png"
            width={70}
            height={100}
            className="FavoritImageSidebar sidebarFavoritImage"
          />
          <h2 className="text-white text-center">دوست داشتنی های</h2>
          <h1 className="text-white text-center mb-5">پر طرفدار</h1>
        </div>
        <div className="mainFavorit d-flex align-baseline">
          <table
            className=" table  
           "
          >
            <tbody>
              {/* First Tr */}
              <tr className="d-flex">
                {/* First TD */}
                <td className="td">
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/2.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/3.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/4.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/5.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/6.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/7.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                {/* End First TD */}
                {/* First Tr */}

                {/* Second TD */}
                <td className="td">
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/8.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/9.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/10.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/11.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/12.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/13.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                {/* End Second TD */}
              </tr>
              {/* End Tr */}
              {/* First Tr */}
              <tr className="d-flex">
                {/* First TD */}
                <td className="td">
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/14.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/15.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/16.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/17.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/18.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/19.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                {/* End First TD */}
                {/* First Tr */}

                {/* Second TD */}
                <td className="td">
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/20.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/21.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/22.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/23.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/24.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="picFrame m-3">
                    <Image
                      src="/../public/assets/img/products/25.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </td>
                {/* End Second TD */}
              </tr>
              {/* End Tr */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favorits;
