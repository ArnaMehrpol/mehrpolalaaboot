import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchPostFolder } from '../../redux/postFolder/PostFolderAction';

import styleInputNameFolder from './GetNameFolder.module.css'

const GetNameFolder = ({closeComponent, parent_id, getDoCreateFolder}) => {

  const [nameFolder, setNameFolder] = useState('')
  const dispatch = useDispatch();
  const createFolder = useSelector(state => state.postCreateFolder)
  console.log({parent_id})

  let folder_id
  if(Object.keys(parent_id).length !== 0){
    let lastFolder = Object.values(parent_id).pop()
    folder_id = lastFolder.file_id
  }else
    folder_id = null
  console.log({folder_id})

  //let id = parent_id[0] === undefined ?  null : parent_id[0].file_id
  console.log({folder_id})
  const createFolderClickHandler = () =>{
    
    console.log(nameFolder)
    dispatch(fetchPostFolder(nameFolder,folder_id))
    createFolder.loading ?
      <p>loading...</p> :
    createFolder.error ? 
      console.log('ساخت پوشه جدید: ',createFolder.error):
      createFolder.loading === false ||  createFolder.error === ''  || createFolder.data.message === 'successful' ?
    (
      getDoCreateFolder()
    )
    : ''
    closeComponent()
  }

  return (
    <>
      <span className={styleInputNameFolder.gh_containerSpan}></span>
      <div className={styleInputNameFolder.gh_NameFolderContainer}>
        <div className={styleInputNameFolder.gh_NameFolderInputDiv}>
          <input 
            name='namefolder' 
            value={nameFolder}  
            onChange={(e) => setNameFolder(e.target.value)} 
            placeholder='نام پوشه را وارد کنید' 
            type='text'/>
        </div>
        <div className={styleInputNameFolder.gh_NameFolderButtonDiv}>
          <button onClick={createFolderClickHandler} >تایید</button>
          <button onClick={closeComponent}>انصراف</button>
        </div>
      </div>
    </>
  )
}

export default GetNameFolder
