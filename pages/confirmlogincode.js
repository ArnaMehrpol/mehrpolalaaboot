import { sendStatusCode } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ConfirmLoginCode = () => {
  const [Code, setCode] = useState(null);

  var cook = document.cookie;
  var cookPure = cook.slice(6, 80);

  // console.log(cookPure);
  const router = useRouter();

  const handleCode = async (e) => {
    e.preventDefault();
    let codeConfirmer = await fetch(
      "https://dfgsdfgsdfgj32gsdg.mehrpol.com/api/user/auth/verify-code",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookPure}`,
        },
        body: JSON.stringify({
          code: Code,
        }),
      }
    );
    if (codeConfirmer.ok) {
      toast.success("شما با موفقیت وارد شدید!");
      router.push("/");
    } else {
      toast.error("کد وارد شده اشتباه است. مجددا تلاش نمایید!");
    }
  }; //End Handle Code

  return (
    <div className="container forgatenform">
      <div className="row d-flex justify-content-center align-items-center  mt-5">
        <div className="col-md-4 align-items-center">
          <form>
            <div class="mb-3">
              <label class="form-label">لطفا کد دریافتی را وارد فرمایید:</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="code"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>

            <button onClick={handleCode} type="submit" class="btn btn-primary">
              اعمال کد
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLoginCode;
