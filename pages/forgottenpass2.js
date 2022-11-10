import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import MyContext from "../context/MyContext";

const forgatenpass2 = () => {
  const { restPassword } = useContext(MyContext);
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

  const [token, settoken] = useState("");

  const [progress11, setprogress11] = useState(false);
  const [progress22, setprogress22] = useState(false);
  const [progress33, setprogress33] = useState(false);
  const [progress44, setprogress44] = useState(false);

  const [newPassword, setnewPassword] = useState("");
  const [reNewPassword, setreNewPassword] = useState("");
  let progress1 = false;
  let progress2 = false;
  let progress3 = false;
  let progress4 = false;

  console.log({include8CharStatus})
  console.log({includeNumberStatus})
  console.log({includeSpetialCharStatus})
  console.log({both})
  console.log({progress1})
  console.log({progress2})
  console.log({progress3})
  console.log({progress4})


  useEffect(()=>{

  },[])

  const passwordCheker = () => {
    let points = 0;
    console.log({points})
    if (
      newPassword.includes("'") ||
      newPassword.includes('"') ||
      newPassword.includes("=") ||
      newPassword.includes("^") ||
      newPassword.includes("*")
    ) {
      toast.error("لطفا فقط از کاراکترهای مجاز استفاده فرمایید!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }
    if (
      newPassword.includes("@") ||
      newPassword.includes("#") ||
      newPassword.includes("$") ||
      newPassword.includes("%") ||
      newPassword.includes("!") ||
      newPassword.includes("&") ||
      newPassword.includes("+") ||
      newPassword.includes("-") ||
      newPassword.includes("_")
    ) {
      setincludeSpetialCharStatus(true);
      points += 4;
    } else {
      setincludeSpetialCharStatus(false);
    }
    if (
      newPassword.includes("1") ||
      newPassword.includes("2") ||
      newPassword.includes("3") ||
      newPassword.includes("4") ||
      newPassword.includes("5") ||
      newPassword.includes("6") ||
      newPassword.includes("7") ||
      newPassword.includes("8") ||
      newPassword.includes("9") ||
      newPassword.includes("0")
    ) {
      setincludeNumberStatus(true);
      points += 4;
    } else {
      setincludeNumberStatus(false);
    }
    if (include8Char.length > 7) {
      setinclude8CharStatus(true);
      points += 4;
    } else {
      setinclude8CharStatus(false);
    }

    if (
      newPassword.includes("A") ||
      newPassword.includes("B") ||
      newPassword.includes("C") ||
      newPassword.includes("D") ||
      newPassword.includes("E") ||
      newPassword.includes("F") ||
      newPassword.includes("G") ||
      newPassword.includes("H") ||
      newPassword.includes("I") ||
      newPassword.includes("J") ||
      newPassword.includes("K") ||
      newPassword.includes("L") ||
      newPassword.includes("M") ||
      newPassword.includes("N") ||
      newPassword.includes("O") ||
      newPassword.includes("P") ||
      newPassword.includes("Q") ||
      newPassword.includes("R") ||
      newPassword.includes("S") ||
      newPassword.includes("T") ||
      newPassword.includes("U") ||
      newPassword.includes("V") ||
      newPassword.includes("W") ||
      newPassword.includes("X") ||
      newPassword.includes("Y") ||
      newPassword.includes("Z")
    ) {
      setincludeCapitalCharStatus(true);
    }else{
      setincludeCapitalCharStatus(false);
    }

    if (
      newPassword.includes("a") ||
      newPassword.includes("b") ||
      newPassword.includes("c") ||
      newPassword.includes("d") ||
      newPassword.includes("e") ||
      newPassword.includes("f") ||
      newPassword.includes("g") ||
      newPassword.includes("h") ||
      newPassword.includes("i") ||
      newPassword.includes("j") ||
      newPassword.includes("k") ||
      newPassword.includes("l") ||
      newPassword.includes("m") ||
      newPassword.includes("n") ||
      newPassword.includes("o") ||
      newPassword.includes("p") ||
      newPassword.includes("q") ||
      newPassword.includes("r") ||
      newPassword.includes("s") ||
      newPassword.includes("t") ||
      newPassword.includes("u") ||
      newPassword.includes("v") ||
      newPassword.includes("w") ||
      newPassword.includes("x") ||
      newPassword.includes("y") ||
      newPassword.includes("z")
    ) {
      setincludeSmallCharStatus(true);
    }
    else{
      setincludeSmallCharStatus(false);
    }
    if (includeCapitalCharStatus && includeSmallCharStatus) {
      setboth(true);
      points += 4;
    }else{
      setboth(false);
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
    }else{
      setprogress44(false)
    }
    if (points > 11) {
      setprogress33(true);
    }else{
      setprogress33(false)
    }
    if (points > 7) {
      setprogress22(true);
    }
    else{
      setprogress22(false)
    }
    if (points > 3) {
      setprogress11(true);
    }
    else{
      setprogress11(false)
    }
  }; //End PasswordChecker

  const sendNewPassword = (e) => {
    e.preventDefault();
    if (newPassword === "") {
      toast.error("رمز عبور نباید خالی باشد!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }
    if (newPassword !== reNewPassword) {
      toast.error("رمز عبور با تکرارش برابر یکسان نیستند!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }
    if (newPassword.length < 8) {
      toast.error("رمز عبور حداقل باید 8 کاراکتر داشته باشد!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }
    if (includeNumberStatus) {
    } else {
      toast.error("در رمز عبور حتما باید عدد موجود باشد!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }

    if (includeSpetialCharStatus) {
    } else {
      toast.error(
        "در رمز عبور حتما باید از یکی از کاراکترهای  @ # $ % & ! + - _ استفاده نمایید!"
      );
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }

    if (
      newPassword.includes("'") ||
      newPassword.includes('"') ||
      newPassword.includes("=") ||
      newPassword.includes("*")
    ) {
      toast.error("لطفا فقط از کاراکترهای مجاز استفاده فرمایید!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }

    if (includeCapitalCharStatus) {
    } else {
      toast.error("باید حداقل از یک حرف بزرک استفاده فرمایید!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }

    if (includeSmallCharStatus) {
    } else {
      toast.error("باید حداقل از یک حرف کوچک استفاده فرمایید!");
      document.getElementById("newPassword").style.backgroundColor = "red";
      return;
    }

    restPassword({ newPassword });
  };

  return (
    <div className="container fotgottenBody shadow-lg">
      <div className="row">
        <div className="col-md-10">
          {/*  Start Logo Part  */}
          <div className="logoAnsFlash">
            <div className="flash emptyBox">
              <Link href={"/forgottenpass2"}>
                <a>{/* <i class="bi bi-arrow-right"></i> */}</a>
              </Link>
            </div>
            <div className="forgattenLogo mr-14">
              <Image
                src="/../public/assets/img/logos/mehrpol.jpg"
                width={100}
                height={105}
              />
            </div>
            <div className="emptyBox"></div>
          </div>
          {/* End of Logo Part */}
          <div className="myForgattenForm">
            <form>
              {/* onSubmit={sendNewPassword} */}
              <div className="mb-3">
                <div id="emailHelp" className="form-text IranSanse mb-3">
                  تغییر رمز عبور
                </div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label IranSanse"
                >
                  رمز عبور باید حداقل 8 حرفی باشد
                </label>
                <div className="form-text IranSanse mb-1">
                  رمز عبور جدید
                  <sup>
                    <i className="bi bi-asterisk text-red-500 "></i>
                  </sup>
                </div>
                <div className="d-flex">
                  <input
                    type={showPassword ? "password" : "text"}
                    className="form-control IranSanse relative"
                    id="newPassword"
                    onChange={(e) => {
                      setincludeNumber(e.target.value);
                      setinclude8Char(e.target.value);
                      setincludeSpetialChar(e.target.value);
                      setincludeSmallChar(e.target.value);
                      setincludeCapitalChar(e.target.value);
                      passwordCheker();
                      setnewPassword(e.target.value);
                      document.getElementById(
                        "newPassword"
                      ).style.backgroundColor = "white";
                    }}
                    onKeyUpCapture={passwordCheker}
                  />
                  <div
                    className="myEye"
                    onClick={() => {
                      setopenEye(!openEye);
                      setcloseEye(!closeEye);
                      setshowPassword(!showPassword);
                    }}
                  >
                    <div className=" absolute text-2xl ml-2 ">
                      <i className="bi bi-eye-fill" hidden={openEye}></i>
                      <i className="bi bi-eye-slash-fill" hidden={closeEye}></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start ProgressBars */}
              <div className="progressBars">
                <div
                  className={
                    progress11
                      ? "progress myProgress bg-success "
                      : "progress myProgress"
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
                      ? "progress myProgress bg-success "
                      : "progress myProgress"
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
                      ? "progress myProgress bg-success "
                      : "progress myProgress"
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
                      ? "progress myProgress bg-success "
                      : "progress myProgress"
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
              <ul className="myUl">
                <li 
                className={`IranSanse text-slate-400 ${includeNumberStatus? 'text-[#256709] font-semibold' : ''}`}>
                  شامل عدد
                </li>
                <li className={`IranSanse text-slate-400 ${include8CharStatus? 'text-[#256709] font-semibold' : ''}`} 
                >
                  حداقل 8 حرف
                </li>
                <li 
                  className={`IranSanse text-slate-400 ${includeSpetialCharStatus? 'text-[#256709] font-semibold' : ''}`}
                >
                  شامل حداقل یکی از علائم (@ ! # $ % & _ + -)
                </li>
                <li className={`IranSanse text-slate-400 ${both? 'text-[#256709] font-semibold' : ''}`}>
                  شامل یک حرف بزرگ و یک حرف کوچک
                </li>
              </ul>

              {/* End  Conditions */}

              <div className="mb-3 mt-6">
                <div className="form-text IranSanse mb-1 ">
                  تکرار رمز عبور جدید
                  <sup>
                    <i className="bi bi-asterisk text-red-500 "></i>
                  </sup>
                </div>
                <div className="d-flex">
                  <input
                    type={showPassword ? "password" : "text"}
                    className="form-control IranSanse relative"
                    id="reNewPassword"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setreNewPassword(e.target.value);
                    }}
                  />
                  <div
                    className="myEye"
                    onClick={() => {
                      setopenEye(!openEye);
                      setcloseEye(!closeEye);
                      setshowPassword(!showPassword);
                    }}
                  >
                    <div className=" absolute text-2xl ml-2 ">
                      <i className="bi bi-eye-fill" hidden={openEye}></i>
                      <i className="bi bi-eye-slash-fill" hidden={closeEye}></i>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-center mt-3">
                  <button
                    type="submit"
                    className="text-white bg-blue-400  hover:bg-blue-500 rounded-md IranSanse mr-1 w-[130px] p-2"
                    onClick={(e) => {
                      sendNewPassword(e);
                    }}
                  >
                    تغییر رمز
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgatenpass2;
