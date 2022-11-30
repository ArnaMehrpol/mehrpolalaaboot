import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import MyContext from "../context/MyContext";
import Image from "next/image";
import Link from "next/link";
import Captcha from "../components/CaptchaOld";
import { useRouter } from "next/router";
import { axiosSetup } from "../components/utils/axiosSetup";
import axios from "axios";

const register2 = () => {
  //Start Password Validation
  const [loadingRegisterButton, setLoadingRegisterButton] = useState(false);
  const [isOnline, setIsOnline] = useState();
  const [openEye, setopenEye] = useState(false);
  const [closeEye, setcloseEye] = useState(true);
  const [showPassword, setshowPassword] = useState(true);
  const [includeNumber, setincludeNumber] = useState("");
  const [includeNumberStatus, setincludeNumberStatus] = useState(false);
  const [include8Char, setinclude8Char] = useState("");
  const [include8CharStatus, setinclude8CharStatus] = useState(false);
  const [includeSpetialChar, setincludeSpetialChar] = useState("");
  const [includeSpetialCharStatus, setincludeSpetialCharStatus] =
    useState(false);
  const [includeCapitalChar, setincludeCapitalChar] = useState("");
  const [includeCapitalCharStatus, setincludeCapitalCharStatus] =
    useState(false);
  const [includeSmallChar, setincludeSmallChar] = useState("");
  const [includeSmallCharStatus, setincludeSmallCharStatus] = useState(false);
  const [both, setboth] = useState(false);
  const [progress11, setprogress11] = useState(false);
  const [progress22, setprogress22] = useState(false);
  const [progress33, setprogress33] = useState(false);
  const [progress44, setprogress44] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  const [errMsgPhone, setErrMsgPhone] = useState([]);
  const [resMsg, setResMsg] = useState([]);
  const [errMobile, setErrMobile] = useState([]);
  const [feedBackMobile, setFeedBackMobile] = useState([]);
  const [resRegister, setResRegister] = useState([]);
  const [catchRegister, setCatchRegister] = useState([]);
  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);

  let progress1 = false;
  let progress2 = false;
  let progress3 = false;
  let progress4 = false;
  //End Password Validation

  const router = useRouter();
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [sum, setsum] = useState(0);
  const [inputValue, setinputValue] = useState(0);
  const [captchaStatus, setcaptchaStatus] = useState("");

  const [mobile, setmobile] = useState("");
  const [mobileStatus, setmobileStatus] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordDisable, setpasswordDisable] = useState(true);
  const [repassword, setrepassword] = useState("");
  const [repasswordDisable, setrepasswordDisable] = useState(true);
  const [waitingForSenddata, setWatingForSendData] = useState(false);
  const [enterCodeDisable, setenterCodeDisable] = useState(true);

  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");

  const [code, setcode] = useState("");
  const [usecodedisable, setusecodedisable] = useState(true);

  const [myTime, setmyTime] = useState(null);

  const { register } = useContext(MyContext);

  //Timer
  const [mins, setmins] = useState(2);
  const [seconds, setseconds] = useState(60);
  const [defaultMins, setdefaultMins] = useState("02:");
  const [defaultSeconds, setdefaultSeconds] = useState("00");
  const [timex, settimex] = useState(0);
  const [disableGettingCode, setdisableGettingCode] = useState(false);

  const [sendCode, setsendCode] = useState("ارسال کد");
  useEffect(() => {
    setIsOnline(navigator.onLine);
  });

  const handelLoading = () => {
    setLoadingRegisterButton(true);
  };

  function startTimer() {
    setmyTime(
      setTimeout(function () {
        seconds--;
        if (mins > 1) {
          seconds = 59;
          mins--;
        }
        if (seconds === 0) {
          seconds = 59;
          mins--;
        }

        if (mins < 10) {
          setdefaultMins("0" + mins + ":");
        }
        if (seconds < 10) {
          setdefaultSeconds("0" + seconds);
        } else {
          setdefaultSeconds(seconds);
        }
        if (!(seconds == 0) & !(mins == -1)) {
          startTimer();
        } else {
          setdefaultMins("02:");
          setdefaultSeconds("00");
          setdisableGettingCode(false);
          setsendCode("ارسال مجدد کد");
        }
      }, 1000)
    );
  }

  //End Timer
  const generateCaptcha = () => {
    let nummber1 = Math.floor(Math.random() * 10) + 1;
    let nummber2 = Math.floor(Math.random() * 10) + 1;
    setnum1(nummber1);
    setnum2(nummber2);
    setsum(nummber1 + nummber2);
    // document.getElementById("captchaInput").value = "";
  };

  const captchaHandler = async (e) => {
    document.getElementById("captchaInput").style.backgroundColor = "white";
    setinputValue(Number(e.target.value));
  };

  useEffect(() => {
    if (errMsg.code === "ERR_NETWORK") {
      generateCaptcha();
      toast.error("شما به اینرنت متصل نیستید");
    }
  }, [errMsg]);

  useEffect(() => {
    if (errMobile.data == "user exists") {
      generateCaptcha();
      toast.error("این شماره قبلا ثبت شده است");
      setErrMobile("");
    } else if (feedBackMobile.status === 201) {
      setmobileStatus(true);
    }
  }, [feedBackMobile, errMobile]);

  useEffect(() => {
    if (mobileStatus === true) {
      axios
        .post(
          url + "api/user/auth/send-verify-code",
          JSON.stringify({
            mobile: mobile,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => setResMsg(res))
        .catch((err) => setErrMsgPhone(err));
    }
  }, [mobileStatus]);

  useEffect(() => {
    if (!resMsg && resMsg.status !== 200) {
      setmobileStatus(false);
      toast.error("ارسال پیامک با مشکل مواجه شده است. لطفا مجددا تلاش نمایید");
    } else if (resMsg.status === 200) {
      if (resMsg.data === 201) {
        setmobileStatus(false);
        toast.success("کد برای شما ارسال شد");
        startTimer();
        setdisableGettingCode(true);
        setenterCodeDisable(false);
        setpasswordDisable(false);
        setrepasswordDisable(false);
      } else if (resMsg.data === 200) {
        setmobileStatus(false);
        toast.success("کد قبلا برای شما ارسال شده است");
        startTimer();
        setdisableGettingCode(true);
        setenterCodeDisable(false);
        setpasswordDisable(false);
        setrepasswordDisable(false);
      }
    }
  }, [resMsg, errMsgPhone]);

  console.log({ resMsg });
  console.log({ errMsgPhone });

  useEffect(() => {
    if (resRegister.status === 200) {
      setLoadingRegisterButton(false);
      if (resRegister.data === 404) {
        toast.error("لطفا کد را صحیح وارد نمایید");
      } else {
        toast.success("ثبت نام شما با موفقیت انجام شد");
        router.push("/");
      }
    } else if (!catchRegister) {
      setLoadingRegisterButton(false);
      toast.error("ثبت نام شما با مشکل مواجه شد. لطفا مجددا سعی نمایید");
    }
  }, [resRegister, catchRegister]);

  //Getting Code
  const gettingCodeMethode = async (e) => {
    generateCaptcha();
    e.preventDefault();
    const regexMobile10 = new RegExp("^(\\+98|0)?9\\d{9}$");

    if (!regexMobile10.test(mobile) || mobile === "") {
      toast.error("شماره موبایل باید با 09 شروع شود");
      document.getElementById("mobile").style.backgroundColor = "red";

      document.getElementById("mobile").value = "";
      setmobile("");
      setdisableGettingCode(false);
      setmobileStatus(false);
      generateCaptcha();
      return;
    } else {
      // setmobileStatus(true);
    }
    if (sum === inputValue) {
      setcaptchaStatus(true);
    } else {
      toast.error("لطفا جمع اعداد را صحیح وارد نمایید");
      document.getElementById("captchaInput").style.backgroundColor = "red";

      document.getElementById("captchaInput").value = "";
      generateCaptcha();
      setcaptchaStatus(false);
      return false;
    }

    //All Ok for Getting Code
    if (isOnline) {
      const resMobile = await axios
        .post(
          url + `api/user/auth/register`,
          JSON.stringify({
            mobile: mobile,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setFeedBackMobile(res);
          generateCaptcha();
        })
        .catch((err) => setErrMobile(err.response));
    } else toast.error("شما به اینرنت متصل نیستید");
  }; //End Getting Code

  //Start Password Checker
  const passwordCheker = () => {
    generateCaptcha();
    let points = 0;
    if (
      password.includes("@") ||
      password.includes("#") ||
      password.includes("$") ||
      password.includes("%") ||
      password.includes("!") ||
      password.includes("&") ||
      password.includes("+") ||
      password.includes("-") ||
      password.includes("_")
    ) {
      setincludeSpetialCharStatus(true);
      points += 4;
    } else {
      setincludeSpetialCharStatus(false);
    }
    if (
      includeNumber.includes("1") ||
      includeNumber.includes("2") ||
      includeNumber.includes("3") ||
      includeNumber.includes("4") ||
      includeNumber.includes("5") ||
      includeNumber.includes("6") ||
      includeNumber.includes("7") ||
      includeNumber.includes("8") ||
      includeNumber.includes("9") ||
      includeNumber.includes("0")
    ) {
      setincludeNumberStatus(true);
      points += 4;
    } else {
      setincludeNumberStatus(false);
    }
    if (include8Char.length > 9) {
      setinclude8CharStatus(true);
      points += 4;
    } else {
      setinclude8CharStatus(false);
    }

    if (
      includeCapitalChar.includes("A") ||
      includeCapitalChar.includes("B") ||
      includeCapitalChar.includes("C") ||
      includeCapitalChar.includes("D") ||
      includeCapitalChar.includes("E") ||
      includeCapitalChar.includes("F") ||
      includeCapitalChar.includes("G") ||
      includeCapitalChar.includes("H") ||
      includeCapitalChar.includes("I") ||
      includeCapitalChar.includes("J") ||
      includeCapitalChar.includes("K") ||
      includeCapitalChar.includes("L") ||
      includeCapitalChar.includes("M") ||
      includeCapitalChar.includes("N") ||
      includeCapitalChar.includes("O") ||
      includeCapitalChar.includes("P") ||
      includeCapitalChar.includes("Q") ||
      includeCapitalChar.includes("R") ||
      includeCapitalChar.includes("S") ||
      includeCapitalChar.includes("T") ||
      includeCapitalChar.includes("U") ||
      includeCapitalChar.includes("V") ||
      includeCapitalChar.includes("W") ||
      includeCapitalChar.includes("X") ||
      includeCapitalChar.includes("Y") ||
      includeCapitalChar.includes("Z")
    ) {
      setincludeCapitalCharStatus(true);
    }

    if (
      includeCapitalChar.includes("a") ||
      includeCapitalChar.includes("b") ||
      includeCapitalChar.includes("c") ||
      includeCapitalChar.includes("d") ||
      includeCapitalChar.includes("e") ||
      includeCapitalChar.includes("f") ||
      includeCapitalChar.includes("g") ||
      includeCapitalChar.includes("h") ||
      includeCapitalChar.includes("i") ||
      includeCapitalChar.includes("j") ||
      includeCapitalChar.includes("k") ||
      includeCapitalChar.includes("l") ||
      includeCapitalChar.includes("m") ||
      includeCapitalChar.includes("n") ||
      includeCapitalChar.includes("o") ||
      includeCapitalChar.includes("p") ||
      includeCapitalChar.includes("q") ||
      includeCapitalChar.includes("r") ||
      includeCapitalChar.includes("s") ||
      includeCapitalChar.includes("t") ||
      includeCapitalChar.includes("u") ||
      includeCapitalChar.includes("v") ||
      includeCapitalChar.includes("w") ||
      includeCapitalChar.includes("x") ||
      includeCapitalChar.includes("y") ||
      includeCapitalChar.includes("z")
    ) {
      setincludeSmallCharStatus(true);
    }
    if (includeCapitalCharStatus && includeSmallCharStatus) {
      setboth(true);
      points += 4;
    }
    if (
      include8CharStatus ||
      includeNumberStatus ||
      includeSpetialCharStatus ||
      both
    ) {
      progress1 = true;
    } else {
      if (
        (include8CharStatus ||
          includeNumberStatus ||
          includeSpetialCharStatus ||
          both) &&
        progress1
      ) {
        progress2 = true;
      } else {
        if (
          (include8CharStatus ||
            includeNumberStatus ||
            includeSpetialCharStatus ||
            both) &
          progress1 &
          progress2
        ) {
          progress3 = true;
        } else {
          if (
            (include8CharStatus ||
              includeNumberStatus ||
              includeSpetialCharStatus ||
              both) &
            progress1 &
            progress2 &
            progress3
          ) {
            progress4 = true;
          } else {
          }
        }
      }
    }
    if (points > 15) {
      setprogress44(true);
    } else {
      setprogress44(false);
    }
    if (points > 11) {
      setprogress33(true);
    } else {
      setprogress33(false);
    }
    if (points > 7) {
      setprogress22(true);
    } else {
      setprogress22(false);
    }
    if (points > 3) {
      setprogress11(true);
    } else {
      setprogress11(false);
    }
  }; //End Password Checker

  //Login Handler
  const loginHandler = (e) => {
    generateCaptcha();
    e.preventDefault();
    if (password === "") {
      toast.error("رمز عبور نباید خالی باشد");
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }
    if (password !== repassword) {
      generateCaptcha();
      toast.error("رمز عبور و تکرارش باید یکسان باشد");
      // document.getElementById("repassword").style.backgroundColor = "red";
      return;
    }
    if (password.length < 8) {
      generateCaptcha();
      toast.error("رمز عبور حداقل باید 8 کاراکتر داشته باشد");
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }
    if (includeNumberStatus) {
    } else {
      generateCaptcha();
      toast.error("در رمز عبور حتما باید عدد موجود باشد");
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }

    if (includeSpetialCharStatus) {
    } else {
      generateCaptcha();
      toast.error(
        "در رمز عبور حتما باید از یکی از کاراکترهای  @ # $ % & ! + - _ استفاده نمایید!"
      );
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }

    if (
      password.includes("'") ||
      password.includes('"') ||
      password.includes("=") ||
      password.includes("^") ||
      password.includes("*")
    ) {
      toast.error("لطفا فقط از کاراکترهای مجاز استفاده نمایید");
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }

    if (includeCapitalCharStatus) {
    } else {
      generateCaptcha();
      toast.error("باید حداقل از یک حرف بزرک استفاده فرمایید");
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }

    if (includeSmallCharStatus) {
    } else {
      generateCaptcha();
      toast.error("باید حداقل از یک حرف کوچک استفاده نمایید");
      document.getElementById("password").style.backgroundColor = "red";
      return;
    }

    // ALL OK
    handelLoading();

    axios
      .post(url + "api/user/auth/verify-code", {
        mobile: mobile,
        code: code,
        password: password,
      })
      .then((res) => setResRegister(res))
      .catch((err) => setCatchRegister(err));

    // register({ mobile, password, code });
  };
  //End Login Handler
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      <div className="registerBody">
        <div className="login w-full grid grid-cols-12 ">
          {/*photo */}
          <div className="right-content lg:col-span-5 col-span-12 bg-blue-600 z-0 relative registerPicContainer">
            <div className="flex flex-col justify-center items-center absolute registerPic z-50  right-[1rem] top-[3rem]">
              <Image
                src={"/../assets/img/utilis/login.svg"}
                width={500}
                height={600}
                className=""
              />
              <p className="text-2xl font-bold text-white text-center">
                به وب سایت
              </p>
              <p className="text-2xl font-bold text-white text-center">
                مهرپل خوش آمدید
              </p>
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
                      <p className="text-center mb-4 text-[22px] font-bold ">
                        ثبت نام
                      </p>
                      <div className="mb-3">
                        <input
                          type="number"
                          autoFocus
                          className="form-control IranSanse font12 height185 buttonOffMozila buttonOffOthers"
                          id="mobile"
                          aria-describedby="emailHelp"
                          placeholder="مثال: 09121111111"
                          name="mobile"
                          onChange={(e) => {
                            document.getElementById(
                              "mobile"
                            ).style.backgroundColor = "white";
                            setmobile(e.target.value);
                          }}
                        />
                      </div>

                      <div className="captcha text-center">
                        <div className=" d-flex justify-between w-full ">
                          <div>
                            <input
                              onChange={captchaHandler}
                              type="number"
                              className="form-control mb-3  font12 width100 height185 buttonOffMozila buttonOffOthers"
                              id="captchaInput"
                              placeholder="مجموع اعداد را وارد نمایید"
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

                      <div className="text-center">
                        <div className="gettingCode">
                          <div className="mb-3">
                            <input
                              autoComplete="off"
                              type="number"
                              className="form-control IranSanse  font12 width100 height185"
                              id="code"
                              aria-describedby="emailHelp"
                              placeholder="وارد نمودن کد..."
                              name="code"
                              disabled={enterCodeDisable}
                              onChange={(e) => {
                                setcode(e.target.value);

                                setusecodedisable(false);
                              }}
                            />
                          </div>
                          <div>
                            <button
                              onClick={(e) => {
                                gettingCodeMethode(e);
                                setWatingForSendData(true);
                                if (
                                  mobileStatus == false ||
                                  captchaStatus == false
                                ) {
                                  setdisableGettingCode(false);
                                  setWatingForSendData(false);
                                } else {
                                  setWatingForSendData(false);
                                  startTimer();
                                  setdisableGettingCode(true);
                                }
                              }}
                              type="submit"
                              className={`border-2 border-blue-500 rounded-lg px-3 mb-3 IranSanse cursor-pointer 
                               font12 width100 sendingAgainCode height185 hover:bg-blue-500 hover:text-white 
                               ${
                                 disableGettingCode
                                   ? "bg-gray-400 cursor-pointer hover:bg-gray-400 hover:text-black"
                                   : ""
                               }`}
                              id="btnSendCode"
                              disabled={disableGettingCode}
                            >
                              {mobileStatus ? (
                                <div
                                  className="spinner-border text-sm"
                                  role="status"
                                >
                                  <span class="sr-only">Loading...</span>
                                </div>
                              ) : (
                                <div className="d-flex justify-between">
                                  <div>{sendCode}</div>
                                  <div>
                                    <span className="ml-1">||</span>
                                    <span id="mins">{defaultMins}</span>
                                    <span id="seconds">{defaultSeconds}</span>
                                  </div>
                                </div>
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="thePassword">
                          <div className="mb-3">
                            <input
                              autoComplete="off"
                              type="password"
                              className="form-control IranSanse  font10 width100 height185"
                              id="password"
                              placeholder="رمز عبور خود را وارد فرمایید..."
                              name="password"
                              disabled={passwordDisable}
                              onKeyUpCapture={passwordCheker}
                              onChange={(e) => {
                                document.getElementById(
                                  "password"
                                ).style.backgroundColor = "white";
                                setpassword(e.target.value);

                                setincludeNumber(e.target.value);
                                setinclude8Char(e.target.value);
                                setincludeSpetialChar(e.target.value);
                                setincludeSmallChar(e.target.value);
                                setincludeCapitalChar(e.target.value);
                                passwordCheker();
                              }}
                            />
                          </div>

                          <div className="">
                            <input
                              type="password"
                              className="form-control IranSanse  font10 mr-1 width100 height185"
                              id="repassword"
                              placeholder="رمز عبور را مجددا وارد فرمایید..."
                              name="repassword"
                              disabled={repasswordDisable}
                              onKeyUpCapture={passwordCheker}
                              onChange={(e) => {
                                document.getElementById(
                                  "repassword"
                                ).style.backgroundColor = "white";
                                setrepassword(e.target.value);
                                setincludeNumber(e.target.value);
                                setinclude8Char(e.target.value);
                                setincludeSpetialChar(e.target.value);
                                setincludeSmallChar(e.target.value);
                                setincludeCapitalChar(e.target.value);
                                passwordCheker();
                              }}
                            />
                          </div>
                        </div>
                        <div className="progressBars">
                          <div
                            className={
                              progress11
                                ? "progress myProgressRegister bg-success "
                                : "progress myProgressRegister bg-slate-300"
                            }
                          >
                            <div
                              className="progress-bar theProgress "
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              // value={progress1}
                            ></div>
                          </div>

                          <div
                            className={
                              progress22
                                ? "progress myProgressRegister bg-success "
                                : "progress myProgressRegister bg-slate-300"
                            }
                          >
                            <div
                              className="progress-bar theProgress "
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              // value={progress2}
                            ></div>
                          </div>

                          <div
                            className={
                              progress33
                                ? "progress myProgressRegister bg-success "
                                : "progress myProgressRegister bg-slate-300"
                            }
                          >
                            <div
                              className="progress-bar theProgress "
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              // value={progress3}
                            ></div>
                          </div>
                          <div
                            className={
                              progress44
                                ? "progress myProgressRegister bg-success "
                                : "progress myProgressRegister bg-slate-300"
                            }
                          >
                            <div
                              className="progress-bar theProgress "
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              // value={progress4}
                            ></div>
                          </div>
                        </div>
                        {/* End ProgressBars */}

                        {/* start  Conditions */}
                        <ul className="myUl2">
                          <li
                            className={`IranSanse text-slate-400 ${
                              includeNumberStatus
                                ? "text-[#256709] font-semibold"
                                : ""
                            }`}
                          >
                            شامل عدد
                          </li>
                          <li
                            className={`IranSanse text-slate-400 ${
                              include8CharStatus
                                ? "text-[#256709] font-semibold"
                                : ""
                            }`}
                          >
                            حداقل 8 حرف
                          </li>
                          <li
                            className={`IranSanse text-slate-400 ${
                              includeSpetialCharStatus
                                ? "text-[#256709] font-semibold"
                                : ""
                            }`}
                          >
                            شامل حداقل یکی از علائم (@ ! # $ % ^ & _ + -)
                          </li>
                          <li
                            className={`IranSanse text-slate-400 ${
                              both ? "text-[#256709] font-semibold" : ""
                            }`}
                          >
                            شامل یک حرف بزرگ و یک حرف کوچک
                          </li>
                        </ul>
                        {/* End Rpogress */}

                        <div className="gettingRight ">
                          <input
                            className=" mr-1 mb-4 mt-6"
                            type="checkbox"
                            name="acceptChekBox"
                            id="acceptChekBox"
                          />
                          <label
                            className="IranSanse mr-2 font12"
                            htmlFor="acceptChekBox"
                          >
                            <Link href="#">
                              <a className="no-underline text-black ">
                                شرایط و قوانین جریم خصوصی را می پذیرم
                              </a>
                            </Link>
                          </label>
                        </div>
                        <div className="gettingLeft ">
                          <button
                            onClick={(e) => loginHandler(e)}
                            type="submit"
                            className="text-white bg-blue-400 cursor-pointer hover:bg-blue-500 rounded-md IranSanse font14 font-bold width100 height185"
                            id="btnRegister"
                            disabled={
                              password === "" ||
                              repassword === "" ||
                              code === "" ||
                              acceptChekBox.checked == false
                            }
                          >
                            {loadingRegisterButton ? (
                              <div
                                className="spinner-border text-sm"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              "ثبت نام"
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

export default register2;
