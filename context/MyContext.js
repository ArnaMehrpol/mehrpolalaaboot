import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
// import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

export const MyProvider = ({ children }) => {
  const router = useRouter();
  const cookies = new Cookies();
  const [error, seterror] = useState(null);
  const [user, setuser] = useState(null);

  const [loading, setLoading] = useState(false);

  // const [mymobile, setmymobile] = useState(null);
  const [mytoken, setmytoken] = useState("");

  const [mycookie, setmycookie] = useState("");

  const [confCode, setconfCode] = useState("");

  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(cookies.get("token"));
    console.log("when load this:", token);
  }, []);
  //Register

  const register = (user) => {
    axios
      .post(url + "api/user/auth/verify-code", {
        mobile: user.mobile,
        code: user.code,
        password: user.password,
      })
      .then(function (response) {
        if (response.data === 404) {
          toast.error("لظفا کد را صحیح وارد نمایید!");
          return false;
        } else {
          toast.success("ثبت نام شما با موفقیت انجام شد!");
          //const data = response.json();
          const token = response.data.token;
          const userData = response.data;
          // console.log(response);
          console.log(token);
          document.cookie = `token=${token}; path=/; Secure; max-age=${
            60 * 60 * 24 * 1
          };   `;

          router.push("/");
          setuser(response.data);
        }
      })
      .catch(function (error) {
        toast.error("ثبت نام شما با مشکل مواجه شد. لطفا مجددا سعی نمایید!");
        console.log(error.message);
      });
  };

  // //Login

  const login = async (user) => {
    const res = await fetch(url + "api/user/auth/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        mobile: user.mobile,
        password: user.password,
      }),
    });
    let chk = document.getElementById("remmemberme").checked;

    const data = await res.json();
    console.log({ data });
    setuser(`${data.user}`);

    if (res.ok) {
      if (chk === true) {
        document.cookie = `token=${data.token}; path=/; Secure; max-age=${
          60 * 60 * 24 * 30
        }; `;
        document.cookie = `userData=${data.user}; path=/; Secure; max-age=${
          60 * 60 * 24 * 30
        };`;
      } else {
        cookies.set(
          "token",
          data.token,
          { path: "/" },
          { maxAge: 60 * 60 * 24 * 1 }
        );
        document.cookie = `token=${data.token}; path=/; Secure; max-age=${
          60 * 60 * 24 * 1
        }; `;
        cookies.set(
          "dataUser",
          data.user,
          { path: "/" },
          { maxAge: 60 * 60 * 24 * 1 }
        );

        const showCookie = cookies.get("userData");
        if (showCookie !== "") {
        }
      }
      console.log("this is data: ", data.user);
      setmytoken(data.token);
      const myT = data.token;
      console.log({ myT });
      console.log({ cookies });
      toast.success("شما با موفقیت وارد شدید!");
      router.push("/");
    } else {
      toast.error("شماره موبایل یا رمز عبور اشتباه می باشد!");
      router.push("/login");
      return;
    }
  };

  //Logout

  const logout = async () => {
    // const logoutToken = document.cookie.slice(6, 80);

    const res = await fetch(url + "api/user/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });

    if (res.ok) {
      setuser(null);

      cookies.set("token", "");
      toast.success("شما با موفقیت از سایت خارج شدید!");
      router.push("/");
    } else {
      toast.error("مشکلی در خروج پیش آمده. لطفا مجددا سعی نمایید");
    }
  };

  //Reset Password
  const restPassword = ({ newPassword }) => {
    const newPassToken = document.cookie.slice(6, 80);

    axios({
      method: "POST",
      url: "https://dfgsdfgsdfgj32gsdg.mehrpol.com/api/user/auth/reset-password",
      data: { password: newPassword },
      headers: {
        Authorization: `Bearer ${newPassToken}`,
      },
    })
      .then(function (response) {
        if (response.data != 200) {
          toast.error("تغییر رمز عبور با مشکل مواجه شد!");
        } else {
          toast.success("رمز عبور با موفقیت تغییر یافت!");

          document.cookie = `token=${newPassToken}; path=/; Secure; max-age=${
            60 * 60 * 24 * 1
          };   `;
          setuser(response.data);

          router.push("/");
        }
      })
      .catch((error) => {
        toast.error("تغییر رمز با مشکل مواجه گردید. لطفا دوباره سعی نمایید!");
        console.log(error);
      });
  };

  //Check LoggedIn user
  const checkUserLoggedIn = (user) => {};

  //MyContext Return
  return (
    <MyContext.Provider
      value={{
        register,
        login,
        checkUserLoggedIn,
        error,
        user,
        logout,
        restPassword,

        // confirmCode,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const MyContext = createContext();
export default MyContext;
