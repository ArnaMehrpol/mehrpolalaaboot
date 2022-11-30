import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AddressModal from "../../../components/AddressModal";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";

const info = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const router = useRouter();

  const [business_id, setBusiness_id] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [logo, setLogo] = useState("");
  const [logoLink, setLogoLink] = useState("");
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [subArea, setSubArea] = useState("");
  const [allAreas, setAllAreas] = useState([]);
  const [subAreas, setSubAreas] = useState([]);
  const [category_id, setCategory_id] = useState(null);
  const [area_id, setArea_id] = useState(null);
  const [subArea_id, setSubArea_id] = useState(null);
  const [exclusiveDomain, setExclusiveDomain] = useState("");
  const [mehrpolDomain, setMehrpolDomain] = useState("");
  const [email, setEmail] = useState("");
  const [locationName, setLocationName] = useState("");
  const [state, setState] = useState(null);
  const [cities, setCities] = useState(null);
  const [locationLat, setLocationLat] = useState(null);
  const [locationLon, setLocationLon] = useState(null);
  const [description, setDescription] = useState("");
  const [postal_code, setPostal_code] = useState(null);
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel1Code, setTel1Code] = useState("");
  const [tel2Code, setTel2Code] = useState("");
  const [allAddresses, setAllAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [regNumber, setRegNumber] = useState("");
  const [economyCode, setEconomyCode] = useState("");
  const [nationalBusinessNumber, setNationalBusinessNumber] = useState("");

  const [allStates, setallStates] = useState([]);
  const [allCities, setallCities] = useState([]);
  const [place_id, setplace_id] = useState("");

  const [loadingSubmitInfo, setLoadingSubmitInfo] = useState(false);
  const [loadingUpdateInfo, setLoadingUpdateInfo] = useState(false);
  const [loadingAddress, setLoadingAddress] = useState(false);

  const [loadingNextLevel, setLoadingNextLevel] = useState(false);

  const [showAddressModal, setShowAddressModal] = useState(false);

  const [addressId, setAddressId] = useState(null);

  const [token, setToken] = useState("");
  const cookies = new Cookies();

  const logoHandler = (files) => {
    setLogo(files[0]);
  };

  //Delete Address
  const handelDelete = (addressId) => {
    // e.preventDefault();
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
          },
        }
      )
      .then(function (response) {
        toast.success("آدرس مورد نظر با موفقیت پاک شد!");
        gettingAddresses();
      })
      .catch(function (error) {
        toast.error("حذف آدرس با مشکل مواجه شد!");
        console.log(error.message);
      });
  };

  //AddressModal
  const modalHandler = (e) => {
    setShowAddressModal(!showAddressModal);
  };
  //Cookie
  const bId = () => {
    setBusiness_id(cookies.get("b-Id"));
    console.log("got it!");
  };
  //ُState & City

  const getStates = async () => {
    var response = await axios.get(url + "api/public/place?type=state");
    var places = response.data.place;
    setallStates(places);
  };

  const getStateChildren = async (id, callback = function (data) {}) => {
    var response = await axios.get(
      url + "api/public/place?type=city&parent_id=" + id
    );

    var places = response.data.place;

    setallCities(places);
    callback(places);
  };

  //*********************************************** */
  //ُCategories

  const getCategories = async () => {
    var response = await axios.get(url + "api/public/categories");

    var places = response.data;
    setAllCategories(places);
  };

  const getCategoryChildren = async (id, callback = function (data) {}) => {
    var response = await axios.get(
      url + "api/public/categories?parent_id=" + id
    );

    var places = response.data;

    setAllAreas(places);
    callback(places);
  };
  const getCategoryChildren2 = async (id, callback = function (data) {}) => {
    var response = await axios.get(
      url + "api/public/categories?parent_id=" + id
    );

    var places2 = response.data;

    setSubAreas(places2);
    callback(places2);
  };

  //*********************************************** */
  //Gettin generalInfos
  const gettingInfos = async () => {
    setLoading(true);
    await axios
      .get(url + "api/businesses/" + cookies.get("b-Id", { path: "/" }), {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        setLoading(false);
        if (response) {
          const data = response.data;

          console.log(data);

          setBusinessName(data.name);
          setFoundedYear(data.established_year);
          setLogo(data.logo_file);
          setLogoLink(data.logo_link);
          // setCategory_id(data.id);
          // setArea_id("");
          // setSubArea_id("");
          // setExclusiveDomain(data.domain);
          setRegNumber(data.regNumber);
          setEconomyCode(data.economyCode);
          setNationalBusinessNumber(data.nationalBusinessNumber);
          setMehrpolDomain(data.username);
          setEmail(data.email);
          // setBusiness_id(data.business_id);
        } else {
          setLoading(false);
          toast.error("هنوز کسب و کاری ثبت نشده است");
        }
      });
  };

  //Categories &
  //Submit
  const handleSubmitInfo = (e) => {
    e.preventDefault();
    setLoadingSubmitInfo(true);
    axios
      .post(
        url + "api/businesses",
        {
          name: businessName,
          established_year: foundedYear,
          logo: logo,
          parent_id: subArea,
          // domain: exclusiveDomain,
          regNumber: regNumber,
          economyCode: economyCode,
          nationalBusinessNumber: nationalBusinessNumber,
          username: mehrpolDomain,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        setLoadingSubmitInfo(false);
        const data = response.data;
        setBusiness_id(data.business.id);
        cookies.set("b-Id", data.business.id, { path: "/" });
        toast.success("اطلاعات با موفقیت ثبت شد!");
        gettingInfos();
      })

      .catch((error) => {
        setLoadingSubmitInfo(false);
        toast.error("ثبت اطلاعات با مشکل مواجه شد!");
        console.log(error.message);
      });
  };
  //End Submit
  //Update
  const handelUpdateInfos = (e) => {
    e.preventDefault();
    setLoadingUpdateInfo(true);
    axios
      .post(
        url + "api/businesses/" + business_id,
        {
          _method: "PUT",
          name: businessName,
          established_year: foundedYear,
          logo: logo,
          parent_id: subArea,
          // domain: exclusiveDomain,
          regNumber: regNumber,
          economyCode: economyCode,
          nationalBusinessNumber: nationalBusinessNumber,
          username: mehrpolDomain,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        toast.success("بروز رسانی اطلاعات با موفقیت انجام شد!");
        setLoadingUpdateInfo(false);
        gettingInfos();
      })

      .catch((error) => {
        toast.error("بروز رسانی اطلاعات با مشکل مواجه شد!");
        setLoadingUpdateInfo(false);
        console.log(error.message);
      });
  };
  // End Update
  const handleSubmitBusinessAddress = (e) => {
    e.preventDefault();
    setLoadingAddress(true);
    console.log(business_id);
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id", { path: "/" }) +
          "/addresses",
        {
          name: locationName,
          place_id: place_id,
          latitude: locationLat,
          longitude: locationLon,
          description: description,
          postal_code: postal_code,
          tel_1: tel1,
          tel_2: tel2,
          tel_2_code: tel1Code,
          tel_2_code: tel2Code,
          business_id: business_id,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        setLoadingAddress(false);
        gettingAddresses();
        toast.success("آدرس با موفقیت ثبت شد!");

        setplace_id("");
        setLocationName("");
        setDescription("");
        setPostal_code("");
        setTel1("");
        setTel2("");
        setTel1Code("");
        setTel2Code("");
      })
      .catch(function (error) {
        setLoadingAddress(false);
        toast.error("ثبت اطلاعات با مشکل مواجه گردید!");
        console.log(error.message);
      });
  };

  //Show Addresses
  const gettingAddresses = (e) => {
    setLoading(true);
    axios
      .get(
        url +
          "api/businesses/" +
          cookies.get("b-Id", { path: "/" }) +
          "/addresses",

        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        setLoading(false);
        const data = response.data.data;
        setAllAddresses(response.data.data);
        setLocationName(data.name);
        setplace_id(data.place_id);
        // setLocationLat(latitude);
        // setLocationLon(longitude);
        setDescription(data.description);
        setPostal_code(data.postal_code);
        setTel1(data.tel_1);
        setTel2(data.tel_2);
        setTel1Code(data.tel1Code);
        setTel2Code(data.tel_2_code);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error.message);
      });
  };

  //useEffect
  useEffect(() => {
    getStates();
    getCategories();
    gettingInfos();
    gettingAddresses();
    bId();
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
            <section className="info-container max-w-screen-md mx-auto flex justify-center items-center relative  my-5">
              <div className="info-form bg-white overflow-hidden roundde-lg shadow-md px-5">
                {loading && (
                  <>
                    <span className="ml-2 text-primary">...Loading</span>
                    <div
                      className="spinner-grow text-primary ml-2"
                      role="status"
                    ></div>
                  </>
                )}
                <div className="info-title flex flex-col my-4">
                  <h5 className="text-base font-semibold text-slate-600">
                    اطلاعات کسب و کار
                  </h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    اطلاعات کسب و کار خود را در این قسمت وارد کنید{" "}
                  </small>
                </div>
                <div className="info">
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام کسب و کار
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setBusinessName(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder={
                            businessName ? businessName : "نام کسب و کار"
                          }
                        />
                      </div>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        سال تاسیس
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setFoundedYear(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder={foundedYear ? foundedYear : "سال تاسیس"}
                        />
                      </div>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        بارگذاری لوگو
                      </label>
                      <div className="all-input-group input-group">
                        <input
                          onChange={(e) => logoHandler(e.target.value)}
                          type="file"
                          id="formFile"
                          className="form-control info-form-control"
                          lang="fa"
                          placeholder={logo ? logo : "بارگذاری لوگو"}
                        />
                      </div>
                    </div>
                  </div>
                  {/* *********************** 111111111111111111 */}
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        دسته کسب و کار
                      </label>
                      <select
                        onChange={(e) => getCategoryChildren(e.target.value)}
                        className="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>دسته را انتخاب کنید</option>
                        {allCategories.map((category) => {
                          return (
                            <option
                              className="text-slate-400 text-sm"
                              value={category.id}
                            >
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        حوزه کسب و کار
                      </label>
                      <select
                        onChange={(e) => {
                          getCategoryChildren2(e.target.value);
                        }}
                        className="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>حوزه را انتخاب کنید</option>
                        {allAreas.map(function (area) {
                          return (
                            <option className="IranSanse" value={area.id}>
                              {area.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        شاخه کسب و کار
                      </label>
                      <select
                        onChange={(e) => setSubArea(e.target.value)}
                        className="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>شاخه را انتخاب کنید</option>
                        {subAreas.map(function (subArea) {
                          return (
                            <option
                              className="text-slate-400 text-sm"
                              value={subArea.id}
                            >
                              {subArea.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  {/* ************* 11111111111111111 */}
                  {/* *************** 222222222222222 */}
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12 ">
                      <label className="text-sm text-slate-700 px-2 mt-3">
                        شماره ثبت / پروانه کسب
                      </label>
                      <input
                        onChange={(e) => setRegNumber(e.target.value)}
                        placeholder={
                          regNumber ? regNumber : "شماره ثبت را وارد فرمایید"
                        }
                        type="text"
                        className=" form-control text-xs myColor"
                      />
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mt-3">
                        کد اقتصادی
                      </label>
                      <input
                        onChange={(e) =>
                          setNationalBusinessNumber(e.target.value)
                        }
                        placeholder={
                          nationalBusinessNumber
                            ? nationalBusinessNumber
                            : "شناسه ملی کسب و کار"
                        }
                        type="text"
                        className="form-control text-xs myColor "
                      />
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mt-3">
                        شناسه ملی کسب و کار
                      </label>
                      <input
                        onChange={(e) => setEconomyCode(e.target.value)}
                        placeholder={
                          economyCode
                            ? economyCode
                            : "کد اقتصادی را وارد فرمایید"
                        }
                        type="text"
                        className="form-control text-xs myColor"
                      />
                    </div>
                  </div>
                  {/* *************** 222222222222222 */}
                </div>
                <div className="domain mt-4">
                  <div className="domain-title flex flex-col mb-2">
                    <div className="grid grid-cols-6 gap-3">
                      <div className="lg:col-span-3 col-span-6">
                        <small className="">
                          نام کسب و کار خود را به انگلیسی وارد نمایید
                        </small>
                      </div>
                      <div className="lg:col-span-3 col-span-6">
                        <small className="">E-Mail</small>
                      </div>
                    </div>
                  </div>
                  <div className="domain-grid grid grid-cols-12 gap-3">
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div className="alls-input-group input-group mb-3">
                        <input
                          onChange={(e) => setMehrpolDomain(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder={
                            mehrpolDomain
                              ? mehrpolDomain
                              : "/----WWW.MEHRPOL.COM"
                          }
                        />
                      </div>
                    </div>
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div className="alls-input-group input-group mb-3">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          placeholder={
                            email ? email : "Ex: mehrpol@mehrpol.com"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email mt-2">
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <button
                      id="btnGeneralInfo"
                      name="btnGeneralInfo"
                      onClick={handelUpdateInfos}
                      className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    >
                      {loadingUpdateInfo && (
                        <span
                          className="spinner-border spinner-border-sm  ms-1"
                          role="status"
                        ></span>
                      )}
                      بروز رسانی اطلاعات
                    </button>
                    <button
                      id="btnGeneralInfo"
                      name="btnGeneralInfo"
                      onClick={handleSubmitInfo}
                      className=" me-2 text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    >
                      {loadingSubmitInfo && (
                        <span
                          className="spinner-border spinner-border-sm  ms-1"
                          role="status"
                        ></span>
                      )}
                      ثبت اطلاعات
                    </button>
                  </div>
                </div>
                <div className="panel-address mt-2">
                  <div className="panel-address-title flex flex-col mb-2">
                    <h5 className="text-base font-semibold">آدرس</h5>
                  </div>
                  <div className="panel-address-grid grid grid-cols-12 gap-3 mb-3">
                    <div className="panel-address-input lg:col-span-4 col-span-12">
                      <select
                        id="locationName"
                        onChange={(e) => setLocationName(e.target.value)}
                        className="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>کارخانه ، دفتر مرکزی ...</option>
                        <option
                          className="text-slate-400 text-sm"
                          value="دفتر مرکزی"
                        >
                          دفتر مرکزی
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="کارخانه"
                        >
                          کارخانه
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="شعبات"
                        >
                          شعبات
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="نمایندگی ها"
                        >
                          نمایندگی ها
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="فروشگاه"
                        >
                          فروشگاه
                        </option>
                      </select>
                    </div>
                    <div className="panel-address-input lg:col-span-2 col-span-12">
                      <select
                        id="states"
                        onChange={(e) => {
                          getStateChildren(e.target.value);
                        }}
                        className="form-select form-select-text-style py-[0.675rem]"
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
                    <div className="panel-address-input lg:col-span-2 col-span-12">
                      <select
                        className="form-select form-select-text-style py-[0.675rem]"
                        id="city_option"
                        onChange={(e) => {
                          // setcity(e.target.value);
                          setplace_id(e.target.value);
                        }}
                      >
                        <option id="city" className="IranSanse">
                          شهر
                        </option>
                        {allCities.map(function (place) {
                          return (
                            <option className="IranSanse" value={place.id}>
                              {place.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="panel-address-btn lg:col-span-4 col-span-12 border border-slate-500 overflow-hidden rounded-md">
                      <Link href="/">
                        <a
                          className="h-full panel-address-link rounded-md flex items-center justify-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <span className="text-xs text-slate-400">
                            ثبت موقعیت مکانی روی نقشه
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 mx-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="panel-address-grid grid grid-cols-12 gap-3">
                    <div className="panel-address-input lg:col-span-9 col-span-12">
                      <div className="panel-address-input-group input-group mb-3">
                        <input
                          id="description"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="آدرس پستی"
                        />
                      </div>
                    </div>
                    <div className="panel-code-input lg:col-span-3 col-span-12">
                      <div className="panel-code-input-group input-group mb-3">
                        <input
                          id="postal_code"
                          onChange={(e) => {
                            setPostal_code(e.target.value);
                          }}
                          type="number"
                          className="form-control"
                          placeholder="کدپستی"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********* Phone ********** */}
                <div className="panel-phone-grid grid grid-cols-12 gap-5 mb-3">
                  <div className="lg:col-span-5 col-span-12 gap-3 flex">
                    <div className="panel-phone-input lg:col-span-3 col-span-5">
                      <div className="all-input-group input-group">
                        <input
                          id="tel_1"
                          onChange={(e) => {
                            setTel1(e.target.value);
                          }}
                          type="number"
                          className="form-control"
                          placeholder="تلفن اول ..."
                        />
                      </div>
                    </div>
                    <div className="panel-phone-input lg:col-span-3 col-span-5">
                      <div className="all-input-group input-group">
                        <input
                          id="tel_1_code"
                          onChange={(e) => {
                            setTel1Code(e.target.value);
                          }}
                          type="number"
                          className="form-control"
                          placeholder="کد تلفن اول..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 col-span-12 gap-3 flex">
                    <div className="panel-phone-input lg:col-span-3 col-span-5">
                      <div className="all-input-group input-group">
                        <input
                          id="tel_2"
                          onChange={(e) => {
                            setTel2(e.target.value);
                          }}
                          type="number"
                          className="form-control"
                          placeholder="تلفن دوم..."
                        />
                      </div>
                    </div>
                    <div className="panel-phone-input lg:col-span-3 col-span-5">
                      <div className="all-input-group input-group">
                        <input
                          id="tel_2_code"
                          onChange={(e) => {
                            setTel2Code(e.target.value);
                          }}
                          type="number"
                          className="form-control"
                          placeholder="کد تلفن دوم..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* *********** End Phone *********** */}

                <div className="col-span-7 flex lg:mr-auto lg:mt-0 -mt-8">
                  <div className="lg:col-span-2 col-span-3 ml-3">
                    <div className="save-btn flex justify-end items-end mt-2">
                      <button
                        id="btnGeneralInfo"
                        name="btnGeneralInfo"
                        onClick={handleSubmitBusinessAddress}
                        className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                      >
                        {loadingAddress && (
                          <span
                            className="spinner-border spinner-border-sm  ms-1"
                            role="status"
                          ></span>
                        )}
                        ثبت آدرس
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-3 ">
                    <div className="save-btn flex justify-end items-end mt-2">
                      <button
                        type="button"
                        className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                        onClick={(e) => {
                          setShowAddressModal(!showAddressModal);
                          gettingAddresses();
                        }}
                      >
                        نمایش آدرس
                      </button>

                      {showAddressModal ? (
                        <AddressModal
                          modalHandler={modalHandler}
                          allAddresses={allAddresses}
                          handelDelete={handelDelete}
                          gettingAddresses={gettingAddresses}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="lg:col-span-3 col-span-1"></div>
                </div>
                <button
                  onClick={() => setLoading(true)}
                  className="btn btn-warning"
                >
                  Do it
                </button>

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
                    onClick={(e) => {
                      router.push("/marketing/info/aboutUs");
                      setLoadingNextLevel(true);
                    }}
                    className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                  >
                    مرحله بعد
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
