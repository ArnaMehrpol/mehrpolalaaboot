import Image from "next/image";
import React from "react";
import QuestionAnswer from "../../components/profile/components/card/questionAnswer";
import CommentProduct from "../../components/profile/components/card/commentProduct";
import CommentBusiness from "../../components/profile/components/card/commentBusiness";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

const comments = () => {
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
      <div className="mainbar-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
        <div className="mainTitle relative md:my-0 my-2">
          <h6 className="text-muted fw-bold border-b-2 border-blue-500 w-16 py-1.5">دیدگاه ها</h6>
        </div>
        <div className="lg:mt-0 mt-3">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active lg:text-sm text-xs"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                پرسش و پاسخ{" "}
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab lg:text-sm text-xs"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                محصولات
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab lg:text-sm text-xs"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                کسب و کار
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
              <div className="grid grid-cols-2 gap-2">
                <div className="lg:col-span-1 col-span-2">
                  <QuestionAnswer />
                </div>
                <div className="lg:col-span-1 col-span-2">
                  <QuestionAnswer />
                </div>
                <div className="lg:col-span-1 col-span-2">
                  <QuestionAnswer />
                </div>
                <div className="lg:col-span-1 col-span-2">
                  <QuestionAnswer />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="lg:col-span-1 md:col-span-2 col-span-2">
                  <CommentProduct />
                </div>
                <div className="lg:col-span-1 md:col-span-2 col-span-2">
                  <CommentProduct />
                </div>
                <div className="lg:col-span-1 md:col-span-2 col-span-2">
                  <CommentProduct />
                </div>
                <div className="lg:col-span-1 md:col-span-2 col-span-2">
                  <CommentProduct />
                </div>
              </div>
            </div>
            <div
            class="tab-pane "
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            <div className="grid grid-cols-2 gap-2">
            <div className="lg:col-span-1 md:col-span-2 col-span-2">
            <CommentBusiness />
            </div>
            <div className="lg:col-span-1 md:col-span-2 col-span-2">
            <CommentBusiness />
            </div>
            <div className="lg:col-span-1 md:col-span-2 col-span-2">
            <CommentBusiness />
            </div>
            <div className="lg:col-span-1 md:col-span-2 col-span-2">
            <CommentBusiness />
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default comments;
