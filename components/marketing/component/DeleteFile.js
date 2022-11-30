import React, { useState } from 'react'

import styleDeleteItem from './DeleteFile.module.css'

const DeleteFile = ({fileName, ConfirmOrNot}) => {

  //const [answer, setAsnwer] = useState(false)
  let answer

  return (
    <div className={styleDeleteItem.gh_DeleteFileQuestion}>
      <span className={styleDeleteItem.gh_DeleteFileQuestionSpan}>
        <div className={styleDeleteItem.gh_DeleteFileQuestionDiv}>
          <p>{`آیا از حذف فایل ${fileName} اطمینان دارید؟`}</p>
          <div className={styleDeleteItem.gh_DeleteQuestionButtonDiv}>
            <button onClick={()=>{
              answer = true;
              ConfirmOrNot(answer, fileName)}}>بله</button>
            <button onClick={()=>{
              answer = false;
              ConfirmOrNot(answer, fileName)}}>خیر</button>
          </div>
        </div>
      </span>
    </div>
  )
}

export default DeleteFile
