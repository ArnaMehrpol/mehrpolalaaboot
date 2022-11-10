import React from "react";

const Validation = ({ mobile }) => {
  const regexMobile10 = new RegExp("^(\\+98|0)?9\\d{9}$");
  const regexPassword = new RegExp("^([a-zA-Z0-9.(_!@#$%&-+])*$");
  const mobile2 = document.getElementById("mobile").value;
  if (!regexMobile10.test(mobile) || mobile === "") {
    toast.error(
      "شماره موبایل باید با 09 شروع شده و بیشتر از 10 رقم یا خالی نباشد"
    );
    document.getElementById("mobile").style.backgroundColor = "red";
    document.getElementById("mobile").value = "";
    //   setmobile("");
    // setmobile("");
    // setdisableGettingCode(false);
    // setmobileStatus(false);

    return;
  } else {
    setmobileStatus(true);
  }
  return <div></div>;
};

export default Validation;
