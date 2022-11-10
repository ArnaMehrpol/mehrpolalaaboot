import React, { useRef, useState } from "react";

const Captcha = () => {
  let captcha1 = useRef(null);
  const [captchaChar, setcaptchaChar] = useState([]);
  let reloadBtn = useRef(null);
  let inputField = useRef(null);
  let checkBtn = useRef(null);
  let statusTxt = useRef(null);

  //storing all captcha characters in array
  let allCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  function getCaptcha() {
    for (let i = 0; i < 6; i++) {
      //getting 6 random characters from the array
      let randomCharacter =
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
      captcha1 = captcha1 + ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
      setcaptchaChar(captcha1);
    }
    captcha1.innerText = captchaChar.map;
  }
  getCaptcha(); //calling getCaptcha when the page open
  //calling getCaptcha & removeContent on the reload btn click
  const reload = () => {
    removeContent();
    getCaptcha();
  };

  const check = (e) => {
    e.preventDefault(); //preventing button from it's default behaviour
    statusTxt.style.display = "block";
    //adding space after each character of user entered values because I've added spaces while generating captcha
    let inputVal = inputField.value.split("").join(" ");
    if (inputVal == captcha.innerText) {
      //if captcha matched
      statusTxt.style.color = "#4db2ec";
      statusTxt.innerText = "عالی ! شما ربات نیستید";
      setTimeout(() => {
        //calling removeContent & getCaptcha after 4 seconds
        removeContent();
        getCaptcha();
      }, 2000);
    } else {
      statusTxt.style.color = "#ff0000";
      statusTxt.innerText = "کد امنیتی درست نیست !دوباره امتحان کنید";
    }
  };

  function removeContent() {
    inputField.value = "";
    captcha.innerText = "";
    statusTxt.style.display = "none";
  }

  return (
    <div className="wrapper">
      <div className="captcha-area">
        <div className="captcha-img">
          <img
            src="../public/assets/img/captcha/captcha-bg.png"
            alt="Captch Background"
          />
          <span ref={captcha1} className="captcha"></span>
        </div>
        <button ref={reloadBtn} onClick={reload} className="reload-btn">
          <i className="fas fa-redo-alt"></i>
        </button>
      </div>
      <form action="#" ref={inputField} className="input-area">
        <input
          type="text"
          placeholder="کد امنیتی را وارد کنید"
          maxlength="6"
          spellcheck="false"
          required
        />
        <button ref={checkBtn} onClick={check} className="check-btn">
          چک کن
        </button>
      </form>
      <div ref={statusTxt} className="status-text"></div>
    </div>
  );
};

export default Captcha;
