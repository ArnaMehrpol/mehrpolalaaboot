import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
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
        setOk("ok");
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
                  <h5 className="text-base font-semibold">درباره ما</h5>
                  <small className="text-slate-500 text-xs mt-0.5"></small>
                </div>
                <div className="about-list-tabele-content">
                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      معرفی کسب و کار (حداقل 400 کاراکتر و حداکثر 800 کاراکتر)
                    </h5>
                    <Editor
                      uiLanguage="fa"
                      name="description1"
                      onChange={(data) => setIntroduce(data)}
                      editorLoaded={editorLoaded}
                      placeholder={
                        introduce != "" ? introduce : "معرفی کسب و کار"
                      }
                    />
                    {/* <textarea
                      onChange={(e) => setIntroduce(e.target.value)}
                      placeholder={
                        ok != " " && introduce != ""
                          ? introduce
                          : "معرفی کسب و کار"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea> */}
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      پیام مدیریت (حداقل 200 کاراکتر و حداکثر 600 کاراکتر)
                    </h5>
                    <Editor
                      name="description2"
                      onChange={(data) => setManagementMessage(data)}
                      editorLoaded={editorLoaded}
                      placeholder={
                        managementMessage != ""
                          ? managementMessage
                          : "پیام مدیریت"
                      }
                    />
                    {/* <textarea
                      onChange={(e) => setManagementMessage(e.target.value)}
                      placeholder={
                        ok != " " && managementMessage != ""
                          ? managementMessage
                          : "پیام مدیریت"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea> */}
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      چشم انداز (حداقل 100 کاراکتر و حداکثر 600 کاراکتر)
                    </h5>
                    <Editor
                      name="description3"
                      onChange={(data) => setVision(data)}
                      editorLoaded={editorLoaded}
                      placeholder={vision != "" ? vision : "چشم انداز"}
                    />
                    {/* <textarea
                      onChange={(e) => setVision(e.target.value)}
                      placeholder={
                        ok != "" && vision != "" ? vision : "چشم انداز"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea> */}
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      ماموریت (حداقل 100 کاراکتر و حداکثر 800 کاراکتر)
                    </h5>
                    <Editor
                      name="description1"
                      onChange={(data) => setMission(data)}
                      editorLoaded={editorLoaded}
                      placeholder={mission != "" ? mission : "ماموریت"}
                    />
                    {/* <textarea
                      onChange={(e) => {
                        setMission(e.target.value);
                      }}
                      placeholder={
                        ok != "" && mission != "" ? mission : "ماموریت"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea> */}
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لوازم و تجهیزات</h5>
                    <Editor
                      name="description4"
                      onChange={(data) => setAccessories(data)}
                      editorLoaded={editorLoaded}
                      placeholder={
                        accessories != "" ? accessories : "لوازم و تجهیزات"
                      }
                    />
                    {/* <textarea
                      onChange={(e) => setAccessories(e.target.value)}
                      placeholder={
                        ok != "" && accessories != ""
                          ? accessories
                          : "لوازم و تجهیزات"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea> */}
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
                      className="text-white  font-semibold btn btn-primary"
                    >
                      ثبت و مرحله بعد
                    </button>
                    <button
                      onClick={() => {
                        router.push("/marketing/info/management");
                      }}
                      className="text-white me-2 font-semibold btn btn-primary"
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

export default about;
