import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostFiles} from '../../redux/postFiles/PostFilesAction'
import { iconFileFileManager } from '../../utils/iconFilesFilemanager';

import CropImage from '../share/CropImage/CropImage'
// import TUIImageEditor from '../share/TUIImageEditor';

const filesSelected = []

import styleCardFiles from './CardFiles.module.css'

const CardFiles = (props) => {
  const {files, filesSelectedForAction, getDoFileSend, filesSendDone, clickedSendFilesButton, selectedFolder, doingEdit} = props;
  console.log('fileincard:',files)
  const [showEditor, setShowEditor] = useState(false);
  const refCheckBox = useRef(null)
 
  const dispatch = useDispatch();
  const sendFiles = useSelector(state => state.sendFilesToDataBase)

  useEffect(()=>{
    filesSelected = []
  },[])

  useEffect(()=>{
    const sendFilesAction = async () =>{
      if(clickedSendFilesButton === true){
        let folder_id
        if(Object.keys(selectedFolder).length !== 0){
          let lastFolder = Object.values(selectedFolder).pop()
          folder_id = lastFolder.file_id
        }else
          folder_id = null
          await filesSelected.map(file =>{
          dispatch(fetchPostFiles(file,folder_id))    
          sendFiles.loading ? 
            setSendFileLoading(true):
          sendFiles.error ?
            setSendFileLoading(false):
          sendFiles.loading === false ||  sendFiles.error === ''  || sendFiles.data.message === 'successful' ?
            getDoFileSend() : ''
        })
        filesSendDone()
        
      }

    }
    sendFilesAction()
  },[clickedSendFilesButton])

  const selectFileClickHandler = () =>{
    
    console.log(refCheckBox.current)
    refCheckBox.current.checked === false ? refCheckBox.current.checked = true : refCheckBox.current.checked = false
    
    if(refCheckBox.current.checked === true){
      filesSelected = [...filesSelected, files]
    }
    else if(refCheckBox.current.checked === false){
      let indexOfNameFile = filesSelected.indexOf(files.name)
      console.log({indexOfNameFile})
      filesSelected.splice(indexOfNameFile,1)
    }
    filesSelectedForAction(filesSelected)
  }

  const checkedFilesChangeHandler = (e) =>{
    if(e.target.checked === true){
      filesSelected = [...filesSelected, files]
    }else if(e.target.checked === false){
      let indexOfNameFile = filesSelected.indexOf(files.name)
      console.log({indexOfNameFile})
      filesSelected.splice(indexOfNameFile,1)
    }
    filesSelectedForAction(filesSelected)
  }

  const closeEditorFunc = () =>{
    setShowEditor(false);
  }

  return (
    <>
      <div hidden={!showEditor}>

      </div>
      <div className={styleCardFiles.gh_container}>
        <div className={styleCardFiles.gh_controller}>
          <input onClick={checkedFilesChangeHandler} ref={refCheckBox} id='checkBoxSelectFile' type='checkbox'/>
          <i onClick={()=>{
            setShowEditor(true)
          }} class="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </div>
        <div className={styleCardFiles.gh_Icon} onClick={selectFileClickHandler} >
          {
            iconFileFileManager(files.name) === 'image' ?
            
                <Image src={URL.createObjectURL(files)} width='45' height='45' alt={files.name}/> 
               :
                iconFileFileManager(files.name)
          }
        </div>      
        <div className={styleCardFiles.gh_fileName} onClick={selectFileClickHandler}>
          <p title={files.name}>{`${files.name.slice(0, 10)}...`}</p>
        </div>
      </div>
    </>
  )
}

export default CardFiles

