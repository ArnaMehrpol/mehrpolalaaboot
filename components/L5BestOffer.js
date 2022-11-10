import React from "react";
import Card from "./Card";
import Image from "next/image";

const L5BestOffer = () => {
  return (
    <section>
      <div className="container containerBestProposal first: mt-5">
        <div className="row">
          <div className="Landing3-header">
            <div className="porforoshtarinha">
              <h4>بهترین پیشنهاد برای شما</h4>
              <p>محصولات پیشنهادی بر اساس علایق شما</p>
            </div>
            {/* SVG.dot */}
            <div className="dotblack bg-[url('../public/assets/img/utilis/dots-black.png')]"></div>
            {/* End SVG.dot */}
            <div>
              <button type="button" className="btn theBlue mt-4">
                مشاهده همه<i className="bi bi-chevron-left"></i>
              </button>
            </div>
          </div>
          {/* End header */}
          {/* Carousel */}
          <div
            id="carouselController"
            className="carousel slide carouselContainer2"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
          {/* Carousel */}
        </div>
        <div className="myButonAnfIndicator">
          <div id="myCarouselButton">
            <button
              // className="carousel-control-prev bg-danger"
              type="button"
              data-bs-target="#carouselController"
              data-bs-slide="prev"
            >
              <Image
                src="/../public/assets/img/aIcons/4.png"
                width={35}
                height={35}
              />
            </button>
            <button
              // className="carousel-control-next bg-danger"
              type="button"
              data-bs-target="#carouselController"
              data-bs-slide="next"
            >
              <Image
                src="/../public/assets/img/aIcons/3.png"
                width={35}
                height={35}
              />
            </button>
          </div>
          <div className="myIndicators">
            <button
              className="myIndicatorButton3 focus:bg-theBlue "
              type="button"
              data-bs-target="#carouselController"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              className="myIndicatorButton3 focus:bg-theBlue"
              type="button"
              data-bs-target="#carouselController"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              className="myIndicatorButton3 focus:bg-theBlue"
              type="button"
              data-bs-target="#carouselController"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default L5BestOffer;
