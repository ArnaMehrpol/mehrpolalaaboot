import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

//کامپوننتی برای نمایش فایل ها و فولدرها
import CardFiles from '../Cards/CardFiles'
import CardFilesFetchDataBase from '../Cards/CardFilesFetchDataBase';


//اکشن های ایجاد شده در ریداکس برای نمایش فایل ها از دیتابیس
import { fetchData } from '../../redux/loadData/LoadDataAction';
import { fetchPostFolder } from '../../redux/postFolder/PostFolderAction';
import { fetchPostFiles } from '../../redux/postFiles/PostFilesAction';
import { fetchDeleteFilesAndFolder } from '../../redux/deleteFilesAndFolder/DeleteFilesAndFolderAction';

import loadingSvg from '../../../../../public/assets/img/loading/loading.svg'

import loadingComponent from './loading/loadingComponent';

import styleChooseFile from './ChooseFile.module.css'
import GetNameFolder from './GetNameFolder';

const filesRoot = ''
const rootData = []
const selectedFiles = []
const chilrenContent = []
const chooseFileForShowInChooseFile = []
const parentFolder = []
const filesSelectedForAction=[]

const ChooseFile = ({closeChooseFile, chooseFileForSendInMainRoot, addressFilesRoot}) => {
 // document.body.style.overflowY = 'auto'
  const [folderId, setFolderId] = useState();
  const [doFileSend, setDoFileSend] = useState(false);
  const [doCreateFolder,setDoCreateFolder] = useState(false);
  const [doDeleteItem, setDoDeleteItem] = useState(false);
  const [chosenFiles, setChosenFiles] = useState();
  const [getFiles, setGetFiles] = useState(false);
  //const [filesSelectedForAction, setFilesSelectedForAction] = useState();
  const [getDataBaseFiles, setGetDataBaseFiles] = useState();
  const [showGetNameFolderComponent, setShowGetNameFolderComponent] = useState(false);
  const [loadFiles, setLoadFiles] = useState(false);
  const [sendFileLoading, setSendFileLoading] = useState(false);
  const [chosenAnyFolder, setChosenAnyFolder] = useState(false);
  const [folderName, setFolderName] = useState({ });
  const [turnBackFolder, setTurnBackFolder] = useState(false);
  const [sendFiles, setSendFiles] = useState(false);
  const [dataReloading, setDataReloading] = useState(false);
  
  const dispatch = useDispatch();
  let dataFiles  =  useSelector( state => state.loadData);
  const createFolder = useSelector(state => state.postCreateFolder);
  const deleteFilesAndFolders = useSelector(state => state.deleteFilesAndFolder);
  //const sendFiles = useSelector(state => state.sendFilesToDataBase)
  const states = {
    folder_id: null,
    folder_content: {},
    indexOf_folder: ''
  }
  
  useEffect(()=>{
    dispatch(fetchData());
    chooseFileForShowInChooseFile = null
  },[])

  useEffect(()=>{
    console.log({dataReloading})
    if(dataReloading === true){
      console.log('this is Reloading useeffect')
      dispatch(fetchData());
      setDataReloading(false);
    }
  },[dataReloading])

  useEffect(()=>{
    if(doCreateFolder === true){
      // console.log('this is create folder useeffect')
      dispatch(fetchData());
      setDoCreateFolder(false);
    }
  },[doCreateFolder])

  useEffect(()=>{
    if(doFileSend === true){
      console.log('this is send File useeffect')
      dispatch(fetchData());
      setDoDeleteItem(false);
    }
  },[doFileSend])

  useEffect(()=>{
    if(doDeleteItem === true){
      // console.log('this is delete item useeffect')
      dispatch(fetchData());
      setDoFileSend(false);
    }
  },[doDeleteItem])


  useEffect(()=>{
    setLoadFiles(true)
    addressFilesRoot(dataFiles.data.root)
  },[dataFiles.data])
  
  useEffect(()=>{
    filesSelectedForAction = []
  },[chosenFiles])
  

  console.log({dataFiles})
  console.log({createFolder})
  console.log({filesRoot})
  
  const closeGetNameFolderComponent = () =>{
    setShowGetNameFolderComponent(false)
  }
  
  const filesSelectedForActionFunc = (filesSelected) =>{
    filesSelectedForAction = filesSelected
    console.log({filesSelectedForAction})
  }

  const selectedFolderFunc = (selectedFolder) =>{
    //React.createElement('button', {}, selectedFolder.name)
    setFolderName(Array.from(selectedFolder))

    setTurnBackFolder(false)
    console.log('folllderrrnnnname: ',selectedFolder)
    setChosenAnyFolder(true)
    let lastFolder = Object.values(selectedFolder).pop()
    let temp = []
    dataFiles.data.files.filter(
      file =>{
        if(file.name === lastFolder.file_name){
          file.children ? file.children.map(child=>
            temp = [...temp, child]
            ) : temp = 'فایلی وجود ندارد'
        }
      }
    )
    chilrenContent = temp
    console.log({temp})
    console.log({chilrenContent})
    
  }

  const doDeleteItemFunc = () =>{
    setDoDeleteItem(true);
  }

  const doCreateFolderFunc = () =>{
    setDoCreateFolder(true);
  }

  const doFileSendFunc = () =>{
    console.log('فایل ذخیره شده اجرا شده')
    setDoFileSend(true);
  }

  const theFolderOpenClickHandler = (folder_id, folder_name, returnIndex) =>{
    console.log({returnIndex})
    setFolderName(current =>
      current.filter((folder, index) =>{
        console.log('indexfolder: ', index)
        return index <= (returnIndex);
      }),
    );
    let lastFolder = Object.values(folderName).pop()
    let temp = []
    dataFiles.data.files.filter(
      file =>{
        if(file.name === lastFolder.file_name){
          file.children ? file.children.map(child=>
            temp = [...temp, child]
            ) : temp = 'فایلی وجود ندارد'
        }
      }
    )
    chilrenContent = temp
    console.log({temp})
    console.log({chilrenContent})
  }

  const sendFileFalse = () =>{
    setSendFiles(false)
  }

  const chooseFileForShowFunc = (chooseFileForShow) =>{
    chooseFileForShowInChooseFile = chooseFileForShow
  }

  console.log({chooseFileForShowInChooseFile})
  console.log({folderName});
  return (
    <>
      <div hidden={!showGetNameFolderComponent}>
        <GetNameFolder closeComponent={closeGetNameFolderComponent} getDoCreateFolder={doCreateFolderFunc} parent_id={folderName}/>
      </div>
      <div hidden={!sendFileLoading} className={styleChooseFile.gh_SendFileLoadingDiv}>
        <Image src={loadingSvg} width='100px' height='100px'/>
        <h5>در حال ارسال فایل ...</h5>
      </div>
      <span className={styleChooseFile.gh_containerSpan}>     
      <div className={styleChooseFile.gh_containerDiv}>
        <div className={styleChooseFile.gh_headerPage}>
          <header>
            <h5>مدیریت فایل ها</h5>
            <i className="bi bi-x-square-fill"
                onClick={(e)=>{closeChooseFile()
                }}></i>
          </header>
          <hr/>
        </div>
        <div className={styleChooseFile.gh_mainPage}>
          <div className={styleChooseFile.gh_mainPageRight}>
            <div className={styleChooseFile.gh_mainPageRightAddressBar}>
              <ul >
                <li onClick={()=>{setChosenAnyFolder(false)
                                  setTurnBackFolder(true)
                                  setFolderName([])}}>ریشه</li>
                {
                  chosenAnyFolder && folderName.map(((folder, index) =>
                    <li onClick={()=>{
                    theFolderOpenClickHandler(folder.file_id, folder.file_name, index)
                    }} key={folder.file_id}>
                      <span>
                        {folder.file_name}
                      </span>
                    </li>))
                }
              </ul>
            </div>
            {
              dataFiles.loading ?
              <div className={styleChooseFile.gh_mainPageRightLoadingDiv}>
                <Image src={loadingSvg} width='100px' height='100px'/>
                <h5>در حال بارگذاری ...</h5>
              </div>:
              dataFiles.error ?
              <div className={styleChooseFile.gh_mainPageRightLoadingDiv}>
                <h5>بارگذاری فایل ها با مشکل مواجه شده است</h5>
                  <button onClick={() => setDataReloading(true)}>
                    <i onClick={() => setDataReloading(true)} title= 'بارگذاری مجدد' class="bi bi-arrow-clockwise"></i>
                  </button>
              </div> :
                chosenAnyFolder === false ?
                  loadFiles === true && (rootData= dataFiles.data.root, dataFiles.data.files.map(file => 
                    <CardFilesFetchDataBase key={file.id} doFileDelete={doDeleteItemFunc} files={file} rootData={rootData} getTurnBackFolder={turnBackFolder} chooseFileForShow={chooseFileForShowFunc} selectedFolder={selectedFolderFunc}/>
                
                  )) :
                  chosenAnyFolder === true ? 
                    chilrenContent ===  'فایلی وجود ندارد' ? 
                      <p>پوشه خالی است</p> :
                      chilrenContent.map(file =>
                      <CardFilesFetchDataBase key={file.id} files={file} doFileDelete={doDeleteItemFunc} getTurnBackFolder={turnBackFolder} chooseFileForShow={chooseFileForShowFunc} selectedFolder={selectedFolderFunc}/>
                      )
                    : ''
                // <p>{dataFiles.data.data.files[0].type === 'folder' ? 'folder' : 'file'}</p>
            }
          </div>
          <div className={styleChooseFile.gh_mainPageLeft}>
            <div className={`${styleChooseFile.gh_mainPageLeftButtonsSend}`}>
              <i onClick={()=>{setSendFiles(true)
                reloadDataFunc()
                }} 
                title='ارسال فایل' className="bi bi-send "></i>
            </div>
            <div className={styleChooseFile.gh_mainPageLeftButtonsTrash}>
              <i title='حذف فایل انتخاب شده' className="bi bi-trash"></i>
            </div>
            
            {
              chosenFiles !== undefined && chosenFiles !== null ? chosenFiles.map(file => 
                <CardFiles key={file.name} files={file} clickedSendFilesButton={sendFiles} getDoFileSend={doFileSendFunc} selectedFolder={folderName} filesSendDone={sendFileFalse} filesSelectedForAction={filesSelectedForActionFunc}/>
              ):''
            }
          </div>
        </div>
        <div className={styleChooseFile.gh_divBottom}>
            <hr className='mb-3'/>
          <footer>
            <div>
              <div>
                <button onClick={()=>setShowGetNameFolderComponent(prevVal => prevVal = true)} className={styleChooseFile.gh_addFolderButton}>ایجاد پوشه
                <i className="bi bi-plus-square"></i></button>
              </div>
              <div>
                <button 
                  className={styleChooseFile.gh_addButton}
                  onClick={(e)=>{closeChooseFile()
                    chooseFileForSendInMainRoot(chooseFileForShowInChooseFile)
                  }}>
                    
                    بازکردن
                </button>
              </div>
              <div>
                <button hidden
                  // onClick={()=>{
                  //   dispatch(fetchDeleteFilesAndFolder(21))
                  //   deleteFilesAndFolders.loading ?
                  //     <p>Loading...</p> :
                  //   deleteFilesAndFolderClickHandler.error ?
                  //     <p>{deleteFilesAndFolderClickHandler.error}</p> :
                  //   console.log('داده با موفقیت پاک شد')
                  // }}
                className={styleChooseFile.gh_delButton}>حذف
                  <i className="bi bi-trash"></i></button>
              </div>
            </div>
            <div>
              <div>
                <label
                  className={styleChooseFile.gh_uploadButtonDiv}
                  htmlFor="upload-pic-hotel-main"
                >
                  بارگذاری فایل جدید
                 
                  <i className="bi bi-upload"></i>
                </label>
                  <input hidden 
                    onChange={(event)=>{
                      if (event.target.files && event.target.files[0]) {
                        setChosenFiles(Array.from(event.target.files));
                        setGetFiles(prevFiles => prevFiles = true)
                        console.log(event.target.files)
                      }
                    }}
                    id="upload-pic-hotel-main" type="file" multiple/>                
              </div>
            </div>
          </footer>
        </div>
      </div>
      </span> 
    </>
  )
}

export default ChooseFile