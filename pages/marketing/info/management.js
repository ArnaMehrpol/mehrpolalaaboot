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
import MainRoot from "../../../components/marketing/fileManager/components/MainRoot";
import ModalSoftDelete from "../../../components/ModalSoftDelete";
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

  const [show, setShow] = useState(false);
  const [rootFilesAddress, setrootFilesAddress] = useState();
  const [chooseFiles, setChooseFiles] = useState([]);
  const [softDeleteModal, setSoftDeleteModal] = useState(false);

  const [managerHidden, setManagerHidden] = useState(false);
  const [managerDelHidden, setManagerDelHidden] = useState(false);
  const router = useRouter();

  const closeMainRoot = () => {
    setShow(false);
    // setShowDelete(false);
  };
  const managerPicHandler = (file) => {
    setManagerPic(file[0]);
  };
  const rootFilesAddressFunc = (rootFilesAddress) => {
    setrootFilesAddress(rootFilesAddress);
  };
  const chooseFileFromMainRootFunc = (chooseFile) => {
    setChooseFiles(chooseFile);
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
          filemanager_item_id: chooseFiles[0].id,
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
        showPicFrame();
      })
      .catch((error) => {
        setLoading(false);
        toast.error("ثبت اطلاعات با مشکل مواجه شد");
        console.log(error.message);
      });
  };
  const showPicFrame = (e) => {
    setManagerHidden(!managerHidden);
    setManagerDelHidden(!managerDelHidden);
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
        console.log("Heare");
        console.log(AllDatas);
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
  const showSoftDeleteModal = () => {
    setSoftDeleteModal(!softDeleteModal);
  };
  const softDeleteModalHandler = () => {
    setChooseFiles(null);
    setSoftDeleteModal(!softDeleteModal);
  };
  // const DeleteHandler = () => {
  //   console.log(slideId);
  //   setDeLeteLoading(true);
  //   axios
  //     .post(
  //       url +
  //         "api/businesses/" +
  //         cookies.get("b-Id") +
  //         "/documents/" +
  //         dbSlideId,
  //       {
  //         _method: "DELETE",
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${cookies.get("token")}`,
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       if (response) {
  //         toast.success("تصویر مورد نظر با موفقیت پاک شد");
  //         setDeLeteLoading(false);
  //         gettingSlides();
  //         setShowModal(false);
  //       } else {
  //         toast.error("عملیات انجام نشد. مجددا سعی نمایید");
  //         setDeLeteLoading(false);
  //       }
  //     })
  //     .catch(function (error) {
  //       toast.error("متاسفانه سرور جواب نمی دهد");
  //       console.log(error.message);
  //       setDeLeteLoading(false);
  //     });
  // };
  useEffect(() => {
    setToken(cookies.get("token"));
    gettingManagerInfoes();
  }, []);
  useEffect(() => {
    setChooseFiles(null);
  }, [managerHidden]);

  return (
    <div className="mx-auto">
      {show && (
        <MainRoot
          closeMainRoot={closeMainRoot}
          rootFilesAddress={rootFilesAddressFunc}
          chooseFileFromMainRoot={chooseFileFromMainRootFunc}
        />
      )}
      {softDeleteModal && (
        <ModalSoftDelete
          modalHandler={showSoftDeleteModal}
          delete={softDeleteModalHandler}
        />
      )}
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
                          <label className="text-[12px] text-slate-600 px-2 mb-2">
                            نام
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) => setManagerName(e.target.value)}
                              type="text"
                              className="form-control text-[12px] h-[38px]"
                              placeholder="نام"
                              id="managerName"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-[12px] text-slate-600 px-2 mb-2">
                            نام خانوادگی
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) =>
                                setManagerLastname(e.target.value)
                              }
                              type="text"
                              className="form-control text-[12px] h-[38px]"
                              placeholder="نام خانوادگی"
                              id="managerLastname"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 mt-[1.25rem]">
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-[12px] text-slate-600 px-2 mb-2">
                            شماره همراه
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) => setManagerMobile(e.target.value)}
                              type="number"
                              className="form-control IranSanse text-[12px] h-[38px]"
                              placeholder="شماره همراه"
                              id="managerMobile"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <sup className="text-danger">*</sup>
                          <label className="text-[12px] text-slate-600 px-2 mb-2">
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
                              className="text-slate-400 text-[12px]"
                              value="مدیر عامل"
                            >
                              مدیر عامل
                            </option>
                            <option
                              className="text-slate-400 text-[12px]"
                              value="رئیس هیات مدیره"
                            >
                              رئیس هیات مدیره
                            </option>
                            <option
                              className="text-slate-400 text-[12px]"
                              value="نایب رئیس هیات مدیره"
                            >
                              تایب رئیس هیات مدیره
                            </option>
                            <option
                              className="text-slate-400 text-[12px]"
                              value="معاون"
                            >
                              معاون
                            </option>
                            <option
                              className="text-slate-400 text-[12px]"
                              value="مدیر"
                            >
                              مدیر
                            </option>
                            <option
                              className="text-slate-400 text-[12px]"
                              value="مسئول"
                            >
                              مسئول
                            </option>
                            <option
                              className="text-slate-400 text-[12px]"
                              value="سایر"
                            >
                              سایر
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-6 mt-1">
                    {/* <label className="text-[12px] text-slate-600 pr-3 mb-2"></label> */}
                    <button
                      type="button"
                      onClick={() => {
                        setShow(true);
                      }}
                      placeholder="عکس را انتخاب نمایید"
                      className=" text-whitemyButton text-[12px] px-2 py-1 bg-blue-500 hover:bg-blue-400 text-white rounded mt-4 mr-7"
                    >
                      افزودن تصویر
                    </button>
                    {chooseFiles &&
                      chooseFiles.map((file) => (
                        <>
                          <div
                            id="myElement"
                            key={file.id}
                            className="m-1 relative"
                          >
                            <div className="mySlideCard overflow-hidden silideScale ">
                              <img
                                name="managerPic"
                                id="managerPic"
                                onChange={(e) => {
                                  setSlideId(file.id);
                                }}
                                src={
                                  chooseFiles &&
                                  `${rootFilesAddress}/${file.name}`
                                }
                                className="rounded-md managerImg  "
                              />
                            </div>
                            <div
                              id="delPic"
                              onClick={showSoftDeleteModal}
                              className="absolute mr-8 mt-1 myPointer"
                            >
                              <i class="bi bi-x-circle text-danger"></i>
                            </div>
                          </div>
                        </>
                      ))}
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
                    className="text-white myButton text-[12px] px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    disabled={
                      managerName == "" ||
                      managerLastname == "" ||
                      managerMobile == "" ||
                      managerPosition == ""
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
                              className="text-slate-600 IranSanse text-[12px]"
                            >
                              {(count = count + 1)}
                            </th>
                            <td className="text-[12px]">
                              {managerAllInfo.first_name}
                            </td>
                            <td className="text-[12px]">
                              {managerAllInfo.last_name}
                            </td>
                            <td className="text-[12px]">
                              {managerAllInfo.role}
                            </td>
                            <td className="text-[12px]">
                              {managerAllInfo.mobile}
                            </td>
                            <td
                              className="text-[12px]  "
                              value={() => {
                                setManager_id(managerAllInfo.id);
                              }}
                              id="manager_id"
                            >
                              <img
                                className="tableManagerPic"
                                src={managerAllInfo.full_link}
                                alt="مهر پل"
                              />
                            </td>
                            <td className="w-full h-full flex justify-center items-center">
                              <button
                                type="button"
                                onClick={(e) => {
                                  setManager_id(managerAllInfo.id);

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
                  </div>
                  <div className="flex justify-end w-full">
                    <button
                      id="btnGeneralInfo"
                      name="btnGeneralInfo"
                      onClick={() => {
                        setLoadingNext(true);
                        router.push("/marketing/info/agreement");
                      }}
                      className="text-white left-0  myButton text-[12px] px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
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
