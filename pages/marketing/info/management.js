import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";

const management = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const cookies = new Cookies();
  const [managerName, setManagerName] = useState("");
  const [managerLastname, setManagerLastname] = useState("");
  const [managerMobile, setManagerMobile] = useState("");
  const [managerPosition, setManagerPosition] = useState("");
  const [managerPic, setManagerPic] = useState("");
  const [token, setToken] = useState("");
  const [ok, setOk] = useState("");
  const [manager_id, setManager_id] = useState(0);
  const [managerAllInfos, setManagerAllInfos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);

  const router = useRouter();

  const managerPicHandler = (file) => {
    setManagerPic(file[0]);
  };

  const handleSubmitManagerInfo = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post(
        url + "api/businesses/" + cookies.get("b-Id") + "/managers",
        {
          first_name: managerName,
          last_name: managerLastname,
          role: managerPosition,
          mobile: managerMobile,
          picture: managerPic,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        setLoading(false);
        const data = response.data;
        // setBusiness_id(data.business.id);
        gettingManagerInfoes();
        toast.success("اطلاعات با موفقیت ثبت شد");
        document.getElementById("managerName").value = null;
        document.getElementById("managerLastname").value = null;
        document.getElementById("managerMobile").value = null;
        document.getElementById("managerPosition").value = null;
        document.getElementById("managerPic").value = null;
      })
      .catch((error) => {
        setLoading(false);
        toast.error("ثبت اطلاعات با مشکل مواجه شد");
        console.log(error.message);
      });
  };
  //Gettin Manager Infos
  const gettingManagerInfoes = () => {
    setLoading(true);
    axios
      .get(url + "api/businesses/" + cookies.get("b-Id") + "/managers", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        var AllDatas = response.data.data;
        console.log(AllDatas);

        setManagerAllInfos(AllDatas);
      })
      .catch(function (error) {
        setLoading(false);
        console.log("not ok");
        console.log(token);
      });
  };
  // ****************************************
  const modalHandler = () => {
    setShowModal(!showModal);
    console.log(manager_id);
  };
  // *****************************************
  const deleteManager = (e) => {
    e.preventDefault();
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/managers/" +
          manager_id,
        {
          _method: "DELETE",
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        modalHandler();
        gettingManagerInfoes();
        toast.success("مشخصات مدیر مورد نظر با موفقیت پاک شد");
      })
      .catch(function (err) {
        toast.error("عملیات انجام نشد. لطفا مجددا سعی فرمایید");
        console.log(err.message);
      });
  };

  useEffect(() => {
    setToken(cookies.get("token"));
    gettingManagerInfoes();
  }, []);

  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols-12 bg-slate-100 ">
          <div>
            <MarketingInfoSide />
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <MarketingInfoHeader />
            <section className="management-container max-w-screen-md mx-auto flex justify-center items-center relative">
              <div className="management-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[2rem]">
                {loading && (
                  <>
                    <span className="ml-2 text-primary">...بارگذاری</span>
                    <div
                      className="spinner-border text-primary ml-2"
                      role="status"
                    ></div>
                  </>
                )}
                <div className="management-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">مدیران</h5>
                  <small className="text-slate-600 text-xs mt-0.5">
                    در این قسمت اطلاعات مربوط به مدیران را وارد کنید.
                  </small>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  <div className="lg:col-span-4 col-span-6">
                    <div className="col-span-12">
                      <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            نام
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) => setManagerName(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder="نام"
                              id="managerName"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            نام خانوادگی
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) =>
                                setManagerLastname(e.target.value)
                              }
                              type="text"
                              className="form-control"
                              placeholder="نام خانوادگی"
                              id="managerLastname"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 mt-[1.25rem]">
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            شماره همراه
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) => setManagerMobile(e.target.value)}
                              type="text"
                              className="form-control IranSanse"
                              placeholder="شماره همراه"
                              id="managerMobile"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            سمت
                          </label>
                          <select
                            onChange={(e) => setManagerPosition(e.target.value)}
                            className="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                            id="managerPosition"
                          >
                            <option selected>انتخاب کنید</option>
                            <option
                              className="text-slate-400 text-sm"
                              value="مدیر عامل"
                            >
                              مدیر عامل
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="رئیس هیات مدیره"
                            >
                              رئیس هیات مدیره
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="نایب رئیس هیات مدیره"
                            >
                              تایب رئیس هیات مدیره
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="معاون"
                            >
                              معاون
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="مدیر"
                            >
                              مدیر
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="مسئول"
                            >
                              مسئول
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="سایر"
                            >
                              سایر
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-6">
                    <label className="text-sm text-slate-600 pr-3 mb-2">
                      تصویر
                    </label>
                    <input
                      onChange={(e) => managerPicHandler(e.target.value)}
                      type="file"
                      name="managerPic"
                      id="managerPic"
                      placeholder="عکس را انتخاب نمایید"
                    />
                  </div>
                </div>

                <div className="save-btn flex justify-end items-end mt-4">
                  <div className="mb-3">
                    {loading && (
                      <>
                        <span className="ml-2 text-primary">...بارگذاری</span>
                        <div
                          className="spinner-border text-primary ml-2"
                          role="status"
                        ></div>
                      </>
                    )}
                  </div>

                  <button
                    id="btnGeneralInfo"
                    name="btnGeneralInfo"
                    onClick={handleSubmitManagerInfo}
                    className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    disabled={
                      managerName == "" ||
                      managerLastname == "" ||
                      managerMobile == "" ||
                      managerPosition == "" ||
                      managerPic == ""
                        ? true
                        : false
                    }
                  >
                    ثبت اطلاعات
                  </button>
                </div>
                <div className="management-list-tabele-content">
                  <div className="management-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لیست مدیران</h5>
                  </div>
                  <table className="management-list-tabele w-full h-full table table-bordered rounded-md mb-8">
                    <thead>
                      <tr className=" bg-blue-200 text-center text-slate-600 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام</th>
                        <th scope="col">نام خانوادگی</th>
                        <th scope="col">سمت</th>
                        <th scope="col">شماره همراه</th>
                        <th scope="col">تصویر</th>
                        <th scope="col">عملیات</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {managerAllInfos.map(function (managerAllInfo) {
                        return (
                          <tr className="text-center">
                            <th
                              scope="row"
                              className="text-slate-600 IranSanse"
                            >
                              {(count = count + 1)}
                            </th>
                            <td>{managerAllInfo.first_name}</td>
                            <td>{managerAllInfo.last_name}</td>
                            <td>{managerAllInfo.role}</td>
                            <td>{managerAllInfo.mobile}</td>
                            <td
                              value={() => {
                                setManager_id(managerAllInfo.id);
                              }}
                              id="manager_id"
                            >
                              <img
                                className="tableManagerPic"
                                src={managerAllInfo.picture_link}
                                alt="مهر پل"
                              />
                            </td>
                            <td className="w-full h-full flex justify-center items-center">
                              {/* <Link href="/">
                                <a className="border-l border-slate-200">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-3 text-slate-400 "
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </a>
                              </Link> */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  setManager_id(managerAllInfo.id);
                                  console.log(managerAllInfo.id);
                                  modalHandler();
                                }}
                              >
                                <i class="bi bi-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Delete Modal  */}
                  {showModal ? (
                    <Modal delete={deleteManager} modalHandler={modalHandler} />
                  ) : null}
                  {/* ********************************************************** */}

                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    {loadingNext && (
                      <>
                        <span className="ml-2 text-primary">...بارگذاری</span>
                        <div
                          className="spinner-border text-primary ml-2"
                          role="status"
                        ></div>
                      </>
                    )}
                    <button
                      id="btnGeneralInfo"
                      name="btnGeneralInfo"
                      onClick={() => {
                        setLoadingNext(true);
                        router.push("/marketing/info/agreement");
                      }}
                      className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    >
                      مرحله بعد
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default management;
