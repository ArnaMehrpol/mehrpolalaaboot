import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import oneImage from "/public/assets/img/products/11.png";
import soundImage from "/public/assets/img/pic/sound.png";
import pdfImage from "/public/assets/img/pic/pdf.png";
import MarketingUploadSide from "../../../components/marketing/layout/MarketingUploadSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

import MainRoot from "../../../components/marketing/fileManager/components/MainRoot";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";
import ModalSoftDelete from "../../../components/ModalSoftDelete";
import { iconFile } from "../../../components/tools/iconFiles";

const educational = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [rootFilesAddress, setrootFilesAddress] = useState();
  const [chooseFiles, setChooseFiles] = useState([]);
  const [slideId, setSlideId] = useState();
  const [Type, setType] = useState("slider");
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeLeteLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allVideos, setAllVideos] = useState([]);
  const [allMp3, setAllMp3] = useState([]);
  const [allPDF, setAllPDF] = useState([]);
  const [dbSlideId, setDbSlideId] = useState(null);
  const [softDeleteModal, setSoftDeleteModal] = useState(false);
  const [fileName, setFileName] = useState([]);
  const [description, setDescription] = useState([]);
  const [chooseFileName, setChooseFileName] = useState("");
  const [chooseFileId, setchooseFileId] = useState(null);

  const [gv, setGv] = useState(false);
  const [gp, setGp] = useState(false);
  const [gPdf, setGPdf] = useState(false);

  const cookies = new Cookies();

  const closeMainRoot = () => {
    setShow(false);
    setShowDelete(false);
  };

  const InsertIntoFile = async (e) => {
    e.preventDefault();
    setLoading(true);
    // for (var i = 0; i < chooseFiles.length; i++) {
    // setCounter(chooseFiles.length);
    if (chooseFileName == "mp4") {
      axios
        .post(
          url +
            "api/businesses/" +
            cookies.get("b-Id") +
            "/documents?type=tutorial_video",
          {
            type: "tutorial_video",
            filemanager_item_id: chooseFileId,
            name: fileName,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.get("token")}`,
            },
          }
        )
        .then(function (response) {
          // if ([i] >= counter) {
          gettingVideos();
          softDeleteModalHandler2();
          toast.success(`فایل با موفقیت ذخیره شد`);
          setLoading(false);
          setFileName("");
          setDescription("");
          document.getElementById("fileName").value = "";
          document.getElementById("fileDescription").value = "";
          // } else {
          // console.log("عملیات با مشکل مواجه شد");
          // console.log([i]);
          // console.log(chooseFiles.length);
          // setLoading(false);
          // }
        })
        .catch(function (error) {
          toast.error("عملیات انجام نشد. لطفا دوباره سعی نمایید");
          setError(true);
          console.log(error.message);
          setLoading(false);
        });
      // }
    }
    if (chooseFileName == "mp3") {
      axios
        .post(
          url +
            "api/businesses/" +
            cookies.get("b-Id") +
            "/documents?type=tutorial_podcast",
          {
            type: "tutorial_podcast",
            filemanager_item_id: chooseFileId,
            name: fileName,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.get("token")}`,
            },
          }
        )
        .then(function (response) {
          // if ([i] >= counter) {
          gettingPodcast();
          softDeleteModalHandler2();
          toast.success(`فایل با موفقیت ذخیره شد`);
          setLoading(false);
          setFileName("");
          setDescription("");

          document.getElementById("fileName").value = "";
          document.getElementById("fileDescription").value = "";
          // } else {
          // console.log("عملیات با مشکل مواجه شد");
          // console.log([i]);
          // console.log(chooseFiles.length);
          // setLoading(false);
          // }
        })
        .catch(function (error) {
          toast.error("عملیات انجام نشد. لطفا دوباره سعی نمایید");
          setError(true);
          console.log(error.message);
          setLoading(false);
        });
    }
    if (chooseFileName == "pdf") {
      axios
        .post(
          url +
            "api/businesses/" +
            cookies.get("b-Id") +
            "/documents?type=tutorial_pdf",
          {
            type: "tutorial_pdf",
            filemanager_item_id: chooseFileId,
            name: fileName,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.get("token")}`,
            },
          }
        )
        .then(function (response) {
          // if ([i] >= counter) {
          gettingPDF();
          softDeleteModalHandler2();
          toast.success(`فایل با موفقیت ذخیره شد`);
          setLoading(false);
          setFileName("");
          setDescription("");
          document.getElementById("fileName").value = "";
          document.getElementById("fileDescription").value = "";
          // } else {
          // console.log("عملیات با مشکل مواجه شد");
          // console.log([i]);
          // console.log(chooseFiles.length);
          // setLoading(false);
          // }
        })
        .catch(function (error) {
          toast.error("عملیات انجام نشد. لطفا دوباره سعی نمایید");
          setError(true);
          console.log(error.message);
          setLoading(false);
        });
    }
  };

  const gettingVideos = () => {
    setLoading(true);
    setGv(true);
    axios
      .get(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/documents?type=tutorial_video",

        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        setAllVideos(response.data.data);
        console.log(response.status);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setLoading(false);
      });
  };

  const gettingPodcast = () => {
    setLoading(true);
    setGp(true);
    axios
      .get(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/documents?type=tutorial_podcast",

        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        setAllMp3(response.data.data);
        console.log(response.status);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setLoading(false);
      });
  };
  const gettingPDF = () => {
    setLoading(true);
    setGPdf(true);
    axios
      .get(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/documents?type=tutorial_pdf",

        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        setAllPDF(response.data.data);
        console.log(response.status);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setLoading(false);
      });
  };

  const rootFilesAddressFunc = (rootFilesAddress) => {
    setrootFilesAddress(rootFilesAddress);
  };

  const chooseFileFromMainRootFunc = (chooseFile) => {
    setChooseFiles(chooseFile);
    setChooseFileName(chooseFile[0].name.split(".").pop());
    setchooseFileId(chooseFile[0].id);
  };
  console.log("نلم فایل");
  console.log(chooseFileName);
  console.log(chooseFileId);

  useEffect(() => {
    gettingVideos();
    gettingPodcast();
    gettingPDF();
  }, []);
  const modalHandler = () => {
    setShowModal(!showModal);
    setDeLeteLoading(false);
  };
  const DeleteHandler = () => {
    setDeLeteLoading(true);
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/documents/" +
          dbSlideId,
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
        if (response) {
          toast.success("فایل مورد نظر با موفقیت پاک شد");
          setDeLeteLoading(false);
          gettingVideos();
          gettingPodcast();
          gettingPDF();
          setShowModal(false);
        } else {
          toast.error("عملیات انجام نشد. مجددا سعی نمایید");
          setDeLeteLoading(false);
        }
      })
      .catch(function (error) {
        toast.error("متاسفانه سرور جواب نمی دهد");
        console.log(error.message);
        setDeLeteLoading(false);
      });
  };
  const showSoftDeleteModal = () => {
    setSoftDeleteModal(!softDeleteModal);
  };
  const softDeleteModalHandler = () => {
    setChooseFiles(null);
    setSoftDeleteModal(!softDeleteModal);
  };
  const softDeleteModalHandler2 = () => {
    setChooseFiles(null);
  };

  return (
    <div>
      {show && (
        <MainRoot
          closeMainRoot={closeMainRoot}
          rootFilesAddress={rootFilesAddressFunc}
          chooseFileFromMainRoot={chooseFileFromMainRootFunc}
        />
      )}

      {showModal && (
        <Modal
          modalHandler={modalHandler}
          delete={DeleteHandler}
          deleteLoading={deleteLoading}
        />
      )}
      {softDeleteModal && (
        <ModalSoftDelete
          modalHandler={showSoftDeleteModal}
          delete={softDeleteModalHandler}
        />
      )}
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols- bg-slate-100 ">
          <div>
            <MarketingUploadSide />
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader />
            <section className="max-w-screen-lg mx-auto flex justify-center items-center relative z-10 mt-[85px] px-3">
              <div className="w-full border border-slate-200 rounded-md p-2 bg-white flex flex-col">
                <div className="educational-title flex flex-col my-2">
                  <h5 className="text-slate-600 text-base font-semibold">
                    فایلهای آموزشی
                  </h5>
                  <small className="text-slate-400 text-xs mt-0.5">
                    فایل های آموزشی خود را فقط با فرمتهای
                    <span className="text-danger"> PDF </span>
                    <span className="text-danger"> ،MP3 </span>
                    <span className="text-danger"> ،MP4 </span>
                    وارد کنید.
                  </small>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  <div className="lg:col-span-2 col-span-6 flex flex-col">
                    <div className="educatinal-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام فایل
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          tabIndex={1}
                          id="fileName"
                          onChange={(e) => {
                            setFileName(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="نام فایل وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="btn-add">
                      <button
                        tabIndex={3}
                        onClick={() => {
                          setShow(true);
                        }}
                        className="fs-5 text-slate-400 mr-2"
                      >
                        بارگذاری فایل
                        <i className="bi bi-cloud-arrow-up fs-5 mr-2"></i>
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-6">
                    <sup className="text-danger">*</sup>
                    <label className="text-sm text-slate-700 px-2 mb-2">
                      توضیحات
                    </label>

                    <textarea
                      tabIndex={2}
                      class="form-control pt-[17px]"
                      id="fileDescription"
                      rows="4"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                    {loading && (
                      <>
                        <span className="ml-2 text-primary flex justify-center mt-3">
                          ...بارگذاری
                          <div
                            className="spinner-border text-primary mr-2 "
                            role="status"
                          ></div>
                        </span>
                      </>
                    )}
                  </div>

                  <div className="movieInLoadFile next-btn mb-2 w-full h-full border-t-2 border-dotted border-slate-100  items-center ">
                    <button
                      tabIndex={4}
                      onClick={InsertIntoFile}
                      className="text-white bg-blue-600 btn btn-primary  hover:bg-blue-700 rounded-md IranSanse  font-bold ml-6 "
                      type="submit"
                      disabled={
                        fileName == "" || description == "" ? true : false
                      }
                    >
                      ثبت
                    </button>
                  </div>
                </div>
                {/* Video */}
                <div className="   video-grid grid grid-cols-5 border border-slate-200 rounded-md p-2 mt-4">
                  <div className=" w-full h-full lg:col-span-1 md:col-span-2 col-span-5 flex flex-col items-center justify-evenly md:pb-0 pb-4">
                    <h5 className="text-slate-600 text-lg font-semibold text-center md:-mt-9   overflow-hidden -mt-5">
                      <div>
                        <i class="bi bi-webcam text-9xl  text-slate-500 md:mt-2"></i>
                      </div>
                      <div className="-mt-5">ویدئو ها</div>
                    </h5>
                  </div>
                  {/* az */}
                  <div className="slideContainer">
                    {chooseFileName == "mp4" && chooseFiles
                      ? chooseFiles.map((file) => (
                          <div className="backdropVideo">
                            <div
                              id="myElement "
                              key={file.id}
                              className="m-1  videoMid  "
                              // relative
                            >
                              <div className="myVideoCard overflow-hidden silideScale ">
                                <video
                                  controls
                                  onChange={(e) => {
                                    setSlideId(file.id);
                                  }}
                                  src={`${rootFilesAddress}/${file.name}`}
                                  className="rounded-md myVideoCard "
                                ></video>
                                <div
                                  onClick={showSoftDeleteModal}
                                  className="absolute mr-2 mt-1 z-20"
                                >
                                  <i class="bi bi-x-circle text-danger"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : ""}
                  </div>
                  {/* <div className="myTutorialContainer"> */}
                  <div className="slideContainer">
                    {allVideos
                      ? allVideos.map((file) => (
                          <div className="">
                            <div key={file.id} className="m-1 relative">
                              <div className=" myVideoCard overflow-hidden silideScale">
                                <video
                                  controls
                                  onChange={(e) => {
                                    setSlideId(file.id);
                                  }}
                                  src={file.full_link}
                                  className="rounded-md myVideoCard"
                                ></video>
                              </div>
                              <div
                                onClick={() => {
                                  setDbSlideId(file.id);
                                  modalHandler();
                                }}
                                className="absolute ml-2 mt-1 myPointer z-20"
                              >
                                <i className="bi bi-trash text-danger"></i>
                              </div>
                              <h2 className="text-center bold mt-1 ">
                                {file.name}
                              </h2>
                              <p className="text-center mt-1 ">
                                {file.description}
                              </p>
                            </div>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
                {/* Video                */}
              </div>
            </section>

            {/* Padcast inJa */}
            <section className="max-w-screen-lg mx-auto flex justify-center items-center relative z-10 mt-[10px] px-3">
              <div className="w-full border border-slate-200 rounded-md p-2 bg-white flex flex-col">
                <div className="video-grid grid grid-cols-5 border border-slate-200 rounded-md p-2 mt-1">
                  <div className="w-full h-full lg:col-span-1 md:col-span-2 col-span-5 flex flex-col items-center justify-evenly ">
                    <h5 className="text-slate-600 text-lg font-semibold text-center md:-mt-12 mt-0 overflow-hidden ">
                      <div>
                        <i class="bi bi-mic text-7xl text-slate-500 md:-mt-9 mt-0"></i>
                      </div>
                      <div className="-mt-1">پادکست ها</div>
                    </h5>
                  </div>
                  {/* az */}
                  <div className=" slideContainer2">
                    {chooseFileName == "mp3" && chooseFiles
                      ? chooseFiles.map((file) => (
                          <>
                            <div className="  backdrop ">
                              <div
                                id="myElement"
                                key={file.id}
                                className=" relative"
                              >
                                <div className="myAudioCard overflow-hidden silideScale">
                                  <audio
                                    controls
                                    onChange={(e) => {
                                      setSlideId(file.id);
                                    }}
                                    src={`${rootFilesAddress}/${file.name}`}
                                  ></audio>
                                  <div
                                    onClick={showSoftDeleteModal}
                                    className="absolute z-20 myPointer"
                                  >
                                    <i class="bi bi-x-circle text-danger"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      : ""}
                  </div>
                  <div className="slideContainer2">
                    {allMp3
                      ? allMp3.map((file) => (
                          <div key={file.id} className="m-1 relative">
                            <div className=" myAudioCard overflow-hidden silideScale">
                              <audio
                                controls
                                onChange={(e) => {
                                  setSlideId(file.id);
                                }}
                                src={file.full_link}
                              ></audio>
                            </div>
                            <div
                              onClick={() => {
                                setDbSlideId(file.id);
                                modalHandler();
                              }}
                              className="absolute mr-5 -mt-4 myPointer z-20"
                            >
                              <i className="bi bi-trash text-danger"></i>
                            </div>

                            <h2 className="text-center bold mt-1 ">
                              {file.name}
                            </h2>
                            <p className="text-center mt-1 ">
                              {file.description}
                            </p>
                          </div>
                        ))
                      : ""}
                  </div>

                  {/* Ta Inja */}
                </div>
              </div>
            </section>
            {/* End Podcast */}
            {/* PDF Inja  */}
            <section className="max-w-screen-lg mx-auto flex justify-center items-center relative z-10 mt-[10px] px-3">
              <div className="w-full border border-slate-200 rounded-md p-2 bg-white flex flex-col">
                <div className="video-grid grid grid-cols-5 border border-slate-200 rounded-md p-2 mt-1">
                  <div className="w-full h-full lg:col-span-1 md:col-span-2 col-span-5 flex flex-col items-center justify-evenly ">
                    <h5 className="text-slate-600 text-lg font-semibold text-center md:-mt-12 mt-0 overflow-hidden ">
                      <div>
                        <i class="bi bi-filetype-pdf text-7xl text-slate-500 md:-mt-9 mt-0"></i>
                      </div>
                      <div>فایل ها</div>
                    </h5>
                  </div>

                  <div className=" slideContainer2">
                    {chooseFileName == "pdf" && chooseFiles
                      ? chooseFiles.map((file) => (
                          <>
                            <div className="slideContainer ">
                              <div className="backdropPDF">
                                <div
                                  id="myElement "
                                  key={file.id}
                                  className="mt-3 mr-48 p-2"
                                  // relative
                                >
                                  <div
                                    onClick={showSoftDeleteModal}
                                    className="absolute mr-2  z-20"
                                  >
                                    <i class="bi bi-x-circle text-danger"></i>
                                  </div>
                                  <div className="myPdfCard overflow-hidden silideScale">
                                    <div
                                      controls
                                      onChange={(e) => {
                                        setSlideId(file.id);
                                      }}
                                      src={`${rootFilesAddress}/${file.name}`}
                                      className="rounded-md myPdfCard "
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      : ""}
                  </div>
                  <div className="slideContainer">
                    {allPDF
                      ? allPDF.map((file) => (
                          <div key={file.id} className="m-1 relative">
                            <div
                              onClick={() => {
                                setDbSlideId(file.id);
                                modalHandler();
                              }}
                              className="absolute mr-2  myPointer z-20"
                            >
                              <i className="bi bi-trash text-danger"></i>
                            </div>
                            <div className=" myPdfCard overflow-hidden silideScale">
                              <div
                                onChange={(e) => {
                                  setSlideId(file.id);
                                }}
                                src={file.full_link}
                                className="rounded-md myPdfCard"
                              ></div>
                            </div>
                            <h2 className="text-center bold mt-1 ">
                              {file.name}
                            </h2>
                            <p className="text-center mt-1 ">
                              {file.description}
                            </p>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </section>
            {/* End PDF */}
            {/* <div className="nextLevel">
              <button className="text-white ml-4 mt-1 mb-1   bg-blue-600 h-10 w-32 hover:bg-blue-700 rounded-md IranSanse  font-bold ">
                مرحله بعد
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default educational;
