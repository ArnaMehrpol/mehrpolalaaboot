import React, { useState } from "react";
import axios from "axios";

const Getting_data_address = ({ token }) => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const [token, settoken] = useState({ token });
  axios
    .get(url + "api/user/addresses", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(function (response) {
      const myUser = response.data[0];

      document.getElementById("first_name").value = myUser.name;
      document.getElementById("city_option").value = myUser.place_id;
      document.getElementById("description").value = myUser.description;
      document.getElementById("postal_code").value = myUser.postal_code;
      document.getElementById("mobile").value = myUser.mobile;
    })
    .catch(function () {});
};

export default Getting_data_address;
