import React, { useState } from 'react'

import styleDeleteItem from './DeleteFileQuestion.module.css'

const DeleteFileQuestion = ({fileName, ConfirmOrNot}) => {

  //const [answer, setAsnwer] = useState(false)
  let answer

  return (
    <div className={styleDeleteItem.gh_DeleteFileQuestion}>
      <span className={styleDeleteItem.gh_DeleteFileQuestionSpan}></span>
      <div className={styleDeleteItem.gh_DeleteFileQuestionDiv}>
        <p>{`آیا از حذف فایل ${fileName} اطمینان دارید؟`}</p>
        <div className={styleDeleteItem.gh_DeleteQuestionButtonDiv}>
          <button onClick={()=>{
            answer = true;
            ConfirmOrNot(answer)}}>بله</button>
          <button onClick={()=>{
            answer = false;
            ConfirmOrNot(answer)}}>خیر</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteFileQuestion
