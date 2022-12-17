import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";
import Editor from "../../../components/Editor";

const about = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const router = useRouter();
  const cookies = new Cookies();
  const [ok, setOk] = useState("");

  const [business_id, setBusiness_id] = useState(0);

  const [introduce, setIntroduce] = useState("");
  const [managementMessage, setManagementMessage] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [accessories, setAccessories] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const cookieSetter = () => {
    setBusiness_id(cookies.get("b-Id"));
  };
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  useEffect(() => {
    setToken(cookies.get("token"));
    gettingAbouteInfos();
  }, []);
  const handleSubmitAbout = (e) => {
    setLoading(true);

    e.preventDefault();
    axios
      .post(
        url + "api/businesses/" + cookies.get("b-Id"),
        {
          _method: "PUT",
          about: introduce,
          message_from_management: managementMessage,
          vision: vision,
          mission: mission,
          accessories: accessories,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        setLoading(false);
        const data = response.data;
        router.push("/marketing/info/management");
        toast.success("اطلاعات با موفقیت ثبت شد!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("عملیات انجام نشد. لطفا دوباره سعی فرمایید");
        console.log(error.message);
      });
  };

  //Gettin AbouteInfos
  const gettingAbouteInfos = () => {
    setLoading(true);
    axios
      .get(url + "api/businesses/" + cookies.get("b-Id"), {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        const data = response.data;
        console.log(data);
        setIntroduce(data.about);
        setManagementMessage(data.message_from_management);
        setVision(data.vision);
        setMission(data.mission);
        setAccessories(data.accessories);
      })
      .catch(function (error) {
        setLoading(false);
        console.log("not ok");
        console.log(token);
      });
  };

  const countChar1 = (e) => {
    const i = document.getElementById("introduce").value.length;
    document.getElementById("i1").innerHTML = i;
  };
  const minChar1 = (e) => {
    const i = document.getElementById("introduce").value.length;

    if (i < 400) {
      toast.error("تعداد کاراکتر نباید از 400 کمتر باشد");

      document.getElementById("introduce").focus();
    }
    return false;
  };
  const countChar2 = (e) => {
    const i2 = document.getElementById("manager_message").value.length;
    document.getElementById("i2").innerHTML = i2;
  };
  const minChar2 = (e) => {
    const i2 = document.getElementById("manager_message").value.length;

    if (i2 < 200) {
      toast.error("تعداد کاراکتر نباید از 200 کمتر باشد");

      document.getElementById("manager_message").focus();
    }
    return false;
  };
  const countChar3 = (e) => {
    const i3 = document.getElementById("vision").value.length;
    document.getElementById("i3").innerHTML = i3;
  };
  const minChar3 = (e) => {
    const i3 = document.getElementById("vision").value.length;

    if (i3 < 100) {
      toast.error("تعداد کاراکتر نباید از 100 کمتر باشد");

      document.getElementById("vision").focus();
    }
    return false;
  };
  const countChar4 = (e) => {
    const i4 = document.getElementById("mission").value.length;
    document.getElementById("i4").innerHTML = i4;
  };
  const minChar4 = (e) => {
    const i4 = document.getElementById("mission").value.length;

    if (i4 < 100) {
      toast.error("تعداد کاراکتر نباید از 100 کمتر باشد");

      document.getElementById("mission").focus();
    }
    return false;
  };

  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols-12 bg-slate-100 ">
          <div>
            <MarketingInfoSide />
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <MarketingInfoHeader />
            {/* <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative ">
              <div className="header-flex h-full flex items-center">
                <Link href="/">
                  <a className="header-link relative">
                    <span className="w-5 h-5 rounded-full flex justify-center items-center bg-rose-500 text-white text-xs absolute -top-3 -right-[5px] opacity-80">
                      ۳
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </header> */}
            <section className="about-container max-w-screen-md mx-auto lg:px-0 px-6 relative">
              <div className="about-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[4.5rem]">
                <div className="about-title flex flex-col my-4">
                  {loading && (
                    <>
                      <span className="ml-2 text-primary">...بارگذاری</span>
                      <div
                        className="spinner-border text-primary ml-2"
                        role="status"
                      ></div>
                    </>
                  )}
                  <h5 className="text-[24px] font-semibold">درباره ما</h5>
                  <small className="text-slate-500 text-xs mt-0.5"></small>
                </div>
                <div className="about-list-tabele-content">
                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-sm text-slate-800 mb-2">
                      معرفی کسب و کار
                    </h5>
                    {/* <Editor
                      uiLanguage="fa"
                      name="description1"
                      onChange={(data) => setIntroduce(data)}
                      editorLoaded={editorLoaded}
                      placeholder={
                        introduce != "" ? introduce : "معرفی کسب و کار"
                      }
                    /> */}
                    <textarea
                      maxLength={800}
                      minLength={400}
                      onBlur={minChar1}
                      onChange={(e) => {
                        setIntroduce(e.target.value);
                        countChar1();
                      }}
                      value={introduce && introduce}
                      placeholder="حداقل 400 کاراکتر و حداکثر 800 کاراکتر"
                      className="aboutusBox rounded p-2 text-sm"
                      name="introduce"
                      id="introduce"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <div className="mt-2">
                      <span className="text-[9px] ml-2 mr-1">
                        تعداد کاراکتر استفاده شده
                      </span>
                      <span className="mr-2 text-[12px]" id="i1">
                        0
                      </span>
                    </div>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-sm text-slate-800 mb-2">پیام مدیریت</h5>
                    {/* <Editor
                      name="description2"
                      onChange={(data) => setManagementMessage(data)}
                      editorLoaded={editorLoaded}
                      placeholder={
                        managementMessage != ""
                          ? managementMessage
                          : "پیام مدیریت"
                      }
                    /> */}
                    <textarea
                      minLength={200}
                      maxLength={600}
                      onChange={(e) => {
                        setManagementMessage(e.target.value);
                        countChar2();
                      }}
                      onBlur={minChar2}
                      value={managementMessage && managementMessage}
                      placeholder="حداقل 200 کاراکتر و حداکثر 600 کاراکتر"
                      className="aboutusBox rounded p-2 text-sm"
                      name="manager_message"
                      id="manager_message"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <div className="mt-2">
                      <span className="text-[9px] ml-2 mr-1">
                        تعداد کاراکتر استفاده شده
                      </span>
                      <span className="mr-2 text-[12px]" id="i2">
                        0
                      </span>
                    </div>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-sm text-slate-800 mb-2">چشم انداز</h5>
                    {/* <Editor
                      name="description3"
                      onChange={(data) => setVision(data)}
                      editorLoaded={editorLoaded}
                      placeholder={vision != "" ? vision : "چشم انداز"}
                    /> */}
                    <textarea
                      minLength={100}
                      maxLength={600}
                      onChange={(e) => {
                        setVision(e.target.value);
                        countChar3();
                      }}
                      onBlur={minChar3}
                      value={vision && vision}
                      placeholder="حداقل 100 کاراکتر و حداکثر 600 کاراکتر"
                      className="aboutusBox rounded p-2 text-sm"
                      name="vision"
                      id="vision"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <div className="mt-2">
                      <span className="text-[9px] ml-2 mr-1">
                        تعداد کاراکتر استفاده شده
                      </span>
                      <span className="mr-2 text-[12px]" id="i3">
                        0
                      </span>
                    </div>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-sm text-slate-800 mb-2">ماموریت</h5>
                    {/* <Editor
                      name="description1"
                      onChange={(data) => setMission(data)}
                      editorLoaded={editorLoaded}
                      placeholder={mission != "" ? mission : "ماموریت"}
                    /> */}
                    <textarea
                      minLength={100}
                      maxLength={800}
                      onChange={(e) => {
                        setMission(e.target.value);
                        countChar4();
                      }}
                      onBlur={minChar4}
                      value={mission && mission}
                      placeholder="حداقل 100 کاراکتر و حداکثر 800 کاراکتر"
                      className="aboutusBox rounded p-2 text-sm"
                      name="mission"
                      id="mission"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <div className="mt-2">
                      <span className="text-[9px] ml-2 mr-1f">
                        تعداد کاراکتر استفاده شده
                      </span>
                      <span className="mr-2 text-[12px]" id="i4">
                        0
                      </span>
                    </div>
                  </div>

                  <div className="next-btn mb-2 w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    {loading && (
                      <>
                        <span className="ml-2 text-primary">...بارگذاری</span>
                        <div
                          className="spinner-border text-primary ml-2"
                          role="status"
                        ></div>
                      </>
                    )}
                    <button
                      onClick={handleSubmitAbout}
                      className="text-white  text-[12px]  btn btn-primary"
                    >
                      ثبت و مرحله بعد
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

export default about;
