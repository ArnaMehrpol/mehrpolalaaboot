import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AddressModal from "../../../components/AddressModal";
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
    await axios
      .get(url + "api/businesses/" + cookies.get("b-Id", { path: "/" }), {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        if (response) {
          const data = response.data;

          console.log(data);

          setBusinessName(data.name);
          setFoundedYear(data.established_year);
          setLogo(data.logo_file);
          setLogoLink(data.logo_link);

          setExclusiveDomain(data.domain);
          setMehrpolDomain(data.username);
          setEmail(data.email);
        } else {
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
          username: mehrpolDomain,
          domain: exclusiveDomain,
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
          username: mehrpolDomain,
          domain: exclusiveDomain,
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
    console.log(cookies.get("b-Id", { path: "/" }));

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
        const data = response.data.data;
        setAllAddresses(response.data.data);
        setLocationName(data.name);
        setplace_id(data.place_id);

        setDescription(data.description);
        setPostal_code(data.postal_code);
        setTel1(data.tel_1);
        setTel2(data.tel_2);
        setTel1Code(data.tel1Code);
        setTel2Code(data.tel_2_code);

        console.log("آدرس ها رو گرفتم");
      })
      .catch(function (error) {
        console.log("داده ها رو نگرفتم");
        console.log(error.message);
        console.log(cookies.get("b-Id", { path: "/" }));
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
    <div className="zIndex">
      <div className="business-panel-container">
        <div className="business-panel-cols grid grid-cols-12 bg-slate-100 ">
          {/* *********************************************************************** */}
          <div className="business-panel-sidbar lg:col-span-3 col-span-12 my-8">
            <nav className="navbar navbar-business navbar-business-expand-lg navbar-expand-lg">
              <div className="navbar-business-container container-fluid mx-4">
                {/* start Disable it */}
                <div className="top-nav d-flex">
                  <div className="business-logo w-14 h-14 rounded-full bg-white">
                    <Link href="#">
                      <Image
                        src="/../public/assets/img/logos/1.png"
                        width="60px"
                        height="60px"
                        className="w-full h-full rounded-full flex justify-center items-center"
                      ></Image>
                    </Link>
                  </div>
                  <div className="business-name flex flex-col mr-3">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li className="border-b border-slate-200">
                          <Link href="/">
                            <a className="dropdown-item flex" href="#">
                              <Image
                                src="/../public/assets/img/logos/3.png"
                                width="35px"
                                height="35px"
                                className="rounded-full flex justify-center items-center"
                              ></Image>
                              <div className="flex flex-col mr-3">
                                <p className="text-xs font-semibold">
                                  فروشگاه رضا
                                </p>
                                <small className="text-xs">امیر باقری</small>
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li className="border-b border-slate-200">
                          <Link href="/">
                            <a className="dropdown-item flex" href="#">
                              <Image
                                src="/../public/assets/img/logos/1.png"
                                width="35px"
                                height="35px"
                                className="rounded-full flex justify-center items-center"
                              ></Image>
                              <div className="flex flex-col mr-3">
                                <p className="text-xs font-semibold">
                                  فروشگاه رضا
                                </p>
                                <small className="text-xs">امیر باقری</small>
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li className="border-b border-slate-200">
                          <Link href="/">
                            <a className="dropdown-item flex" href="#">
                              <Image
                                src="/../public/assets/img/logos/3.png"
                                width="35px"
                                height="35px"
                                className="rounded-full flex justify-center items-center"
                              ></Image>
                              <div className="flex flex-col mr-3">
                                <p className="text-xs font-semibold">
                                  فروشگاه رضا
                                </p>
                                <small className="text-xs">امیر باقری</small>
                              </div>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p className="text-xs font-semibold py-0.5">
                      فروشگاه شیک نو
                    </p>
                    <small className="text-xs">آرش محمدی </small>
                  </div>
                </div>
                {/* End Disable it */}
                <button
                  className="business-navbar-toggler navbar-toggler custom-toggler bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="bi bi-list"></i>
                </button>
                <div
                  className="business-collapse collapse product-navbar-collapse navbar-collapse w-full mt-4"
                  id="navbarSupportedContent"
                >
                  <div className="business-navbar-nav navbar-nav">
                    <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4 mb-3">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i className="bi bi-person font-semibold text-sm text-white"></i>
                        <Link href="/aa/user-info/generalinfo">
                          <a
                            className="business-nav-link nav-link text-xs text-white mr-1"
                            aria-current="page"
                          >
                            اطلاعات کاربری
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-blue-500 rounded-md relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-4 pr-3">
                        <Link href="/aa/user-info/generalinfo">
                          <a>
                            <p className="text-xs font-semibold">
                              ۱. مشخصات عمومی
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2 pr-3">
                          اطلاعات عمومی صاحب کسب و کار را وارد نمایید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-blue-500 rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-16 pr-3">
                        <Link href="/aa/user-info/info">
                          <a>
                            <p className="text-xs font-semibold">
                              ۲.اطلاعات کسب و کار
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          اطلاعات کسب و کار خود را در این قسمت واردکنید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/aa/user-info/about">
                          <a>
                            <p className="text-xs font-semibold">۳.درباره ما</p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          در این قسمت پیام مدیریت و توضیحات خود را وارد نمایید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-16">
                        <Link href="/aa/user-info/management">
                          <a>
                            <p className="text-xs font-semibold pr-3">
                              ۴.مدیران
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2 pr-3">
                          در این قسمت اطلاعات مربوط به مدیران را وارد کنید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/aa/user-info/agreement">
                          <a>
                            <p className="text-xs font-semibold">۵.قراردادها</p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          در این قسمت قراردادهای خود را وارد نمایید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <div className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </div>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/aa/user-info/social">
                          <a>
                            <p className="text-xs font-semibold">
                              ۶.شبکه های اجتماعی
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          در این قسمت آدرس شبکه های اجتماعی را واردکنید
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* ******************************* */}
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative lg:z-[9999999]">
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
            </header>
            <section className="info-container max-w-screen-md mx-auto flex justify-center items-center relative z-[9999] my-5">
              <div className="info-form bg-white overflow-hidden roundde-lg shadow-md px-5">
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
                </div>
                <div className="domain mt-4">
                  <div className="domain-title flex flex-col mb-2">
                    <h5 className="text-base font-semibold">دامنه</h5>
                    <span className="bg-blue-500 w-7 h-4 rounded-tl rounded-br absolute right-[83px]"></span>
                    <div className="grid grid-cols-6 gap-3">
                      <div className="lg:col-span-3 col-span-6">
                        <small className="text-xs text-slate-400">
                          الف - اگردارای دامنه اختصاصی می باشید ،دامنه خود را
                          ثبت کنید.
                        </small>
                      </div>
                      <div className="lg:col-span-3 col-span-6">
                        <small className="text-xs text-slate-400">
                          ب - استفاده از پیشوند دامنه مهرپل
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="domain-grid grid grid-cols-12 gap-3">
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div className="alls-input-group input-group mb-3">
                        <input
                          onChange={(e) => setExclusiveDomain(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder={
                            exclusiveDomain
                              ? exclusiveDomain
                              : "-------------------.WWW"
                          }
                        />
                      </div>
                    </div>
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
                  </div>
                </div>
                <div className="email mt-2">
                  <div className="email-title flex flex-col mb-2">
                    <h5 className="text-base font-semibold">ایمیل</h5>
                  </div>
                  <div className="email-grid grid grid-cols-12 gap-3">
                    <div className="email-input lg:col-span-6 col-span-12">
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

                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <button
                    id="btnGeneralInfo"
                    name="btnGeneralInfo"
                    onClick={(e) => {
                      router.push("/aa/user-info/about");
                      setLoadingNextLevel(true);
                    }}
                    className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                  >
                    {loadingNextLevel && (
                      <span
                        className="spinner-border spinner-border-sm  ms-1"
                        role="status"
                      ></span>
                    )}
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
