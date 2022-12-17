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
import Modal from "../../../components/Modal";

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
  const [aria, setAria] = useState("");
  const [subArea, setSubArea] = useState("");
  const [allAreas, setAllAreas] = useState([]);
  const [subAreas, setSubAreas] = useState([]);
  const [category_id, setCategory_id] = useState([]);
  const [area_id, setArea_id] = useState([]);
  const [subArea_id, setSubArea_id] = useState([]);
  const [areaAndSubarea, setAreaAndSubarea] = useState([]);

  const [addressState, setAddressState] = useState("");

  const [showModal, setShowModal] = useState(false);
  // const [exclusiveDomain, setExclusiveDomain] = useState("");
  const [username, setUsername] = useState("");
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
  // const [tel1Code, setTel1Code] = useState("");
  const [tel2Code, setTel2Code] = useState("");
  const [allAddresses, setAllAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [account_number, setAccount_number] = useState("");
  const [sheba_number, setSheba_number] = useState("");

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
  const [disabled, setDisabled] = useState(false);

  const [token, setToken] = useState("");
  const cookies = new Cookies();

  const areaAndSubAreaFunc = () => {
    setAreaAndSubarea([8, 5]);
  };

  const logoHandler = (files) => {
    setLogo(files[0]);
  };
  console.log(logo);
  //Delete Address

  const handelDelete = (e) => {
    console.log("اینحا");
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
          },
        }
      )
      .then(function (response) {
        toast.success("آدرس مورد نظر با موفقیت پاک شد");
        gettingAddresses();
        modalHandler();
      })
      .catch(function (error) {
        toast.error("حذف آدرس با مشکل مواجه شد");
        console.log(error.message);
        modalHandler();
      });
  };

  // ****************************************
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  // *****************************************
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
    setCategory_id(id);
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

          setBusinessName(data.name);
          setFoundedYear(data.established_year);
          setLogo(data.logo);
          setLogoLink(data.logo_link);
          setCategory(data.category);
          setCategory_id(data.id);
          setArea_id(data.category_id);
          setSubArea_id("");

          setRegNumber(data.reg_number);
          setEconomyCode(data.economy_code);
          setNationalBusinessNumber(data.national_business_number);
          setUsername(data.username);
          setEmail(data.email);
          setAccount_number(data.account_number);
          setSheba_number(data.sheba_number);
        } else {
          setLoading(false);
          toast.error("هنوز کسب و کاری ثبت نشده است");
        }
      });
  };

  //setArea
  const settingarea = (category_id) => {
    axios
      .get(url + "api/public/categories?parent_id=" + category_id)
      .then(function (response) {
        var theArea = response.data.category;
        setAria(theArea);
      });
  };

  //setSubArea
  const settingSubarea = (category_id) => {
    axios
      .get(url + "api/public/categories?parent_id=" + category_id)
      .then(function (response) {
        var theArea = response.data.category;
        setAria(theArea);
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
          category: category,
          category_id: JSON.stringify([Number(subArea_id), Number(area_id)]), // areaAndSubarea,
          reg_number: regNumber,
          economy_code: economyCode,
          national_business_number: nationalBusinessNumber,
          username: username,
          email: email,
          account_number: account_number,
          sheba_number: sheba_number,
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
        if (response.status === 200 || response.status === 201) {
          setBusiness_id(data.business.id);
          cookies.set("b-Id", data.business.id, { path: "/" });
          toast.success("اطلاعات با موفقیت ثبت شد");
        }
      })
      .catch((error) => {
        setLoadingSubmitInfo(false);
        toast.error("ثبت اطلاعات با مشکل مواجه شد");
        console.log(error.message);
      });
  };
  //End Submit
  //Update
  // const handelUpdateInfos = (e) => {
  //   e.preventDefault();
  //   setLoadingUpdateInfo(true);
  //   axios
  //     .post(
  //       url + "api/businesses/" + business_id,
  //       {
  //         _method: "PUT",
  //         name: businessName,
  //         established_year: foundedYear,
  //         logo: logo,
  //         parent_id: subArea,
  //         // domain: exclusiveDomain,
  //         regNumber: regNumber,
  //         economyCode: economyCode,
  //         nationalBusinessNumber: nationalBusinessNumber,
  //         username: username,
  //         email: email,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${cookies.get("token")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       toast.success("بروز رسانی اطلاعات با موفقیت انجام شد");
  //       setLoadingUpdateInfo(false);
  //       gettingInfos();
  //     })

  //     .catch((error) => {
  //       toast.error("بروز رسانی اطلاعات با مشکل مواجه شد");
  //       setLoadingUpdateInfo(false);
  //       console.log(error.message);
  //     });
  // };
  // End Update
  const handleSubmitBusinessAddress = (e) => {
    if (locationName == "") {
      document.getElementById("locationName").style.borderBlockColor = "red";
      toast.error("لطفا محل را انتخاب نمایید");
      return false;
    }
    if (addressState == "") {
      document.getElementById("addressState").style.borderBlockColor = "red";
      toast.error("لطفا استان را انتخاب نمایید");
      return false;
    }
    if (place_id == "") {
      document.getElementById("city_option").style.borderBlockColor = "red";
      toast.error("لطفا شهر را انتخاب نمایید");
      return false;
    }
    if (description == "") {
      document.getElementById("description").style.borderBlockColor = "red";
      toast.error("لطفا آدرس پستی را پر نمایید");
      return false;
    }
    if (postal_code == null) {
      document.getElementById("postal_code").style.borderBlockColor = "red";
      toast.error("لطفا کد پستی را پر نمایید");
      return false;
    }
    if (tel1 == "") {
      document.getElementById("tel1").style.borderBlockColor = "red";
      toast.error("لطفا تلفن اول را پر نمایید");
      return false;
    }
    // if (tel1Code == "") {
    //   document.getElementById("tel1Code").style.borderBlockColor = "red";
    //   toast.error("لطفا تلفن کداول را پر نمایید");
    //   return false;
    // }
    if (tel2 == "") {
      document.getElementById("tel2").style.borderBlockColor = "red";
      toast.error("لطفا تلفن دوم را پر نمایید");
      return false;
    }
    if (tel2Code == "") {
      document.getElementById("tel2Code").style.borderBlockColor = "red";
      toast.error("لطفا کد تلفن دوم را پر نمایید");
      return false;
    }

    e.preventDefault();
    setLoadingAddress(true);
    gettingAddresses();
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
          // tel_1_code: tel1Code,
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
        toast.success("آدرس با موفقیت ثبت شد");

        setplace_id("");
        setLocationName("");
        setDescription("");
        setPostal_code("");
        setTel1("");
        setTel2("");
        // setTel1Code("");
        setTel2Code("");
      })
      .catch(function (error) {
        setLoadingAddress(false);
        toast.error("ثبت اطلاعات با مشکل مواجه گردید");
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
        if (data === []) {
          setDisabled(true);
        }

        setAllAddresses(response.data.data);
        console.log("اینحا");
        console.log(allAddresses);
        setLocationName(response.data.data.name);
        setplace_id(response.data.data.place_id);
        // setLocationLat(latitude);
        // setLocationLon(longitude);
        setDescription(response.data.data.description);
        setPostal_code(response.data.data.postal_code);
        setTel1(response.data.data.tel_1);
        setTel2(response.data.data.tel_2);
        // setTel1Code(response.data.data.tel1Code);
        setTel2Code(response.data.data.tel_2_code);
        setAddressId(response.data.data.id);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error.message);
      });
  };
  // const deleteAddress = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       url +
  //         "api/businesses/" +
  //         cookies.get("b-Id") +
  //         "/addresses/" +
  //         addressId,
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
  //       modalHandler();
  //       gettingManagerInfoes();
  //       toast.success("مشخصات مدیر مورد نظر با موفقیت پاک شد");
  //     })
  //     .catch(function (err) {
  //       toast.error("عملیات انجام نشد. لطفا مجددا سعی فرمایید");
  //       console.log(err.message);
  //     });
  // };

  //useEffect
  useEffect(() => {
    getStates();
    getCategories();
    gettingInfos();
    gettingAddresses();
    bId();
    settingarea();
    settingSubarea();
  }, []);
  return (
    <div className="mx-auto">
      {/* Delete Modal  */}
      {showModal ? (
        <Modal delete={handelDelete} modalHandler={modalHandler} />
      ) : null}
      {/* ********************************************************** */}
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
                    <span className="ml-2 text-primary">...بارگذاری</span>
                    <div
                      className="spinner-border text-primary ml-2"
                      role="status"
                    ></div>
                  </>
                )}
                <div className="info-title flex flex-col my-4">
                  <h5 className="text-base font-semibold text-slate-600">
                    اطلاعات کسب و کار
                  </h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    اطلاعات کسب و کار خود را در این قسمت وارد کنید
                  </small>
                </div>
                <div className="info">
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام کسب و کار
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          id="businessName"
                          onChange={(e) => {
                            setBusinessName(e.target.value);
                          }}
                          type="text"
                          className="form-control text-sm myColor"
                          value={businessName && businessName}
                          placeholder={"نام کسب و کار"}
                        />
                      </div>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        سال تاسیس
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          id="foundedYear"
                          onChange={(e) => {
                            setFoundedYear(e.target.value);
                            document.getElementById(
                              "foundedYear"
                            ).style.borderBlockColor = "white";
                          }}
                          type="number"
                          className="form-control text-sm myColor"
                          value={foundedYear && foundedYear}
                          placeholder={"سال تاسیس"}
                        />
                      </div>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        بارگذاری لوگو
                      </label>
                      <div className="all-input-group input-group">
                        <input
                          id="logoHandler"
                          onChange={(e) => {
                            logoHandler(e.target.value);
                          }}
                          type="file"
                          className="form-control info-form-control myColor"
                          lang="fa"
                          placeholder={logo ? logo : "بارگذاری لوگو"}
                        />
                      </div>
                    </div>
                  </div>
                  {/* *********************** 111111111111111111 */}
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        دسته کسب و کار
                      </label>
                      <select
                        id="category"
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="form-select text-sm myColor form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        {category ? (
                          <option selected>{category}</option>
                        ) : (
                          <option selected>دسته را انتخاب کنید</option>
                        )}
                        {/* <option selected>دسته را انتخاب کنید</option> */}
                        <option className="myColor text-sm" value="productive">
                          تولیدی
                        </option>
                        <option className="myColor text-sm" value="store">
                          فروشگاه
                        </option>
                        {/* <option className="myColor text-sm" value="3">
                          پیمانکاری
                        </option> */}
                        <option className="myColor text-sm" value="supplier">
                          تامین کننده
                        </option>
                        {/* <option className="myColor text-sm" value="5">
                          خدمات
                        </option> */}
                      </select>
                    </div>
                    {/* ******************************************** */}
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        حوزه کسب و کار
                      </label>
                      {/* *************************** */}
                      <select
                        id="area"
                        onChange={(e) => {
                          getCategoryChildren(e.target.value);
                          setArea_id(e.target.value);
                          areaAndSubAreaFunc();
                        }}
                        className="form-select form-select-text-style text-sm myColor py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        {aria ? (
                          <option selected>{area}</option>
                        ) : (
                          <option selected>حوزه را انتخاب کنید</option>
                        )}
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
                      {/* *************************** */}
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className=" px-2 mb-2">شاخه کسب و کار</label>
                      <select
                        id="subAria"
                        onChange={(e) => {
                          getCategoryChildren2(e.target.value);
                          setSubArea_id(e.target.value);
                          areaAndSubAreaFunc();
                        }}
                        className="form-select form-select-text-style text-sm myColor py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        {subArea ? (
                          <option selected>{subArea}</option>
                        ) : (
                          <option selected>شاخه را انتخاب کنید</option>
                        )}
                        {allAreas.map(function (area) {
                          return (
                            <>
                              {/* <input type="checkbox" value={area.id} /> */}
                              <option className="IranSanse" value={area.id}>
                                {area.name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12 ">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mt-3">
                        شماره ثبت / پروانه کسب
                      </label>
                      <input
                        id="regNumber"
                        onChange={(e) => {
                          setRegNumber(e.target.value);
                        }}
                        value={regNumber && regNumber}
                        placeholder="شماره ثبت را وارد فرمایید"
                        type="text"
                        className=" form-control text-xs myColor h-[38px]"
                      />
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mt-3">
                        کد اقتصادی
                      </label>
                      <input
                        id="economyCode"
                        onChange={(e) => {
                          setEconomyCode(e.target.value);
                          document.getElementById(
                            "economyCode"
                          ).style.borderBlockColor = "white";
                        }}
                        value={economyCode && economyCode}
                        placeholder={"کد اقتصادی را وارد فرمایید"}
                        type="text"
                        className="form-control text-xs h-[38px] myColor "
                      />
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mt-3">
                        شناسه ملی کسب و کار
                      </label>
                      <input
                        id="nationalBusinessNumber"
                        onChange={(e) => {
                          setNationalBusinessNumber(e.target.value);
                        }}
                        value={nationalBusinessNumber && nationalBusinessNumber}
                        placeholder="شناسه ملی کسب و کار"
                        type="text"
                        className="form-control text-xs h-[38px]  myColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="domain mt-4">
                  <div className="domain-title flex flex-col mb-2">
                    <div className="grid grid-cols-6 gap-3">
                      <div className="lg:col-span-3 col-span-6">
                        <sup className="text-danger">*</sup>
                        <small className="">
                          نام کسب و کار خود را به انگلیسی وارد نمایید
                        </small>
                      </div>
                      <div className="lg:col-span-3 col-span-6">
                        <small className="">پست الکترونیک</small>
                      </div>
                    </div>
                  </div>
                  <div className="domain-grid grid grid-cols-12 gap-3">
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div className="alls-input-group input-group mb-3">
                        <input
                          id="username"
                          onChange={(e) => {
                            setUsername(e.target.value);
                            document.getElementById(
                              "username"
                            ).style.borderBlockColor = "white";
                          }}
                          type="text"
                          className="form-control text-sm myColor"
                          value={username && username}
                          placeholder={" مثال: mehrpol "}
                        />
                      </div>
                    </div>
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div className="alls-input-group input-group mb-3">
                        <input
                          id="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                            document.getElementById(
                              "email"
                            ).style.borderBlockColor = "white";
                          }}
                          type="email"
                          className="form-control text-sm myColor"
                          value={email && email}
                          placeholder={"مثال: mehrpol@mehrpol.com"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ******************************** */}
                <div className="generalinfo-grid grid grid-cols-12 gap-3">
                  <div className="generalinfo-input lg:col-span-6 col-span-12">
                    <sup className="text-danger">*</sup>
                    <label className="text-sm text-slate-700 px-2 mb-2">
                      حساب بانکی
                    </label>
                    <div className="all-input-group input-group mb-3">
                      <input
                        id="account_number"
                        onChange={(e) => {
                          setAccount_number(e.target.value);
                        }}
                        type="number"
                        className="form-control text-sm myColor"
                        value={account_number && account_number}
                        placeholder={"شماره حساب"}
                      />
                    </div>
                  </div>
                  <div className="generalinfo-input lg:col-span-6 col-span-12">
                    <div className="generalinfo-input lg:col-span-6 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        شماره شبا
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          id="sheba_number"
                          onChange={(e) => {
                            setSheba_number(e.target.value);
                          }}
                          type="number"
                          className="form-control text-sm myColor"
                          value={sheba_number && sheba_number}
                          placeholder={"شماره شبا"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ******************************** */}
                <div className="generalinfo-text my-3">
                  <p className="text-xs text-slate-600 text-justify">
                    این شماره صرفا برای واریز مبالغ دریافتی بابت فروش و برگشتی
                    استفاده می شود و از نظر مهر پل به عنوان حساب مرجع شناخته می
                    شود.
                  </p>
                </div>

                <div className="email mt-2">
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    {/* <button
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
                    </button> */}
                    <button
                      id="btnGeneralInfo"
                      // disabled={
                      //   businessName == "" ||
                      //   foundedYear == "" ||
                      //   logo == null ||
                      //   // category == "" ||
                      //   // area == "" ||
                      //   regNumber == null ||
                      //   economyCode == null ||
                      //   nationalBusinessNumber == null ||
                      //   username == null ||
                      //   email == null ||
                      //   account_number == null ||
                      //   sheba_number == null
                      //     ? true
                      //     : ""
                      // }
                      name="btnGeneralInfo"
                      onClick={handleSubmitInfo}
                      className=" me-2 text-white myButton text-[12px] px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    >
                      {loadingSubmitInfo && (
                        <span
                          className="spinner-border spinner-border-sm text-sm  ms-1"
                          role="status"
                        ></span>
                      )}
                      ثبت اطلاعات
                    </button>
                  </div>
                </div>
                <div className="panel-address mt-2">
                  <div className="panel-address-title flex flex-col mb-2">
                    <sup className="text-danger">*</sup>
                    <h5 className="text-base font-semibold">آدرس</h5>
                  </div>
                  <div className="flex justify-between mb-2">
                    {/* <div className="panel-address-grid grid grid-cols-12 gap-3 mb-3 "> */}
                    <div className="panel-address-input lg:col-span-4 col-span-12 w-[200px]">
                      <select
                        id="locationName"
                        onChange={(e) => {
                          setLocationName(e.target.value);
                          document.getElementById(
                            "locationName"
                          ).style.borderBlockColor = "white";
                        }}
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
                        <option className="text-slate-400 text-sm" value="شعبه">
                          شعبه
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="نمایندگی"
                        >
                          نمایندگی
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="فروشگاه"
                        >
                          فروشگاه
                        </option>
                      </select>
                    </div>
                    <div className="panel-address-input  lg:col-span-2 col-span-12 w-[200px]">
                      <select
                        id="addressState"
                        onChange={(e) => {
                          getStateChildren(e.target.value);
                          setAddressState(e.target.value);
                          document.getElementById(
                            "addressState"
                          ).style.borderBlockColor = "white";
                        }}
                        className="form-select form-select-text-style py-[0.675rem] "
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
                    <div className="panel-address-input lg:col-span-2 col-span-12 w-[200px] mr-1">
                      <select
                        className="form-select form-select-text-style py-[0.675rem]"
                        id="city_option"
                        onChange={(e) => {
                          // setcity(e.target.value);
                          setplace_id(e.target.value);
                          document.getElementById(
                            "city_option"
                          ).style.borderBlockColor = "white";
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
                    {/* <div className="panel-address-btn lg:col-span-4 col-span-12 border border-slate-500 overflow-hidden rounded-md"> */}
                    {/* <Link href="/">
                        <a
                          className="h-full panel-address-link rounded-md flex items-center justify-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          disabled
                        >
                          <span disabled className="text-xs text-slate-400">
                            ثبت موقعیت مکانی روی نقشه
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 mx-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            disabled
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </a>
                      </Link> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                  <div className="panel-address-grid grid grid-cols-12 gap-3">
                    <div className="panel-address-input lg:col-span-9 col-span-12">
                      <div className="panel-address-input-group input-group mb-3">
                        <input
                          id="description"
                          onChange={(e) => {
                            setDescription(e.target.value);
                            document.getElementById(
                              "description"
                            ).style.borderBlockColor = "white";
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
                            document.getElementById(
                              "postal_code"
                            ).style.borderBlockColor = "white";
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
                      <div className="all-input-group input-group ">
                        <input
                          id="tel1"
                          onChange={(e) => {
                            setTel1(e.target.value);
                            document.getElementById(
                              "tel1"
                            ).style.borderBlockColor = "white";
                          }}
                          type="number"
                          className="form-control "
                          placeholder="تلفن اول ..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 col-span-12 gap-3 flex">
                    <div className="panel-phone-input lg:col-span-3 col-span-5">
                      <div className="all-input-group input-group">
                        <input
                          id="tel2"
                          onChange={(e) => {
                            setTel2(e.target.value);
                            document.getElementById(
                              "tel2"
                            ).style.borderBlockColor = "white";
                          }}
                          type="number"
                          className="form-control myFControl"
                          placeholder="تلفن دوم..."
                        />
                      </div>
                    </div>
                    <div className="panel-phone-input lg:col-span-3 col-span-5">
                      <div className="all-input-group input-group">
                        <input
                          id="tel2Code"
                          onChange={(e) => {
                            setTel2Code(e.target.value);
                            document.getElementById(
                              "tel2Code"
                            ).style.borderBlockColor = "white";
                          }}
                          type="number"
                          className="form-control myFCode"
                          placeholder="کد شهر..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* *********** End Phone *********** */}

                <div className="col-span-7 flex lg:mr-auto lg:mt-0 mb-20 ">
                  <div className="lg:col-span-2 col-span-3 w-full  ">
                    <div className="save-btn flex justify-end  items-end mt-2">
                      <button
                        id="btnGeneralInfo"
                        disabled={
                          locationName == "" ||
                          addressState == "" ||
                          place_id == "" ||
                          description == "" ||
                          postal_code == "" ||
                          tel1 == "" ||
                          // tel1Code == "" ||
                          tel2 == "" ||
                          tel2Code == ""
                            ? true
                            : false
                        }
                        name="btnGeneralInfo"
                        onClick={handleSubmitBusinessAddress}
                        className="text-white myButton text-[12px] px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                      >
                        {loadingAddress && (
                          <span
                            className="spinner-border spinner-border-sm text-sm ms-1"
                            role="status"
                          ></span>
                        )}
                        ثبت آدرس
                      </button>
                    </div>

                    <table
                      border
                      class="table table-center table-striped management-list-tabele w-full  table-bordered rounded-md "
                    >
                      <thead dir="rtl">
                        <tr className=" bg-blue-200 text-center text-slate-600 font-semibold">
                          <th
                            className="text-[9px] text-slat-100 text-center w-[20px] "
                            scope="col"
                          >
                            ردیف
                          </th>
                          <th
                            className="text-[9px] text-slat-100 text-center w-[55px] "
                            scope="col"
                          >
                            محل
                          </th>

                          <th
                            className="text-[9px] text-slat-100 text-center w-[100px] "
                            scope="col"
                          >
                            استان
                          </th>
                          <th
                            className="text-[9px] text-slat-100 text-center  w-[55px]"
                            scope="col"
                          >
                            شهر
                          </th>
                          <th
                            className="text-[9px] text-slat-100 w-[130px]  text-center"
                            scope="col"
                          >
                            آدرس پستی
                          </th>
                          <th
                            className="text-[9px] text-slat-100 w-[30px]  text-center"
                            scope="col"
                          >
                            کد پستی
                          </th>

                          <th
                            className="text-[9px] text-slat-100 text-center w-[20px] "
                            scope="col"
                          >
                            تلفن اول
                          </th>
                          {/* <th
                            className="text-[9px] text-slat-100 text-center w-[15px] "
                            scope="col"
                          >
                            کد اول
                          </th> */}
                          <th
                            className="text-[9px] text-slat-100 text-center w-[20px] "
                            scope="col"
                          >
                            تلفن دوم
                          </th>
                          <th
                            className="text-[9px] text-slat-100 text-center w-[15px] "
                            scope="col"
                          >
                            کد
                          </th>
                          <th
                            className="text-[9px] text-slat-100 text-center w-[15px] "
                            scope="col"
                          >
                            <i class="bi bi-trash text-danger text-[12px]"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allAddresses &&
                          allAddresses.map(function (address) {
                            return (
                              <>
                                <tr>
                                  <td className="text-[9px]">1</td>
                                  <td className="text-[9px]">{address.name}</td>
                                  <td className="text-[9px]">
                                    {address.place.parent.name}
                                  </td>
                                  <td className="text-[9px]">
                                    {address.place.name}
                                  </td>
                                  <td className="text-[9px]">
                                    {address.description}
                                  </td>
                                  <td className="text-[9px]">
                                    {address.postal_code}
                                  </td>
                                  <td className="text-[9px]">
                                    {address.tel_1}
                                  </td>
                                  <td className="text-[9px]">
                                    {address.tel_2}
                                  </td>
                                  <td className="text-[9px]">
                                    {address.tel_2_code}
                                  </td>
                                  <td className="text-[9px]">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        setAddressId(address.id);
                                        modalHandler();
                                      }}
                                    >
                                      <i class="bi bi-trash text-danger text-[12px] myPointer"></i>
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="lg:col-span-2 col-span-3 ">
                    <div className="save-btn flex justify-end items-end mt-2">
                      {disabled ? (
                        ""
                      ) : (
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
                      )}

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
                  </div> */}
                  {/* <div className="lg:col-span-3 col-span-1"></div> */}
                </div>

                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
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
                <div className=" flex justify-end ">
                  <button
                    id="btnGeneralInfo"
                    name="btnGeneralInfo"
                    onClick={(e) => {
                      router.push("/marketing/info/aboutUs");
                      setLoadingNextLevel(true);
                    }}
                    className="text-white  text-[12px] myButton px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md mb-2"
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
