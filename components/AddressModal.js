import React, { useRef, useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useEffect } from "react";

const AddressModal = (props) => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const [addressId, setAddressId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cookies = new Cookies();
  const target = useRef();
  const focusHandler = () => {
    target.current.focus();
  };
  useEffect(() => {
    focusHandler();
  }, []);
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  const deleteAddress = () => {
    console.log(addressId);
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id", { path: "/" }) +
          "/addresses/" +
          addressId,
        {
          _method: "DELETE",
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        toast.success("آدرس مورد نظر با موفقیت پاک شد");
        props.modalHandler();
        props.gettingAddresses();
      })
      .catch(function (error) {
        toast.error("عملیات با مشکل مواجه شد");
        modalHandler();
        props.gettingAddresses();
      });
  };
  return (
    <div className="backdrop">
      <button className="mr-1 mt-1" ref={target}>
        <i
          className="bi bi-x-circle text-warning text-2xl"
          onClick={props.modalHandler}
        ></i>
      </button>
      <div className=" AddressModal ">
        <div className="allcontent xxx">
          <div className="partOndeAddressModal">
            <div className="deleteModalForAddress">
              {showModal && (
                <Modal modalHandler={modalHandler} delete={deleteAddress} />
              )}
            </div>
          </div>
          <div className="panel-addresses  bg-slate-200 p-4 border-b border-slate-200">
            {props.allAddresses &&
              props.allAddresses.map(function (allAddresses) {
                return (
                  <>
                    <div className="panel-address border-b border-slate-200 pb-5">
                      <div className="address-title w-full h-full flex justify-between items-center my-4">
                        <div>
                          <h5 className="text-base font-semibold">
                            {allAddresses.name}
                          </h5>
                        </div>
                        {/* <button
                          className="btn btn-danger px-4 py-2 text-xs mt-2"
                          onClick={props.modalHandler}
                        >
                          بستن
                        </button> */}

                        <div className="btn-group dropend">
                          <a
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-three-dots"></i>
                          </a>
                          <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                            {/* <li className="flex items-center pb-2 ">
                              <i className="bi bi-pencil-fill text-sm ml-2"></i>
                              <span className="text-sm">ویرایش آدرس</span>
                            </li> */}
                            <li
                              onClick={(e) => {
                                setAddressId(allAddresses.id);
                                modalHandler();
                              }}
                              className="flex items-center pt-2"
                              value={allAddresses.id}
                            >
                              <i className="bi bi-trash3-fill text-danger text-sm ml-2"></i>
                              <span className="text-sm ">حذف</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <div className="location w-full h-full  flex items-center">
                            <span className="px-1 py-1 bg-blue-500 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white text-semibold"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </span>
                            <p className="text-sm text-black mr-2">
                              {allAddresses.description}
                            </p>
                          </div>
                          <div className="email w-full h-full  flex items-center mt-2">
                            <span className="px-1 py-1 bg-blue-500 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white text-semibold"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                />
                              </svg>
                            </span>
                            <label className="text-sm text-black mr-2">
                              کد پستی
                            </label>
                            <p className="text-sm text-black mr-2">
                              {allAddresses.postal_code}
                            </p>
                          </div>
                          <div className="tel w-full h-full  flex items-center mt-2">
                            <span className="px-1 py-1 bg-blue-500 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white text-semibold"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                            </span>

                            <p className="text-sm text-black mr-2">
                              {allAddresses.tel_1}
                            </p>
                            <span className="text-sm text-black">
                              {allAddresses.tel_1_code}
                            </span>
                          </div>
                          <div className="tel w-full h-full  flex items-center mt-2">
                            <span className="px-1 py-1 bg-blue-500 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white text-semibold"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                            </span>
                            <p className="text-sm text-black mr-2">
                              {allAddresses.tel_2}
                            </p>
                            <span className="text-sm text-black">
                              {allAddresses.tel_2_code}
                            </span>
                          </div>
                        </div>
                        <div className="bg-slate-100 w-36 h-32 "></div>
                      </div>
                      <hr className="mt-3" />
                    </div>
                  </>
                );
              })}
            {/* *********************************************************************** */}
          </div>

          <div>
            {/* <button className="btn btn-primary px-4 py-2 text-xs">ثبت</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
