import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

import styleDate from './SiteCalender.module.css'
import { useState } from "react";

export default function SiteCalender({getBirthdate, search, valueDate}) {
  
 
  return (
    <DatePicker
      range ={!getBirthdate}
      eachDaysInRange
      render={<CustomRangeInput selectBirthdate={getBirthdate} search={search} />}
      numberOfMonths={getBirthdate ? 1 : 2}
      plugins={[
        <Footer position="bottom" />
      ]}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
    />
  )
}

function CustomRangeInput({openCalendar, value, selectBirthdate, handleValueChange, search}) {
  let from = value[0] || ""
  let to = value[1] || ""
  
  value = from && to ? "از " + from + "، تا " + to : from
  value
  return (
    <div className={selectBirthdate ? styleDate.dateSearchBus : styleDate.dateSearch}>
      <input
        onFocus={openCalendar}
        value={from}
        onChange={handleValueChange}
        readOnly
        style={{width: (search ? '200px' : '')}}
        placeholder={!search ? (selectBirthdate ? 'تاریخ تولد را وارد کنید' : 'تاریخ') : 'از'}
      />
      <input
        hidden={selectBirthdate}
        onFocus={openCalendar}
        onChange={handleValueChange}
        value={to}
        readOnly
        style={{width: (search ? '200px' : '')}}
        placeholder={!search  ?  'تاریخ'  : 'تا'}
      />
    </div>
  )
}