import React, { useState } from "react";

import "react-calendar-datetime-picker/dist/index.css";
import DtPicker, { convertToEn } from "react-calendar-datetime-picker";
import { enBirthdatSetter } from "../pages/profile/info";

const Calendar = ({ birthday }) => {
  const [date, setDate] = useState(null);
  const [enDate, setEnDate] = useState(null);
  const enSetter = (e) => {
    setDate(convertToEn(e.target.value));
  };
  return (
    <div className="container my-3">
      <DtPicker
        onChange={(e) => {
          setDate(e.target.value);
        }}
        local="fa"
        showWeekend={true}
        inputId="calender"
        placeholder="تاریخ تولد خود را انتخاب فرمایید"
        className="myDtpicker"
      />

      <input id="enBirthday" type="text" value={convertToEn(date, "-")} />
    </div>
  );
};

export default Calendar;
