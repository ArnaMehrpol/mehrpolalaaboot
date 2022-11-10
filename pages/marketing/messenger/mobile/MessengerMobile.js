import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image'
import config from '../../utils/config';

//اکشن های ایجاد شده در ریداکس برای نمایش فایل ها از دیتابیس
import { fetchConversationAction } from '../redux/conversation/ConversationAction';
import { fetchSearchContent } from '../redux/searchContact/searchContactAction';
import { fetchSendMessage } from '../redux/sendMessege/sendMessegeAction';
import { fetchMakeConversation } from '../redux/makeConversation/makeConversationAction';
import { fetchGetMessage } from '../redux/getMessage/getMessegeAction';

import style from './MessengerMobile.module.css';
import loadingComponent from '../../loading/loadingComponent';

import Img1 from '/public/assets/img/logos/mehrpol.jpg'
import Img2 from '/public/assets/img/logos/b-2.png'
import Img3 from '/public/assets/img/logos/2.png'
import Img4 from '/public/assets/img/logos/1.png'
import Img5 from '/public/assets/img/logos/b-3.jpg'
//import patternChat from '/public/assets/img/patterns/3.svg'

const getItems ={
  floating_messege_title: '',
  floating_messege_content: ''
}
const getReceivers = []

const MessangerMobile = () => {
  
  const priority = 'low';
  const [chosenFile,setChosenFile] = useState();
  const [showNewMessege, setShowNewMessege] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showContact, setShowContact] = useState(true);
  const [startConversation, setStartConversation] = useState(false);
  const [clickOnMakeNewMessageButton,setClickOnMakeNewMessageButton] = useState(false);
  const [searchContent, setSearchContent] = useState();
  const [getIdConversatrion, setGetIdConversation] = useState();
  const [getMessegeText, setGetMessegeText] = useState();
  const [showListTitle, setShowListTitle] = useState(false)
  const [dataReloading, setDataReloading] = useState(false);
  const [selectTitleForConversation, setSelectTitleForConversation] = useState();
  const [doNotRepeat, setDoNotRepeat] =useState([]);
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [showContextConversation, setShowContextConversation] = useState(false);
  const [listTitleConversation,setListTitleConversation] = useState([])
  const [readMessage, setReadMessage] = useState(false)
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      };
  const dispatch = useDispatch();
  const dataConversation  =  useSelector( state => state.loadConversation);
  const search = useSelector(state => state.searchContent.data);
  const makeConv = useSelector(state => state.makeConversation.data);
  const sendMessage = useSelector(state => state.sendMessege);
  const getMessage = useSelector(state => state.getMessage.data);

  useEffect(()=>{
    dispatch(fetchConversationAction());    
  },[]);

  useEffect(()=>{
    if (dataReloading===true){
      dispatch(fetchConversationAction());
      setDataReloading(false)
    }
  },[dataReloading]);

  useEffect(()=>{
    if (dataReloading===true){
      dispatch(fetchConversationAction());
      setDataReloading(false)
    }
  },[dataReloading]);


  //بدست آوردن مقادیر عرض و طول صفحه نمایش
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  console.log({dataConversation});
  console.log({search});
  
  const searchChangeHandler = (event) =>{
    dispatch(fetchSearchContent(event.target.value))
    setSearchContent(event.target.value)
  };

  const getItemsChangeHnadler = (e) =>{
    getItems = {...getItems, [e.target.name]: e.target.value}
    console.log({getItems})
  }
  console.log({chosenFile});

  const createMessage = async () =>{
    await dispatch(fetchMakeConversation(getItems.floating_messege_title, priority, getReceivers[0].id))
    console.log({makeConv})
    if (makeConv.message == 'item created')
    {
      dispatch(fetchSendMessage(getReceivers[0].id, getItems.floating_messege_content, chosenFile))
      console.log({sendMessage})
    }
  }

  const deleteFileInChosenFilesList = (fileName) =>{
    setChosenFile(chosenFile.filter(file => file.name !== fileName))
  }

  const sendMessageInConversation = () =>{
    console.log(getIdConversatrion, getMessegeText)
    dispatch(fetchSendMessage(getIdConversatrion, getMessegeText, chosenFile))
  }

  console.log({listTitleConversation})

  return (
    <>
      <div hidden={!showNewMessege}>
        <span className={style.gh_containerSpan}></span>
        <div className={style.gh_containerDiv}>
          <div className='bg-white rounded-[20px]  w-[400px] my-10 mx-auto shadow shadow-slate-400'>
            <div className='flex justify-between w-full border-[2px] rounded-tl-[20px] rounded-tr-[20px] border-b-2 px-11 pt-3'>
              <i className="bi bi-envelope-plus text-[28px]"></i>
              <p className='text-[20px] font-semibold'>ایجاد پیام جدید</p>
              <i className="bi bi-x text-[32px] hover:text-red-600 cursor-pointer"
                  onClick={()=>{setShowNewMessege(false)
                                document.body.style.overflowY = 'auto'
                                setClickOnMakeNewMessageButton(false);
                                }}
                  ></i>
            </div>
            <div className='px-11 py-3'>
              <div className="relative z-0 mb-6 w-full group border-[2px] rounded-[10px] px-3">
                <input
                    autoComplete='off'
                    onChange={getItemsChangeHnadler} 
                    type="text" 
                    name="floating_messege_title" 
                    id="floating_messege_title" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_messege_title" className="px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:bg-slate-100 peer-focus:right-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">عنوان پیام</label>
              </div>
              {/* pointer-event-none */}
              <div className='flex'>
              <div
                hidden={!clickOnMakeNewMessageButton}
                className="relative z-0 mb-6 w-full group border-[2px] inline-block rounded-[10px] px-3">
                <div className='flex'>
                <div 
                  type="text" 
                  autoComplete='off'
                  name="floating_messege_receiver" id="floating_messege_receiver" 
                 className="block min-h-[32px] py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
                  <p>{getReceivers && getReceivers.name}</p>
                  {
                    
                    // getReceivers.length && getReceivers.map(reciever => 
                    //     <p key={reciever.id}
                    //       className='text-[#3f3f3f]'>{reciever.name} ' ' <i class="bi bi-trash text-[#c53232]"></i> </p>
                    // )
                  }
                </div>
                <label htmlFor="floating_messege_receiver" className="px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:bg-slate-100 peer-focus:right-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">گیرنده</label>
                
                </div>
              </div>
              <div className="dropdown opacity-100 z-20">
                  <button className="btn btn-secondary dropdown-toggle bg-[#908c8c]" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-search"></i>
                  </button>
                  
                  <ul className="dropdown-menu z-20 max-h-[250px] overflow-y-auto">
                    <input type='text' autoFocus
                      className="mx-3 my-2 w-auto py-2 px-2"
                      placeholder="جستجو ..."
                      onChange={searchChangeHandler}
                      value={searchContent}/>
                    {
                      search.data ?
                        search.data.map( search =><li 
                                                    className='dropdown-item cursor-pointer hover:text-[#ffffff] hover:bg-[#3691f2]'
                                                    key={search.id}
                                                    onClick={()=>{getReceivers=Array.from([...getReceivers,{id:search.id, name:search.name}])
                                                                  console.log({getReceivers})}}>{search.name}</li>) : <li>داده ای پیدا نشد</li>
                    }
                  </ul>
                </div>
              </div>
              
              <div className="relative z-0 mb-6 w-full group border-[2px] rounded-[10px] px-3">
                <textarea 
                    autoComplete='off'
                    name="floating_messege_content"
                    onChange={getItemsChangeHnadler} 
                    id="floating_messege_text" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_messege_content" className="px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:bg-slate-100 peer-focus:right-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">متن پیام</label>
                <p className='text-[10px] text-stone-500 py-1 px-1'>۲۹/۱۵۰ کاراکتر</p>
              </div>
              <div className='max-h-[100px] overflow-y-auto'>
                {
                  chosenFile && chosenFile.map(file =>
                    <div key={file.name} className='flex justify-between items-center w-fit px-2 pt-1 rounded-[5px] bg-[#e6e6e6]'>
                      <i className="bi bi-files text-[14px]"></i>
                      <p className='text-successful[12px] pb-0 mr-1'>{file.name}</p>
                      <i className="bi bi-trash text-[#c53232] hover:text-red-600 cursor-pointer mr-[5px]"
                          onClick={()=>deleteFileInChosenFilesList(file.name)}></i>
                    </div>
                    )
                }
              </div>
              <div className='flex justify-between mt-3'>
                <div className='cursor-pointer'>
                  <label
                    className='flex justify-between items-center px-2 py-1 rounded-md bg-green-600 hover:bg-green-500 text-white cursor-pointer'
                    htmlFor="upload-pic-hotel-main"
                  >
                    پیوست
                    <i className="bi bi-paperclip flex justify-between items-center px-2 text-[22px]"></i>
                  </label>
                    <input hidden 
                      onChange={(event)=>{
                        if (event.target.files && event.target.files[0]) {
                          setChosenFile(Array.from(event.target.files));
                          // setGetFiles(prevFiles => prevFiles = true)
                          console.log(event.target.files)
                        }
                      }}
                      id="upload-pic-hotel-main" type="file" multiple/>                
                </div>
                {/* <button 
                    className='flex justify-between items-center px-2 py-1 rounded-md bg-green-600 hover:bg-green-500 text-white'
                   >پیوست
                <i className="bi bi-paperclip flex justify-between items-center px-2 text-[22px]"></i></button> */}
                <button 
                      className='px-3 py-1 rounded-md bg-[#3b82f6] hover:bg-blue-400 text-white'
                      onClick={createMessage}>ارسال</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white px-11 rounded-[20px] border max-w-[950px] my-10 mx-auto shadow shadow-slate-400'>
        <h4 className='mt-8 mr-1 text-[18px] font-bold'>پیام ها</h4>
        <p className='mt-2 mr-1 text-[12px] '>لیست پیام های خود را در این قسمت ببینید.</p>
        <div className='flex mt-8 mb-14 min-h-[500px] rounded-[20px] border shadow-sm shadow-slate-400'>
          <div hidden={width >= 680 ? false : showChat} className='w-full border-l-2 sm:w-4/12'>
            <div className='sticky flex justify-evenly border-b-2 py-[5px] px-4 text-[16px] font-[500] items-center cursor-pointer bg-[#f2f2f2] hover:bg-[#cccccc] rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tl-[0px]'
                  onClick={()=> {
                                  setShowNewMessege(true)
                                  document.body.style.overflowY = 'hidden'
                                  setClickOnMakeNewMessageButton(true);
                                  getItems={
                                    floating_messege_title: '',
                                    floating_messege_content: ''
                                  }
                                }}>
                                  <p className='text-[18px]'>پیام جدید</p>
                <i className="bi bi-plus mr-4 text-[32px] align-middle text-center mt-1"></i>

            </div>
            <div className='border-b-2 py-3 px-2 cursor-pointer bg-[#f2f2f2] hover:bg-[#cccccc]'
                    style={{display: 'grid', gridTemplateColumns: '0.9fr 3fr', justifyContent:'space-between', alignItems: 'center'}}
                    onClick={()=>setShowListTitle(true)}
                  >
                  <div className='ml-2 mr-2'>
                    <Image className='rounded-[50%]' src={Img1} width='48' height='48'
                       onClick={()=>{setShowChat(true)}}/>

                  </div>
                <div style={{display: 'grid', gridTemplateColumns: '3fr 0.8fr', justifyContent:'space-between'}}>
                <span className='mx-2'
                      onClick={()=>{setShowChat(true)
                      }}>
                  <div className='flex justify-between'>
                    <div>
                      <p>مهرپل</p>
                    </div>
                    {/* <div className="btn-group dropstart">
                      <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-caret-down-fill z-20 mr-4 cursor-pointer"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">فنی
                          <ul>

                          </ul>
                        </li>
                        
                        <li class="dropdown-item">ابزارها</li>
                        <li class="dropdown-item">پشتیبانی</li>
                        <li class="dropdown-item">مالی و حسابداری</li>
                        <li class="dropdown-item">دپارتمان حقوقی و قراردادی</li>
                      </ul>
                    </div> */}
                  </div>
                  <div className='mt-2'>
                    <p className='text-[10px]'>جهت تماس با مشاوران فروش با ...</p>
                  </div>
                </span>
                {/* <p className='flex justify-center items-center text-center align-middle w-8 h-8 bg-red-500 text-white py-1 px-1 rounded-[50%]'
                    onClick={()=>{setShowChat(true)}}>۷</p>      */}
                </div>  

            </div>
            <ul className='text-[14px] overflow-y-auto max-h-[400px] min-h-[400px]'>
                {/* <li className='border-b-2 py-3 px-2 cursor-pointer bg-[#f2f2f2] hover:bg-[#cccccc]'
                    style={{display: 'grid', gridTemplateColumns: '0.9fr 3fr', justifyContent:'space-between', alignItems: 'center'}}
                    onClick={()=>setShowListTitle(true)}
                  >
                  <div className='ml-2 mr-2'>
                    <Image className='rounded-[50%]' src={Img1} width='48' height='48'
                       onClick={()=>{setShowChat(true)}}/>

                  </div>
                <div style={{display: 'grid', gridTemplateColumns: '3fr 0.8fr', justifyContent:'space-between'}}>
                <span className='mx-2'
                      onClick={()=>{setShowChat(true)}}>
                  <div className='flex justify-between'>
                    <div>
                      <p>مهرپل</p>
                    </div> */}
                    {/* <div className="btn-group dropstart">
                      <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-caret-down-fill z-20 mr-4 cursor-pointer"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">فنی
                          <ul>

                          </ul>
                        </li>
                        
                        <li class="dropdown-item">ابزارها</li>
                        <li class="dropdown-item">پشتیبانی</li>
                        <li class="dropdown-item">مالی و حسابداری</li>
                        <li class="dropdown-item">دپارتمان حقوقی و قراردادی</li>
                      </ul>
                    </div> */}
                  {/* </div>
                  <div className='mt-2'>
                    <p className='text-[10px]'>جهت تماس با مشاوران فروش با ...</p>
                  </div>
                </span>
                <p className='flex justify-center items-center text-center align-middle w-8 h-8 bg-red-500 text-white py-1 px-1 rounded-[50%]'
                    onClick={()=>{setShowChat(true)}}>۷</p>     
                </div>  
              </li> */}
              {
                dataConversation.loading === true ? <loadingComponent/> :
                !dataConversation.error == '' ? <div className='flex flex-col justify-center items-center'>
                                                  <p className='font-semibold mt-10'>بارگذاری اطلاعات با مشکل مواجه شده</p>
                                                  <button className='text-[16px]' onClick={() => setDataReloading(true)}>
                                                    <i onClick={() => setDataReloading(true)} title= 'بارگذاری مجدد' class="bi bi-arrow-clockwise"></i>
                                                  </button>
                                                </div> :
                !dataConversation.messege === 'successful' ? <p className='relative mt-5 font-semibold  align-middle text-center'>شما گفتگویی را شروع نکرده اید</p> :
                  (
                    // ()=>setDoNotRepeat(),
                  !dataConversation.data.data ? '':
                  dataConversation.data.data.data.map((conversation, index) =>
                  conversation.convtoable_id === index+1 &&
                    <li key={conversation.id} className='border-b-2 py-3 px-2 cursor-pointer bg-[#f2f2f2] hover:bg-[#cccccc]'
                      style={{display: 'grid', gridTemplateColumns: '0.9fr 3fr', justifyContent:'space-between', alignItems: 'center'}}
                        onClick={()=>{setGetIdConversation(conversation.convtoable_id)
                                      // setListTitleConversation([...listTitleConversation, [conversation.title]])
                                      setShowListTitle(true)
                                      setShowContextConversation(false)}}
                        >
                        <div className='ml-2 mr-2'>
                        {/* URL.createObjectURL(`${conversation.convtoable.logo_link}+'/'+${conversation.convtoable.logo_file}`) */}
                          <Image className='rounded-[50%]' src={Img2} width='48' height='48'
                             onClick={()=>{setShowChat(true)}}/>
                        </div>
                      <div style={{display: 'grid', gridTemplateColumns: '3fr 0.8fr', justifyContent:'space-between'}}>
                      <span className='mx-2'
                            onClick={()=>{setShowChat(true)}}>
                        <div className='flex justify-between'>
                          <div>
                            <p>{conversation.convtoable.name}</p>
                          </div>
                          {/* <div className="btn-group dropstart">
                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bi bi-caret-down-fill z-20 mr-4 cursor-pointer"></i>
                            </button>
                            <ul className="dropdown-menu">
                              <li className="dropdown-item">پیام جدید</li>
                              {

                              }
                            </ul>
                          </div> */}
                        </div>
                        <div className='mt-2'>
                          <p className='text-[10px]'>{conversation.last_message.body}</p>
                        </div>
                      </span>

                      {
                      conversation.messages_un_read_count &&
                      <p className='flex justify-center items-center text-center align-middle w-8 h-8 bg-red-500 text-white py-1 px-1 rounded-[50%]'
                        onClick={()=>{setShowChat(true)}}>{conversation.messages_un_read_count}</p> 
                        }
                      </div>  
                    </li>
                    )
                  )
            }
            </ul>
          </div>
          <div hidden={width >= 680 ? false : !showChat} className='flex flex-col justify-between w-full sm:w-9/12' >
            <div className='flex justify-between px-3 py-[14px] border-b-2'>
              <div>
                <i className="bi bi-search cursor-pointer text-[23px]" onClick={()=>{showSearchBox ? setShowSearchBox(false) : setShowSearchBox(true)}}></i>
                <input hidden={!showSearchBox} className='border-none outline-none mr-2 transition-[all 0.8s ease-in]' type='text' placeholder='پیام را جستجو کنید'/>
              </div>
              <div className='flex items-center'>
                <Image className='rounded-[50%]' src={Img2} width='30' height='30'/>
                <span className='mr-2'>
                  <p>
                    کابینت سازان
                  </p>
                </span> 
              </div>
              <div className="btn-group dropend">
                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots-vertical cursor-pointer text-[23px]"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">گزارش اخطار</a></li>
                  <li><a class="dropdown-item" href="#">مسدود</a></li>
                </ul>
              </div>
              {/* <i className="bi bi-three-dots-vertical cursor-pointer"></i> */}
            </div>
            {/* style={patternChat} */}
            <div className='bKpattern'>
            <div className='flex flex-col relative max-h-[500px] overflow-y-auto' on >
              <span ></span>
              <div className='relative top-0 flex justify-start w-full px-3 py-1 mb-3'>
                <button className='py-1 px-3 border-none rounded-md  bg-[#e38129] text-white sm:hidden'
                        onClick={()=>{setShowChat(false)}}>
                <i class="bi bi-arrow-right"></i>
                  </button>
              </div>
              {
               !showListTitle && !showContextConversation ?
                <p className='text-center  text-[#222222] text-[24px] font-bold'>برای شروع گفتگو یک مخاطب را انتخاب کنید</p> :
                <div hidden={!showListTitle} className=" flex flex-col text-center w-[95%] max-h-[300px] overflow-y-auto mx-auto align-top text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li aria-current="true" class="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600">
                      موضوعات
                  </li>
                  {
                    !dataConversation.data.data ? '':
                    dataConversation.data.data.data.map(conversation =>
                      <li className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        onClick={()=>{
                                      setSelectTitleForConversation(conversation.title)
                                      setShowContextConversation(true)
                                      setShowListTitle(false)
                                      dispatch(fetchGetMessage(conversation.id))
                                      setReadMessage(true)
                                      }}>
                      {conversation.title}
                      </li>
                    )
                  }
                  {/* <a href="#" className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                      فنی
                  </a>
                  <a href="#" className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                      ابزارها
                  </a>
                  <a href="#" className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                      مالی و حسابداری
                  </a>
                  <a href="#" className="block py-2 px-4 w-full rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    دپارتمان حقوقی و قراردادی
                  </a> */}
              </div>
              }
              
                          
              <div hidden={!showContextConversation} className='text-[12px] bg-transparent'>
                {
                getMessage.loading ? '' : getMessage.error ? '' : !getMessage.data ? "" :
                !getMessage.data.message === 'successful' ? '' : getMessage.data.data.map(message =>
                  <div key={message.id}>
                    
                    {
                      message.messageable_type === "App\\Models\\User" ?
                      <div className='w-full flex justify-start'>
                        <div className='w-5/12 flex justify-start'>
                          <div className='w-fit min-w-[120px] rounded-tl-[20px] rounded-br-[20px] px-4 py-2 my-2 mx-2 bg-[#d6e6ff]'>
                          {message.itemFiles && message.itemFiles.map(file =>
                              file.file_name.search(".png") !== -1 || file.file_name.search(".jpeg") !== -1 ||
                              file.file_name.search(".jpg") !== -1 || file.file_name.search(".svg") !== -1 || 
                              file.file_name.search(".svg") !== -1 ?
                                  <img className='w-[45px] mb-[5px]' src={`${file.file_link}/${file.file_name}`} alt={file.name}/> :
                              <i className="bi bi-file-earmark text-[22px] cursor-pointer">
                                <a href={`${getMessage.data.data.path}/storage/${file.file_name}`}></a></i>)
                            }
                            <p className=''>{message.body}</p>
                            <div className='flex justify-between mt-2'>
                              {
                                !message.read ?
                                  <i className="bi bi-check"></i>:
                                  <i className="bi bi-check-all text-[14px] text-blue-500"></i>
                              }
                              <p>۱۳:۴۰</p>
                            </div>
                          </div>
                        </div>
                      </div> 
                      : 
                      <div className='w-full flex justify-end'>
                        <div className='w-5/12 flex justify-end'>
                          <div className='w-fit min-w-[120px] rounded-tl-[20px] rounded-br-[20px] px-4 py-2 my-2 mx-2 bg-[#f2f2f2]'>
                            {message.itemFiles && message.itemFiles.map(file =>
                              file.file_name.search(".png") !== -1 || file.file_name.search(".jpeg") !== -1 ||
                              file.file_name.search(".jpg") !== -1 || file.file_name.search(".svg") !== -1 || 
                              file.file_name.search(".svg") !== -1 ?
                                  <img className='w-[280px]' src={`${config.file_url}/${file.file_link}/${file.file_name}`} alt={file.name} /> :
                              <i className="bi bi-file-earmark text-[22px] cursor-pointer">
                                <a href={`${file.file_link}/${file.file_name}`}></a></i>)
                            }
                            <pre className='mt-2'>{message.body}</pre>
                            <div className='flex justify-between mt-2'>
                              <p>۱۳:۴۰</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                )
              }
              </div>
            </div>
          </div>
            <div className='flex relative justify-center py-2 pr-1 items-center bg-[#e6e6e6] h-/12 rounded-bl-[20px]' >
            <div className='cursor-pointer'>
                  <label
                    className='flex justify-between items-center rounded-md cursor-pointer'
                    htmlFor="upload-pic-hotel-main"
                  >
                    <i className="bi bi-paperclip flex justify-between items-center px-2 text-[22px]"></i>
                  </label>
                    <input hidden 
                      onChange={(event)=>{
                        if (event.target.files && event.target.files[0]) {
                          setChosenFile(Array.from(event.target.files));
                          // setGetFiles(prevFiles => prevFiles = true)
                          console.log(event.target.files)
                        }
                      }}
                      id="upload-pic-hotel-main" type="file" multiple={false}/>                
                </div>
              <i className="bi bi-mic px-2 text-[20px] cursor-pointer ml-3"></i>
              <div className='flex justify-between items-center w-10/12 bg-white px-2 ml-2 py-1 rounded-[10px]'>
                <input 
                  className='border-none outline-none text-xs w-full' 
                  type='text' 
                  value={getMessegeText} 
                  placeholder='پیام خود را تایپ کنید'
                  onChange={(e)=> setGetMessegeText(e.target.value)}/>
                <i className="bi bi-send-fill -rotate-90 text-blue-700 text-[16px] cursor-pointer"
                    onClick={sendMessageInConversation}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessangerMobile
