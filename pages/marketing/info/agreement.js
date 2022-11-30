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

const agreement = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const [contractTopic, setContractTopic] = useState("");
  const [contractState, setContractState] = useState("");
  const [contractEmployer, setContractEmployer] = useState("");
  const [contractCondition, setContractCondition] = useState("");
  const [data, setData] = useState("a");
  const [token, setToken] = useState("");
  const [count, setCount] = useState(0);
  const [allStates, setAllStates] = useState([]);
  const [loading, setLoading] = useState(false);

  const [agreementAllInfos, setAgreementAllInfos] = useState([]);
  const [agreement_id, setAgreement_id] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  //ُStates

  const getStates = async () => {
    var response = await axios.get(url + "api/public/place?type=state");
    var places = response.data.place;
    setAllStates(places);
  };

  const cookies = new Cookies();

  useEffect(() => {
    setToken(cookies.get("token"));
    getStates();
    gettingAgreementInfoes();
  }, []);
  const handleSubmitAgreement = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(contractTopic);
    console.log(contractState);
    console.log(contractEmployer);
    console.log(contractCondition);
    console.log(cookies.get("b-Id"));

    axios
      .post(
        url + "api/businesses/" + cookies.get("b-Id") + "/contracts",
        {
          subject: contractTopic,
          place_id: contractState,
          the_employer: contractEmployer,
          status: contractCondition,
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
        setData(data);
        gettingAgreementInfoes();
        // router.push("./social");
        toast.success("اطلاعات با موفقیت ثبت شد!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("عملیات انجام نشد لطفا مجددا سعی نمایید!");
        console.log(error.message);
      });
  };
  //Gettin Agreement Infos
  const gettingAgreementInfoes = () => {
    setLoading(true);
    axios
      .get(url + "api/businesses/" + cookies.get("b-Id") + "/contracts", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        var AllDatas = response.data.data;
        console.log(AllDatas);

        setAgreementAllInfos(AllDatas);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error.messagen);
        console.log(token);
      });
  };
  const modalHandler = () => {
    setShowModal(!showModal);
    console.log(agreement_id);
  };
  const deleteAgreement = (e) => {
    e.preventDefault();
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/contracts/" +
          agreement_id,
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
        gettingAgreementInfoes();
        toast.success("مشخصات قرارداد مورد نظر با موفقیت پاک شد!");
      })
      .catch(function (err) {
        toast.error("عملیات انجام نشد. لطفا مجددا سعی فرمایید!");
        console.log(err.message);
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
            <section className="agreement-container max-w-screen-md mx-auto flex justify-center items-center relative z-[9999]">
              <div className="agreement-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[4.5rem]">
                {loading && (
                  <>
                    <span className="ml-2 text-primary">...Loading</span>
                    <div
                      className="spinner-grow text-primary ml-2"
                      role="status"
                    ></div>
                  </>
                )}
                <div className="agreement-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">قراردادها</h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    در این قسمت قراردادهای خود را وارد کنید.
                  </small>
                </div>
                <div className="agreement">
                  <div className="agreement-grid grid grid-cols-12 gap-3">
                    <div className="agreement-input lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        موضوع قرارداد
                      </label>
                      <div className="agreement-input-group input-group mb-3">
                        <input
                          onChange={(e) => setContractTopic(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="موضوع قرارداد"
                        />
                      </div>
                    </div>
                    <div className="agreement-select lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        استان
                      </label>
                      <select
                        onChange={(e) => setContractState(e.target.value)}
                        className="form-select form-select-text-style py-[0.575rem]"
                        aria-label="Default select example"
                      >
                        <option className="IranSanse"> استان</option>
                        {allStates.map(function (place) {
                          return (
                            <option className="IranSanse" value={place.id}>
                              {place.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="agreement-input lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        نام کارفرما
                      </label>
                      <div className="agreement-input-group input-group mb-3">
                        <input
                          onChange={(e) => setContractEmployer(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="نام کارفرما"
                        />
                      </div>
                    </div>
                    <div className="agreement-select lg:col-span-3 col-span-12">
                      <label className="text-sm text-slate-600 px-2 mb-2">
                        وضعیت
                      </label>
                      <select
                        onChange={(e) => setContractCondition(e.target.value)}
                        className="form-select form-select-text-style py-[0.565rem]"
                        aria-label="Default select example"
                      >
                        <option selected className="text-slate-600 text-sm">
                          وضعیت
                        </option>
                        <option
                          className="text-slate-600 text-sm"
                          value="درجریان"
                        >
                          درجریان
                        </option>
                        <option
                          className="text-slate-600 text-sm"
                          value="به اتمام رسیده"
                        >
                          به اتمام رسیده
                        </option>
                        <option className="text-slate-600 text-sm" value="فسخ">
                          فسخ
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="save-btn flex justify-end items-end mt-2">
                    <button
                      onClick={handleSubmitAgreement}
                      className="btn btn-primary"
                      disabled={
                        contractTopic == "" ||
                        contractState == "" ||
                        contractEmployer == "" ||
                        contractCondition == ""
                          ? true
                          : false
                      }
                    >
                      ثبت اطلاعات
                    </button>
                  </div>
                </div>
                <div className="agreement-list-tabele-content mt-5">
                  <div className="agreement-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لیست قراردادها</h5>
                  </div>
                  <table className="agreement-list-tabele table table-bordered rounded-md overflow-hidden mb-8">
                    <thead>
                      <tr className=" bg-slate-100 text-center text-slate-500 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">موضوع قرارداد</th>
                        <th scope="col">استان</th>
                        <th scope="col">نام کارفرما</th>
                        <th scope="col">وضعیت</th>
                        <th scope="col">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agreementAllInfos &&
                        agreementAllInfos.map(function (agreementAllInfo) {
                          return (
                            <tr className="text-center">
                              <th scope="row" className="text-slate-500">
                                {(count = count + 1)}
                              </th>
                              <td>{agreementAllInfo.subject}</td>
                              <td>{agreementAllInfo.place_id}</td>
                              <td>{agreementAllInfo.the_employer}</td>
                              <td>{agreementAllInfo.status}</td>
                              <td
                                onClick={(e) => {
                                  setAgreement_id(agreementAllInfo.id);
                                  console.log(agreementAllInfo.id);
                                  modalHandler();
                                }}
                                className="text-danger"
                              >
                                <i class="bi bi-trash"></i>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>

                  {/* Delete Modal  */}
                  {showModal ? (
                    <Modal
                      delete={deleteAgreement}
                      modalHandler={modalHandler}
                    />
                  ) : null}
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    {loading && (
                      <>
                        <span className="ml-2 text-primary">...Loading</span>
                        <div
                          className="spinner-grow text-primary ml-2"
                          role="status"
                        ></div>
                      </>
                    )}
                    <button
                      id="btnGeneralInfo"
                      name="btnGeneralInfo"
                      onClick={() => {
                        router.push("/marketing/info/social");
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

export default agreement;
