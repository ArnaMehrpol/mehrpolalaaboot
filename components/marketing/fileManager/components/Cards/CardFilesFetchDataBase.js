import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDeleteFilesAndFolder } from '../../redux/deleteFilesAndFolder/DeleteFilesAndFolderAction';
import { iconFileFileManager } from '../../utils/iconFilesFilemanager';
import DeleteFileQuestion from '../share/DeleteFileQuestion';

import styleCardFiles from './CardFilesFetchDataBase.module.css'

const state =[]

const folderName =[]
const chooseFile=[]

const CardFilesFetchDataBase = (props) => {
  const {files, doFileDelete, selectedFolder, rootData, getTurnBackFolder, chooseFileForShow} = props;
  // console.log('fileincard:',files)
  console.log({files})
  const dispatch = useDispatch();
  const deleteFilesAndFolders = useSelector(state => state.deleteFilesAndFolder)

  const [imageInDatabase,setImageInDatabase ] = useState()
  const [showDeleteItemQuestion, setShowDeleteItemQuestion] = useState(false);

  useEffect(()=>{
    chooseFile=[]
  },[])
  const doubleClickHandler = () =>{
    console.log('Hi doubleClick')
    if(getTurnBackFolder === true){
      state = []
      getTurnBackFolder=false;
    }
    if (files.type === 'folder'){
      // state.file_id = files.id;
      // state.file_name = files.name
      // if()
      let temp = state.find(file => file.id !== files.id)
      console.log({temp})
      // if(state.find(file => file.id !== files.id)){
      state = [
        ...state,
        {file_id: files.id,
        file_name: files.name}]
      selectedFolder(state)
    //}
    }

    console.log({state})
  }

  const DeleteItemsAction = (answer) =>{
    // console.log({confirm})
    if(answer === true){
      dispatch(fetchDeleteFilesAndFolder(files.id))
      deleteFilesAndFolders.loading ?
        <p>Loading...</p> :
      deleteFilesAndFolders.error ?
        <p>{deleteFilesAndFolders.error}</p> :
        deleteFilesAndFolders.loading === false ||  deleteFilesAndFolders.error === ''  || deleteFilesAndFolders.data === 1 ?
      doFileDelete() : ''
      setShowDeleteItemQuestion(false)
    }
    else if (answer === false){
      setShowDeleteItemQuestion(false)
    }
  }

  const chooseFileFunc = (e) =>{
    if (e.target.checked){
      chooseFile.push(files)
      chooseFileForShow(chooseFile)
    }else{
      let temp = chooseFile
      chooseFile = temp.filter(file=> file.id !== files.id)
      chooseFileForShow(chooseFile)
    }
    
  }
  return (
    <>
    <div hidden={!showDeleteItemQuestion}>
      <DeleteFileQuestion fileName={files.name} ConfirmOrNot={DeleteItemsAction} />
    </div>
    <div className={styleCardFiles.gh_container}>
      <div className='flex justify-between items-center'>
        <div className={styleCardFiles.gh_controller}>
          <i 
            onClick={()=>{
              setShowDeleteItemQuestion(true)
            }} 
            className="bi bi-trash"></i>
        </div>
        <div>
          {
            files.type.search('folder') !== -1 ? '' :
            <input onClick={chooseFileFunc}  className='ml-1' type='checkbox' />
          }
        </div>
      </div>
      {/* <hr/> */}
      <div className={styleCardFiles.gh_Icon} onDoubleClick={doubleClickHandler}>
        {
          files.type.search('folder') !== -1 ?
            <i className="bi bi-folder-fill text-[22px] text-cyan-500 bg-white"></i> :
          iconFileFileManager(files.name) === 'image' ?
            <img src={`${rootData}/${files.name}`} alt={files.name}/> 
            :
            iconFileFileManager(files.name)
        }
      </div>      
      <div className={styleCardFiles.gh_fileName} onDoubleClick={doubleClickHandler}>
        <p title={files.name}>{`${files.name.slice(0, 10)}...`}</p>
      </div>
    </div>
    </>
  )
}

export default CardFilesFetchDataBase


// <i className="bi bi-file-earmark-ppt"></i>
// <i className="bi bi-folder"></i>
// <i className="bi bi-folder2"></i>
// <i className="bi bi-folder2-open"></i>
// <i className="bi bi-filetype-sql"></i>
// <i className="bi bi-filetype-mov"></i>
// <i className="bi bi-folder-fill"></i>
// <i className="bi bi-x-square-fill"></i>
// <i className="bi bi-x-square"></i>
// <i className="bi bi-trash-fill"></i>
// <i className="bi bi-trash"></i>