import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { notify } from "../components/tools/toastify";
import MyContext from "../context/MyContext";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Validation from "../components/Validation";
import { axiosSetup } from "../components/utils/axiosSetup";
import Cookies from "universal-cookie";

const login = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const [changeCatch, setChangeCatch] = useState(false);
  const { login } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState([]);
  const [dataCatch, setDataCatch] = useState([]);
  const handelLoading = () => {
    setLoading(!loading);
  };
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [sum, setsum] = useState(0);
  const [inputValue, setinputValue] = useState(0);

  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [remmemberme, setremmemberme] = useState(false);

  const generateCaptcha = () => {
    let nummber1 = Math.floor(Math.random() * 10) + 1;
    let nummber2 = Math.floor(Math.random() * 10) + 1;
    setnum1(nummber1);
    setnum2(nummber2);
    setsum(nummber1 + nummber2);
  };
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  // const [code, setcode] = useState(null);
  // const [usecodedisable, setusecodedisable] = useState(true);
  const regexMobile10 = new RegExp("^(\\+98|0)?9\\d{9}$");
  const regexPassword = new RegExp("^([a-zA-Z0-9.(_!@#$%&-+])*$");
  const captchaHandler = (e) => {
    document.getElementById("captchaInput").style.borderBlockColor = "white";
    setinputValue(Number(e.target.value));
  };

  useEffect(() => {
    setLoading(false);
    if (dataLogin.length === 0 && dataCatch.length !== 0) {
      if (dataCatch.code === "ERR_NETWORK") {
        notify("اتصال اینترنت خود را بررسی کنید", "error");
      } else {
        notify("نام کاربری یا رمز عبور صحیح نیست", "error");
      }
    } else if (dataLogin.status === 201) {
      notify("ورود به پنل کاربری با موفقیت انجام گرفت", "success");

      if (remmemberme === true) {
        cookies.set(
          "token",
          dataLogin.data.token,
          { path: "/" },
          { maxAge: 60 * 60 * 24 * 30 }
        );
        cookies.set(
          "dataUser",
          dataLogin.data.user,
          { path: "/" },
          { maxAge: 60 * 60 * 24 * 30 }
        );
        // document.cookie = `token=${data.token}; path=/; Secure; max-age=${
        //   60 * 60 * 24 * 30
        // }; `;
        // document.cookie = `userData=${data.user}; path=/; Secure; max-age=${
        //   60 * 60 * 24 * 30
        // };`;
      } else {
        cookies.set(
          "token",
          dataLogin.data.token,
          { path: "/" },
          { maxAge: 60 * 60 * 24 * 1 }
        );
        // document.cookie = `token=${data.token}; path=/; Secure; max-age=${
        //   60 * 60 * 24 * 1
        // }; `;
        cookies.set(
          "dataUser",
          dataLogin.data.user,
          { path: "/" },
          { maxAge: 60 * 60 * 24 * 1 }
        );
        // document.cookie = `userData=${data.user}; path=/; Secure; max-age=${
        //   60 * 60 * 24 * 1
        // };`;
      }
      router.push("/");
    }
  }, [dataLogin, dataCatch]);

  const loginClickHandler = () => {
    const address = "/user/auth/login";
    const method = "post";
    const header = {
      Accept: "application/json",
    };
    const body = {
      mobile: mobile,
      password: password,
    };
    axiosSetup(address, method, header, body, getResult, getCatch);
    function getResult(data) {
      setDataLogin(data);
    }
    function getCatch(data) {
      setDataCatch(data);
    }

    dataLogin.length === 0 && setLoading(true);
  };

  //Login Handler
  const loginHandler = (e) => {
    e.preventDefault();
    generateCaptcha();

    // const regexMobile10 = new RegExp("^(\\+98|0)?9\\d{9}$");
    // const regexPassword = new RegExp("^([a-zA-Z0-9.(_!@#$%&-+])*$");

    if (!regexMobile10.test(mobile)) {
      generateCaptcha();
      toast.error(
        "شماره موبایل باید با 09 شروع شده و بیشتر از 10 رقم یا خالی نباشد"
      );
      document.getElementById("mobile").style.borderBlockColor = "red";
      document.getElementById("mobile").value = "";
      setmobile("");
      setmobile("");
      return false;
    }
    <Validation mobile={mobile} />;

    if (!regexPassword.test(password)) {
      generateCaptcha();
      toast.error("لطفا از کاراکترهای ویژه در رمز عبور استفاده نفرمایید!");
      document.getElementById("password").style.borderBlockColor = "red";
      document.getElementById("password").value = "";
      setpassword("");
      return false;
    }

    if (sum !== inputValue) {
      generateCaptcha();
      toast.error("لطفا جمع اعداد را صحیح وارد نمایید!");
      document.getElementById("captchaInput").style.borderBlockColor = "red";
      document.getElementById("captchaInput").value = "";
      generateCaptcha();
      return false;
    }

    setChangeCatch(true);
    // All ok then =>
    setLoading(true);
    loginClickHandler();
    // login({ mobile, password });
  };
  //End Login Handler
  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (changeCatch === true) {
      generateCaptcha();
      setChangeCatch(false);
    }
  }, [changeCatch]);

  return (
    <>
      <div className="registerBody">
        <div className="login w-full grid grid-cols-12">
          <div className="right-content lg:col-span-5 col-span-12 bg-blue-600 relative">
            <div className="flex flex-col justify-center items-center  mt-14  right-[1rem] top-[2rem]">
              <Image
                src={"/../assets/img/utilis/login.svg"}
                width={500}
                height={600}
                className=""
              />
              <p className="text-2xl font-bold text-white">به وب سایت </p>
              <p className="text-2xl  font-bold text-white">مهرپل خوش آمدید</p>
            </div>
          </div>
          <div className="left-content lg:col-span-7 col-span-12">
            <div className="registerContentLeft justify-items-center">
              <div className=" justify-items-center " dir="rtl">
                <div className="row justify-content-center justify-items-center">
                  <div className="col-md-10 card form-card">
                    <form
                      onSubmit={(e) => loginHandler(e)}
                      className=" IranSanse "
                    >
                      <p className="text-center mb-4 text-[22px] font-bold">
                        ورود
                      </p>
                      <div className="mb-3">
                        <input
                          type="number"
                          autoFocus
                          className="form-control IranSanse font12 height185 buttonOffMozila buttonOffOthers focus:bg-white"
                          id="mobile"
                          aria-describedby="emailHelp"
                          placeholder="برای مثال: 09121111111"
                          name="mobile"
                          onChange={(e) => {
                            document.getElementById(
                              "mobile"
                            ).style.borderBlockColor = "white";
                            setmobile(e.target.value);
                          }}
                        />
                      </div>

                      <div className="text-center">
                        <div className="thePasswordLogin">
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control IranSanse font12 height185 "
                              id="password"
                              placeholder="رمز عبور خود را وارد فرمایید..."
                              name="password"
                              onChange={(e) => {
                                document.getElementById(
                                  "password"
                                ).style.borderBlockColor = "white";
                                setpassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="captcha text-center">
                          <div className=" d-flex justify-between w-full ">
                            <div>
                              <input
                                onChange={captchaHandler}
                                type="number"
                                className="form-control mb-3  font12 width100 height185 buttonOffMozila buttonOffOthers"
                                id="captchaInput"
                                placeholder="مجموع اعداد را وارد فرمایید"
                              />
                            </div>
                            <div>
                              <p className="btn btn-secondary d-flex justify-between  font12 width100">
                                <span className="mt-2 font12 ">
                                  {num1} + {num2}
                                </span>
                                <span>
                                  <i
                                    className="bi bi-arrow-repeat captchaIcon align-baseline bg-secondary  "
                                    onClick={generateCaptcha}
                                  ></i>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="gettingRight ">
                          <input
                            className=" mr-1 mb-4 mt-2 "
                            type="checkbox"
                            name="remmemberme"
                            id="remmemberme"
                            onChange={(e) => {
                              e.target.checked === true
                                ? setremmemberme(true)
                                : setremmemberme(false);
                            }}
                          />

                          <label
                            className="IranSanse mr-2 font12"
                            htmlFor="acceptChekBox"
                          >
                            <p className="no-underline text-black IranSanse">
                              مرا به خاطر بسپار
                            </p>
                          </label>
                        </div>
                        <div>
                          <Link href="/forgottenpass">
                            <a className=" mb-3 justify-start text-decoration-none font12 d-flex    ">
                              رمز عبور را فراموش کرده اید؟
                            </a>
                          </Link>
                        </div>
                        <div className="gettingLeft">
                          <button
                            onClick={(e) => loginHandler(e)}
                            type="submit"
                            className="text-white bg-blue-400  hover:bg-blue-500 rounded-md IranSanse font14 font-bold width100 height185"
                            id="btnLogin"
                            disabled={mobile === "" || password === ""}
                          >
                            {loading === true ? (
                              <div
                                className="spinner-border text-sm"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              "ورود"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Left */}
      </div>
    </>
  );
};

export default login;
