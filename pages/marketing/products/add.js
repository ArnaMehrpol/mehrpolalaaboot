import React, { useRef, useState, useEffect, createElement } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import MarketingLayout from '../../../components/marketing/layout/MarketingLayout'
import MarketingMainHeader from '../../../components/marketing/marketingHeader/MarketingMainHeader'
import MainRoot from "../../../components/marketing/fileManager/components/MainRoot";
import Cookies from "universal-cookie";
import { axiosSetup } from "../../../components/utils/axiosSetup";
import DeleteFile from "../../../components/marketing/component/DeleteFile";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { iconFile } from "../../../components/tools/iconFiles";
import config from "../../../components/utils/config";
import axios from "axios";
import "react-calendar-datetime-picker/dist/index.css";
import DtPicker, {
  convertToEn,
  convertToFa,
} from "react-calendar-datetime-picker";
import CKeditor from "../../../components/ckEditor/CKeditor";
import { toast } from "react-toastify";

//const Editor = dynamic(() => import("../../../components/ckEditor/CKeditor"), { ssr: false })


// const { CKEditor } = dynamic(
//   () => {
//     return import('@ckeditor/ckeditor5-react');
//   },
//   { ssr: false }
// );

// const {ClassicEditor} = dynamic(
//   () => {
//     return import('@ckeditor/ckeditor5-build-classic');
//   },
//   { ssr: false }
// );

const getCategoryFromCombo={
  category :'',
  branch: '',
  subBranch: '',
}

const stateDiscount ={
  discountMoney: false,
  discountDate: false,
  discountHowmany : false,
}

// const chooseFeildsProduct = []
const chooseIndustries = []


const add = () => {

  const [scheduling, setScheduling] = useState(false)
  const [makeElement, setMakeElement] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  
  // let formData = new FormData();
  const productDetailsMedia = []
  const cookies = new Cookies();
  const tokenId = cookies.get('token')
  const businessId = cookies.get('b-Id')
  const discountMoney = useRef(null)
  const discountDate = useRef(null)
  const discountHowmany = useRef(null)
  const discountMoneyDiv = useRef(null)
  const discountMoneyDiv1 = useRef(null)
  const discountDateDiv = useRef(null)
  const discountDateDiv1 = useRef(null)
  const discountHowmanyDiv = useRef(null)
  const discountHowmanyDiv1 = useRef(null)
  const [showFAQ, setShowFAQ] = useState(false)
  const [FAnswer, setFAanswer] = useState('')
  const [FQuestion, setFQuestion] = useState('')
  const [FAQ, setFAQ] = useState([])
  const [fileManager, setFileManager] = useState(false)
  const [loadCategories,setLoadCategories] = useState();
  const [reloadCategory, setReloadCategory] = useState(false)
  const [loadBranch, setLoadBranch] = useState()
  const [reloadBranch, setReloadBranch] = useState(false)
  const [loadSubBranch, setLoadSubBranch] = useState()
  const [chooseCategory, setChooseCategory] = useState([])
  const [reloadSubBranch, setReloadSubBranch] = useState(false)
  const [chooseIndustryArray, setChooseIndustryArray] = useState();
  const [rootFileAddress, setRootFileAddress] = useState();
  const [selectTypeFileFromFileManager,setSelectTypeFileFromFileManager] = useState()
  const [chooseProductImages, setChooseProductImages] = useState([]);
  const [choosePermissionFiles, setChoosePermissionFiles] = useState([]);
  const [chooseHelpFiles,setChooseHelpFiles] = useState([]);
  const [chosenFileDeleted, setChosenFileDeleted]= useState(false)
  const [fileNameForDeleted, setFileNameForDeleted] = useState()
  const [openFileManager, setOpenFileManager] = useState(false)
  const [date, setDate] = useState("");
  const [chooseFeildsProduct, setChooseFeildsProduct] = useState([])
  const [productSpecificationsDialogShow, setProductSpecificationsDialogShow] = useState(false)
  const [chooseFeildsProductTemp, setChooseFeildsProductTemp] = useState([])
  // const [productDetailsMedia,setProductDetailsMedia] = useState([])
  const [productSpecifications, setProductSpecifications] = useState([])
  const [getAndSetDetailProduct, setGetAndSetDetailProduct] = useState([])
  const [resSaveProduct, setResSaveProduct] = useState([])
  const [catchSaveProduct, setCatchSaveProduct] = useState([])
  const [resSaveFAQ, setResSaveFAQ] = useState([])
  const [catchSaveFAQ, setCatchSaveFAQ] = useState([])
  const [isSaveProduct, setIsSaveProduct] = useState(false)
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  const [loadingSpinnerOff, setLoadingSpinnerOff] = useState(false)
  const [productDetailsInfo,setProductDetailsInfo] = useState({
    view_order: 1,
    business_id: +businessId,
    description: '',
    name: '',
    price: '',
    delivery_time: '',
    stock: '',
    minimum_purchase: '',
    return_duration: '',
    return_method: '',
    status: '',
    schedule_publish: '',
    shipping_cost: 'seller',
    shipping_method: '',
    sale_terms: '',
    weight: '',
    weight_label: '',
    tax: '',
    wholesale: '',
    warranty: 'شرکت',
    guarantor_company:"",
    warranty_period: 10
  })
  const [productDetailsDiscounts,setProductDetailsDiscounts] = useState({
    qty: '',
    data_start: '',
    data_end: '',
    price:'',
    percent: ''
  })
  
  const productDetails = {}
  //const [productDetails,setProductDetails] = useState({
    // info:{
    // view_order: 1,
    // business_id: 1,
    // description: productDetailsInfo.description,
    // name: productDetailsInfo.name,
    // price: +productDetailsInfo.price,
    // delivery_time: +productDetailsInfo.delivery_time,
    // stock: +productDetailsInfo.stock,
    // minimum_purchase: +productDetailsInfo.minimum_purchase,
    // return_duration: +productDetailsInfo.return_duration,
    // return_method: productDetailsInfo.return_method,
    // status: productDetailsInfo.status,
    // schedule_publish: productDetailsInfo.schedule_publish,
    // shipping_cost: productDetailsInfo.shipping_cost,
    // shipping_method: productDetailsInfo.shipping_method,
    // sale_terms: productDetailsInfo.sale_terms,
    // tax: productDetailsInfo.sale_terms,
    // tax: productDetailsInfo.tax,
    // wholesale: productDetailsInfo.wholesale,
    // guarantor_company: productDetailsInfo.guarantor_company,
    // warranty_period: productDetailsInfo.warranty_period
    // },
    // category:getCategoryFromCombo,
    // fields:[2,4],
    // media:productDetailsMedia,
    // discounts:{
    //   qty: +productDetailsDiscounts.qty,
    //   data_start: productDetailsDiscounts.data_start,
    //   data_end: productDetailsDiscounts.data_end,
    //   price: +productDetailsDiscounts.price,
    //   percent: +productDetailsDiscounts.percent
    // }
  //})
  
  const weights = [
    "واحد محصول",
    "دستگاه ",
    "جعبه ",
    "کارتن ",
    "عدد ",
    "کیسه ",
    "تن ",
    "طاقه ",
    "متر ",
    "خط تولید ",
    "بسته ",
    "کیلوگرم ",
    "متر مربع ",
    "ایستگاه ",
    "لیتر ",
    "قطعه  ",
    "کلاف ",
    "شاخه  ",
    "حلقه ",
    "متر مکعب ",
    "سیستم ",
    "رول ",
    "ست  ",
    "قالب  ",
    "بشکه ",
    "پالت ",
    "سر مرغ ",
    "اصله  ",
    "جین  ",
    "گرم "
  ]

  const focusHandler = (e) =>{
    setTouched({...touched, [e.target.name]: true})
  }

  console.log({touched})
  function Greeting({ productSpecifications }) {
    console.log({productSpecifications})
    console.log(typeof(productSpecifications))
    return (
      <>
          {
            productSpecifications && productSpecifications.map((detail, index) =>
                index >= 2 ? '' :                
            <div key={detail.id} className='grid grid-cols-2 items-center p-1 py-1 space-y-1'>
              <div className="w-full col-span-2 md:col-span-1">
                <p className="text-sm text-slate-400">{detail.key}</p>
              </div>
              {typeof(detail.values) === 'object' ? 
              <div className="w-full col-span-2 md:col-span-1">
                <select
                  name={detail.key}
                  onChange={selectFeildsChangeHandler}              
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                  value={chooseFeildsProduct}              
                >
                  <option selected>انتخاب کنید</option>
                  {
                    detail.values.map(value =>
                      <option 
                        value={value.id}
                        className="text-sm text-slate-400" 
                        >
                        {value.value}
                      </option>
                      )
                  }
                  
                </select>
              </div> :
              <div class="all-input-group w-full md:col-span-1 col-span-2 input-group">
                <input
                  onChange={selectFeildsChangeHandler}
                  type="number"
                  className="form-control"
                  placeholder={`مقدار ${value.id} را وارد کنید`}
                />
              </div>}
            </div>
            )
          }
        
        <div hidden={!productSpecificationsDialogShow}>
          <span className="gh_containerSpanGlobal">
            <div className="gh_containerDivGlobal">
              <div className="bg-white px-4 py-6 rounded-md max-h-[600px] overflow-y-auto w-[300px]">
                {
                  productSpecifications && productSpecifications.map((detail, index) =>
                      index < 2 ? '' :                
                  <div key={detail.id} className='grid grid-cols-2 items-center p-1 py-1 space-y-1'>
                    <div className="w-full col-span-2 md:col-span-1">
                      <p className="text-sm text-slate-400">{detail.key}</p>
                    </div>
                    {typeof(detail.values) === 'object' ? 
                    <div className="w-full col-span-2 md:col-span-1">
                      <select
                        name={detail.key}
                        onChange={selectFeildsChangeHandler}              
                        class="form-select form-select-text-style py-[0.575rem] pr-2"
                        aria-label="Default select example"
                        value={detail.key}              
                      >
                        <option selected>انتخاب کنید</option>
                        {
                          detail.values.map(value =>
                            <option 
                                key={value.value} 
                                id={value.id} 
                                name={value.id}
                                value={value.id}
                                className="text-sm text-slate-400" 
                              >
                              {value.value}
                            </option>
                            )
                        }
                        
                      </select>
                    </div> :
                    <div class="all-input-group w-full md:col-span-1 col-span-2 input-group">
                      <input
                        onChange={selectFeildsChangeHandler}
                        type="number"
                        className="form-control"
                        placeholder={`مقدار ${value.id} را وارد کنید`}
                      />
                    </div>}
                  </div>
                  )
                }
                <button 
                  onClick={()=>setProductSpecificationsDialogShow(false)}
                  className="bg-blue-500 text-white px-2 py-1 mt-3 rounded-md hover:bg-blue-600">انجام شد</button>
              </div>
            </div>
          </span>
        </div>
        
      
      {
        productSpecifications.length > 2 ?
          <button 
            onClick={()=>setProductSpecificationsDialogShow(true)}
            className="text-10 text-[#4257dd] border-none">
              نمایش مشخصات بیشتر...
          </button>
        : ''  
    
        
      }
      </>
    );
  }

  const method = 'get'
  const address = '/public/categories'
  const header = {
    'Accept': "application/json" }
 
  console.log({getCategoryFromCombo})

  useEffect(()=>{
    axiosSetup(address, method, header, '', getResult)
    function getResult (data){
      console.log({data})
      setLoadCategories(data)
    }
  },[])

  useEffect(()=>{
    if(reloadCategory === true){
      axiosSetup(address, method, header, '', getResult)
      function getResult (data){
        setLoadCategories(data)
      }
      setReloadCategory(false)
    }
      //dispatch(fetchState(address, method, header, ''));  
      //axiosSetup(method, address, header, '')
  },[reloadCategory])

  useEffect(()=>{
    discountMoneyDiv.current.hidden =true;
    discountMoneyDiv1.current.hidden =true;
    discountDateDiv.current.hidden =true;
    discountDateDiv1.current.hidden =true;
    discountHowmanyDiv.current.hidden =true;
    discountHowmanyDiv1.current.hidden =true;
  },[])

  useEffect(()=>{
    const saveProductDetails = () =>{

    }

  },[])
  
  useEffect(()=>{
    let dateCov = convertToEn(date, '-')
    dateCov += ':00'
    setProductDetailsInfo({...productDetailsInfo, schedule_publish : dateCov})
  },[date])
 
  console.log({FAQ})
  //یک متد تعریف شده برای بستن پنجره فایل منیجر
  const closeMainRoot = () =>{
    setFileManager(prevChooseFile => prevChooseFile = false)
    setOpenFileManager(false)
  }

  const selectCategoryChangeHandler = (e) =>{
    const categoryId = e.target.value
    
    console.log(categoryId)
    if(categoryId === 'reload'){
      setReloadCategory(true)
    }
    if(categoryId !== 'choosed' && categoryId !== 'reload'){
      getCategoryFromCombo.category= +categoryId
      const address = `/public/categories/${categoryId}`
      axiosSetup(address, method, header, '', getResult)
      function getResult (data){
        setLoadBranch(data)
      }
    }
  }

  const selectBranchChangeHandler = (e) =>{
    const branchId = +e.target.value
    let subBranch = []
    console.log(branchId)
    if(branchId === 'reload'){
      setReloadCategory(true)
    }
    if(branchId !== 'choosed' && branchId !== 'reload'){
      getCategoryFromCombo.branch= branchId
      
      loadBranch.data.children.map(branch => 
        branch.id === branchId && setLoadSubBranch(branch.children)
        )
      }
    //   const address = `/public/categories?parent_id=${branchId}`
    //   axiosSetup(address, method, header, '', getResult)
    //   function getResult (data){
    //     setLoadSubBranch(data)
    //   }
    // }
    console.log({loadSubBranch})
  }

  const selectSubBranchChangeHandler = (e) =>{
    const subBranchId = +e.target.value
    let tempSubBranch =[]
    console.log(subBranchId)
    if(subBranchId === 'reload'){
      
    }
    if(subBranchId !== 'choosed' && subBranchId !== 'reloading'){
      getCategoryFromCombo.subBranch= subBranchId
      loadSubBranch.map(subBranch => 
        subBranch.id === subBranchId && tempSubBranch.push(subBranch.fields)
        )
      setProductSpecifications(tempSubBranch)
    }
    console.log({tempSubBranch})
  }

  const selectUseInChangeHandler = (e) =>{
    const subBranchId = e.target.value
    console.log(subBranchId)
    if(subBranchId === 'reload'){
      setReloadCategory(true)
    }
    if(subBranchId !== 'choosed' && subBranchId !== 'reload'){
      const address = `/public/categories?parent_id=${subBranchId}`
      axiosSetup(address, method, header, '', getResult)
      function getResult (data){
        setLoadSubBranch(data)
      }
    }
  }

  const selectUseInIndustryChangeHandler = (e) =>{

  }

  console.log({loadBranch})
  console.log({loadCategories})
  console.log({loadSubBranch})

  const chooseFileFromFileManagerFunc = (chooseFile) =>{
    console.log({chooseFile})
    if(selectTypeFileFromFileManager === 'media')
      setChooseProductImages(chooseFile);    
    else if(selectTypeFileFromFileManager === 'license')
      setChoosePermissionFiles(chooseFile)
    else if(selectTypeFileFromFileManager === 'catalog')
      setChooseHelpFiles(chooseFile)
  }

  const rootFileAddressFunc = (rootFileAddress) =>{
    console.log({rootFileAddress})
    setRootFileAddress(rootFileAddress)
  }

  console.log({rootFileAddress, chooseProductImages})
  console.log({choosePermissionFiles})
  console.log({chooseHelpFiles})
  console.log({stateDiscount})
  
  const fillDetailProductInfoOnChangeHandler = (e) =>{
    if(e.target.name === 'stock' || e.target.name === 'price' 
    || e.target.name === 'minimum_purchase' || e.target.name === 'delivery_time' 
    || e.target.name === 'return_duration' || e.target.name === 'shipping_cost'
    || e.target.name === 'weight'){
      setProductDetailsInfo({...productDetailsInfo, [e.target.name] : +e.target.value})
    }else{
      setProductDetailsInfo({...productDetailsInfo, [e.target.name] : e.target.value})
    }

    if(e.target.value === 'scheduling'){
      setScheduling(true)
    }else if(e.target.value === 'draft' || e.target.value === 'unavailable' || e.target.value === 'publish'){
      setScheduling(false)
    }
  } 

  const fillDetailProductDiscountsChangeHandler = (e) =>{
    if(e.target.name === 'price' || e.target.name === 'percent' 
    || e.target.name === 'qty'){
      setProductDetailsDiscounts({...productDetailsDiscounts, [e.target.name]: +e.target.value})
    }else{
      setProductDetailsDiscounts({...productDetailsDiscounts, [e.target.name]: e.target.value})
    }
  }
  
  const selectTypeDiscountMoneyClickHandler = () =>{
    discountDate.current.checked = false;
    discountHowmany.current.checked = false;
    stateDiscount.discountMoney = true
    stateDiscount.discountDate = false
    stateDiscount.discountHowmany = false
    discountMoneyDiv.current.hidden =false;
    discountMoneyDiv1.current.hidden =false;
    discountDateDiv.current.hidden =true;
    discountDateDiv1.current.hidden =true;
    discountHowmanyDiv.current.hidden =true;
    discountHowmanyDiv1.current.hidden =true;
  }

  const selectTypeDiscountDateClickHandler = () =>{
    discountMoney.current.checked = false;
    discountHowmany.current.checked = false;
    stateDiscount.discountMoney = false
    stateDiscount.discountDate = true
    stateDiscount.discountHowmany = false
    discountMoneyDiv.current.hidden =true;
    discountMoneyDiv1.current.hidden =true;
    discountDateDiv1.current.hidden =false;
    discountDateDiv.current.hidden =false;
    discountHowmanyDiv.current.hidden =true;
    discountHowmanyDiv1.current.hidden =true;
  }

  const selectTypeDiscountHowmanyClickHandler = () =>{
    discountMoney.current.checked = false;
    discountDate.current.checked = false;
    stateDiscount.discountMoney = false
    stateDiscount.discountDate = false
    stateDiscount.discountHowmany = true
    discountMoneyDiv.current.hidden =true;
    discountMoneyDiv1.current.hidden =true;
    discountDateDiv1.current.hidden =true;
    discountDateDiv.current.hidden =true;
    discountHowmanyDiv.current.hidden =false;
    discountHowmanyDiv1.current.hidden =false;
  }

  console.log({productDetailsInfo})
  
  const confirmOrNotFunc = (answer, fileName) =>{
    setChosenFileDeleted(false)
    if(answer === true)
    {
      if(selectTypeFileFromFileManager === 'media')
        setChooseProductImages(chooseProductImages.filter(file => file.name !== fileName));    
    else if(selectTypeFileFromFileManager === 'license')
      setChoosePermissionFiles(choosePermissionFiles.filter(file => file.name !== fileName))
    else if(selectTypeFileFromFileManager === 'catalog')
      setChooseHelpFiles(chooseHelpFiles.filter(file => file.name !== fileName))
    }
  }

  useEffect(()=>{
    if(loadingSpinnerOff === true){
      setLoadingSpinner(false)
    }
  },[loadingSpinnerOff])

  const saveProductDetailClickHandler = async(e) =>{
    e.preventDefault()
    productDetailsMedia = []

    if(productDetailsInfo.status=== 'draft' || productDetailsInfo.status === 'unavailable' || productDetailsInfo.status === 'publish'){
      setProductDetailsInfo({...productDetailsInfo, schedule_publish : null})
    }
    
    setTouched({
      category: true,
      branch: true,
      subBranch: true,
      description: true,
      name: true,
      price: true,
      delivery_time: true,
      stock: true,
      minimum_purchase: true,
      return_duration: true,
      return_method: true,
      status: true,
      shipping_method: true,
      sale_terms: true,
      weight: true,
      weight_label: true,
      tax: true,
      wholesale: true,
      guarantor_company:true,
    })

    for (const key in productDetailsInfo) {
      if (Object.hasOwnProperty.call(productDetailsInfo, key)) {
        const element = productDetailsInfo[key];
        if(element === ''){
          toast.error('اطلاعات را به درستی وارد کنید')
          setLoadingSpinnerOff(true)   
          return
        }
      }
    }
    
    if(!Object.keys(chooseProductImages).length){
      toast.error('اطلاعات را به درستی وارد کنید (بارگذاری تصاویر محصول)')
      setLoadingSpinnerOff(true)
      return
    }
    
    if(!Object.keys(choosePermissionFiles).length){
      toast.error('اطلاعات را به درستی وارد کنید (تصاویر استانداردها/مجوزها)')
      setLoadingSpinnerOff(true)
      return
    }
    
    if(!Object.keys(chooseHelpFiles).length){
      toast.error('اطلاعات را به درستی وارد کنید (راهنمای استفاده از محصول)')
      setLoadingSpinnerOff(true)
      return
    }

    

    chooseProductImages && chooseProductImages.map(imageFile =>{
      productDetailsMedia.push({
        "type": "media",
        "filemanager_items_id": +imageFile.id
      })      
    })
    chooseHelpFiles && chooseHelpFiles.map(helpFile =>{
      productDetailsMedia.push({
        "type": "catalog",
        "filemanager_items_id": +helpFile.id
      })      
    })

    choosePermissionFiles && choosePermissionFiles.map(permissionFile =>{
      productDetailsMedia.push({
        "type": "license",
        "filemanager_items_id": +permissionFile.id
      })      
    })
    console.log({productDetailsMedia})

    productDetails = JSON.stringify({
      info:productDetailsInfo,
      category:[getCategoryFromCombo.category, getCategoryFromCombo.branch, getCategoryFromCombo.subBranch],
      fields:chooseFeildsProduct,
      media:productDetailsMedia,
      discounts: productDetailsDiscounts
    })

    console.log({productDetails})
    
    await axios.post(`${config.api_url}/businesses/${businessId}/shop/products`,
      JSON.stringify({
        info:productDetailsInfo,
        category:[getCategoryFromCombo.category, getCategoryFromCombo.branch, getCategoryFromCombo.subBranch],
        fields:chooseFeildsProduct,
        industries: chooseIndustries,
        media:productDetailsMedia,
        discounts: productDetailsDiscounts
      }),{
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json; charset= UTF-8",  
        'Authorization':"Bearer " + tokenId,
      }},
    )
    .then(response => setResSaveProduct(response))
    .catch(err => setCatchSaveProduct(err))


    // const address= `/businesses/${businessId}/shop/products`
    // const method = 'post'
    // //formData.append(productDetails);
    // const header ={
    //   'Accept': "application/json",
    //   "Content-Type": "application/json; charset= UTF-8",  
    //   'Authorization':"Bearer " + tokenId,
    // }
    // axiosSetup(address, method, header, productDetails, getResult )
    // function getResult (data){
      //   console.log('محصول ارسالی: ',{data})
      // }
    }
    
    console.log({resSaveProduct})
    console.log({catchSaveProduct})
    
    useEffect(()=>{
      if(resSaveProduct.status === 200){
        toast.success("محصول جدید ثبت شده");
        setIsSaveProduct(true)
      }else if(catchSaveProduct.name === "AxiosError"){
        if(catchSaveProduct.message === "Network Error"){
          toast.error("ثبت محصول انجام نشد، اتصال اینترنت خود را بررسی کنید");
        }else{
          toast.error("مشکلی در ثبت پیش آمده مجددا تلاش کنید");
        }
      }

    },[resSaveProduct, catchSaveProduct])

    useEffect(()=>{
      if(isSaveProduct === true){
        axios.post(`${config.api_url}/businesses/${businessId}/shop/products/${resSaveProduct.data.id}/fqas`,
      // JSON.stringify({
      //   info:productDetailsInfo,
      //   category:[getCategoryFromCombo.category, getCategoryFromCombo.branch, getCategoryFromCombo.subBranch],
      //   fields:chooseFeildsProduct,
      //   industries: chooseIndustries,
      //   media:productDetailsMedia,
      //   discounts: productDetailsDiscounts
      // })
      FAQ
      ,{
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json; charset= UTF-8",  
        'Authorization':"Bearer " + tokenId,
      }},
        )
        .then(response => setResSaveFAQ(response))
        .catch(err => setCatchSaveFAQ(err))
        setIsSaveProduct(false)
      }
    },[isSaveProduct])

    useEffect(()=>{
      if(resSaveFAQ.status === 200){
        setLoadingSpinner(false)
        toast.success("سوالات متداول محصول ثبت شده");
      }else if(catchSaveFAQ.name === "AxiosError"){
        setLoadingSpinner(false)
        toast.error("ثبت سوالات متداول محصول با مشکل مواجه شده است");
      }
    },[resSaveFAQ, catchSaveFAQ])

  const selectChooseIndustryChangeHandler = (e) =>{
    let tempId = +e.target.value
    if (e.target.checked){
      if(chooseIndustries.length < 3){
        console.log({tempId})
        chooseIndustries.push(tempId)
      }else{
        toast.error("حداکثر سه حوزه را میتوانید انتخاب کنید");
        e.target.checked = false
      }
    }else {
      let temp = chooseIndustries
      temp.map((tp,index) =>
        tp === tempId ? chooseIndustries.pop(tp) : '')
    }
    console.log({chooseIndustries})
  }


  const selectFeildsChangeHandler = (e) =>{
    // setChooseFeildsProduct([...chooseFeildsProduct, +e.target.value])
    setChooseFeildsProduct([...chooseFeildsProduct,  +e.target.value])
  }

  console.log({chooseFeildsProduct})
  const deleteFAQClickHandler = (questionId) =>{
    console.log({questionId})
    const temp = FAQ
    FAQ = temp.pop(field => field.question !== questionId)
    console.log({FAQ})
  }
  return (
    <>
      <div hidden={!chosenFileDeleted}>
        <DeleteFile ConfirmOrNot={confirmOrNotFunc} fileName={fileNameForDeleted}/>
      </div>
      <div hidden={!fileManager}>
        <MainRoot closeMainRoot={closeMainRoot} openFileManager={openFileManager} rootFilesAddress={rootFileAddressFunc} chooseFileFromMainRoot={chooseFileFromFileManagerFunc}/>
      </div>
      <div>
        <div className="business-panel-container">
          <div className="grid grid-cols-12 business-panel-cols bg-slate-100">
            <MarketingLayout/>
            <div className="relative col-span-12 overflow-hidden shadow-lg business-panel-mainbar md:col-span-10 shadow-slate-100">
              <MarketingMainHeader/>
              <div className="mainbar-content mt-10 md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-4">
                <section className="max-w-screen-lg mx-auto px-3 lg:mt-[85px] mt-[42px] overflow-hidden">
                  <div className="p-4 bg-white rounded-lg shadow-md ">
                    <div className="flex flex-col add-products-title">
                      <h5 className="font-semibold md:text-base taxt-sm">محصولات</h5>
                      <small className="text-slate-600 text-xs">
                        اطلاعات محصولات خود را وارد نمایید .
                      </small>
                    </div>
                    <div className="flex flex-col add-products-flex">
                      <div className="grid grid-cols-12 gap-3 add-products-grid">
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">حوزه</label>
                          <select
                            name='category'
                            className={`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.category ? '' : getCategoryFromCombo.category === '' ? 'border border-danger' : ''}`}
                            aria-label="Default select example"
                            onChange={selectCategoryChangeHandler}
                            onFocus={focusHandler}                             
                          >
                            <option selected value="choosed"> انتخاب کنید</option>
                            {
                              !loadCategories ? <option value="reloading">داده در حال بارگذاری ...</option> :  
                              loadCategories.status !== 200 ? 
                                <option className="flex text-center" value="reload">
                                  <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></option> :
                                 loadCategories.data && 
                                 loadCategories.data.map(category =>
                                   <option 
                                   key={category.id}
                                   value={category.id}
                                     >{category.name}</option>
                                 ) 
                            }
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">شاخه</label>
                          <select
                            className={`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.branch ? '' : getCategoryFromCombo.branch === '' ? 'border border-danger' : ''}`}
                            aria-label="Default select example"
                            onChange={selectBranchChangeHandler}
                            onFocus={focusHandler}
                            name='branch'
                          >
                            <option selected value="choosed">انتخاب کنید</option>
                            {
                              !loadBranch ? <option value="reloading">داده در حال بارگذاری ...</option> :  
                              loadBranch.status !== 200 ? 
                                <option className="flex text-center" value="reload">
                                  <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></option> :
                                 loadBranch.data.children && 
                                 loadBranch.data.children.map(branch =>
                                   <option 
                                   key={branch.id}
                                   value={branch.id}
                                     >{branch.name}</option>
                                 ) 
                            }
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            زیرشاخه
                          </label>
                          <select
                            onChange={selectSubBranchChangeHandler}
                            className={`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.subBranch ? '' : getCategoryFromCombo.subBranch === '' ? 'border border-danger' : ''}`}
                            aria-label="Default select example"
                            name='subBranch'
                            onFocus={focusHandler}
                          >
                            <option selected value="choosed"> انتخاب کنید</option>
                            {
                              !loadSubBranch ? <option value="reloading">شاخه را انتخاب کنید</option>:
                              loadSubBranch.map(subBranch =>
                                <option 
                                key={subBranch.id}
                                value={subBranch.id}
                                  >{subBranch.name}</option>
                              ) 
                              // !loadSubBranch ? <option value="reloading">داده در حال بارگذاری ...</option> :  
                              // loadSubBranch.status !== 200 ? 
                              //   <option className="flex text-center" value="reload">
                              //     <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></option> :
                              //    loadSubBranch.data && 
                              //    loadSubBranch.data.map(subBranch =>
                              //      <option 
                              //      key={subBranch.id}
                              //      value={subBranch.id}
                              //        >{subBranch.name}</option>
                              //    ) 
                            }
                          </select>
                        </div>
                        <div className="col-span-12 text-right add-products-input md:col-span-3" style={{direction:'rtl'}}>
                          <label className="px-2 text-sm text-slate-700">
                            کاربرد در صنایع
                          </label>
                          <button
                            className="md:px-10 md:py-2 px-2 mb-2 text-sm rounded-md"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onFocus={focusHandler}
                            name='useInIndustries'
                          >
                            <span className="md:text-xs text-[11px] form-select form-select-text-style py-[0.575rem] text-slate-700">
                            حداکثر سه مورد
                            </span>
                          </button>
                        <div className="dropdown-menu p-2" >
                          <div className="w-full h-[200px] overflow-y-auto flex justify-start lg:flex-row flex-col items-center p-1">
                            <ul style={{direction:'rtl', textAlign: 'right', marginTop:'50px', fontSize:'12px'}}>
                              {
                                !loadCategories ? <li value="reloading">داده در حال بارگذاری ...</li> :  
                                loadCategories.status !== 200 ? 
                                  <li className="flex text-center" value="reload">
                                    <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></li> :
                                  loadCategories.data && 
                                  loadCategories.data.map(category =>
                                    <>
                                      <li 
                                        key={category.id}
                                        value={category.id}
                                        className='cursor-pointer'
                                      >
                                        <input type='checkbox' onChange={selectChooseIndustryChangeHandler} className="cursor-pointer" value={category.id}/>  {category.name}</li>
                                      
                                    </>
                                  ) 
                              }                          
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 add-products-input md:col-span-3">
                        <label className="px-2 mb-2 text-sm text-slate-700">
                        نام محصول
                        </label>
                        <div class="all-input-group input-group mb-3">
                          <input
                            name= 'name'
                            value={productDetailsInfo.name}
                            onChange={fillDetailProductInfoOnChangeHandler}
                            type="text"
                            className={`form-control ${!touched.name ? '' : productDetailsInfo.name === '' ? 'border-2 border-red-600' : ''}`}
                            placeholder="نام محصول را وارد کنید"
                            onFocus={focusHandler}
                          />
                        </div>
                      </div>
                      <div className="col-span-12 add-products-input md:col-span-3">
                        <label className="px-2 mb-2 text-sm text-slate-700">
                          تعداد موجودی
                        </label>
                        <div class="all-input-group input-group mb-3">
                          <input
                            name= 'stock'
                            value={productDetailsInfo.stock}
                            onChange={fillDetailProductInfoOnChangeHandler}
                            type="number"
                            className={`form-control ${!touched.stock ? '' : productDetailsInfo.stock === '' ? 'border-2 border-red-600' : ''}`}
                            placeholder="عدد"
                            onFocus={focusHandler} 
                          />
                          </div>
                        </div>
                        {/* <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            حداقل موجودی
                          </label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="۱۰ درصد تعداد موجودی"
                            />
                          </div>
                        </div> */}
                      </div>
                      <div className="flex flex-col add-products-Introduction">
                        <div className="flex flex-col my-4 add-products-title">
                          <h5 className="text-xs font-semibold md:text-sm">
                            معرفی محصول
                          </h5>
                        </div>
                        <div 
                          className={`w-full bg-white border rounded-md h-36 p-1 border-slate-100 ${!touched.description ? '' : productDetailsInfo.description === '' ? 'border-2 border-red-600' : ''}`}
                          >
                        <textarea name='description' 
                            className={`w-full h-full max-h-full min-h-full px-2 py-2 ${!touched.description ? '' : productDetailsInfo.description === '' ? 'border-2 border-red-600' : ''}`}
                            onChange={fillDetailProductInfoOnChangeHandler}
                            value={productDetailsInfo.description}
                            placeholder="توضیحات را در این قسمت وارد کنید"
                            onFocus={focusHandler}
                          />
                  
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-4 products-specifications-cols">
                        <div id="sepecificProduc" className="col-span-2 min-h-[200px] max-h-[200px] products-specifications-col md:col-span-1">
                        
                          <div className="flex justify-between items-center my-3 products-specifications-title">
                            <h5 className="text-xs font-semibold md:text-sm">
                              مشخصات محصول
                            </h5>
                            <button className="border-2 ml-4 px-2 py-1 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white" onClick={()=>{setMakeElement(true)}}>افزودن مشخصه</button>
                          </div>
                          <div className="p-3 space-y-2 border rounded-md border-slate-100">
                            
                            {
                              productSpecifications && productSpecifications.map((dtail,index) =>

                                               <Greeting productSpecifications={dtail} />
                                         
                              )
                            }
                          </div>
                        </div>
                        <div className="col-span-2 products-upload-col md:col-span-1 mt-3">
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col my-3 products-specifications-title">
                              <h5 className="text-xs font-semibold md:text-sm">
                                بارگذاری تصاویر محصول
                              </h5>
                            </div>
                            
                              <a className="flex items-center h-full">
                                <p className="text-xs text-slate-400">مشاهده همه </p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-3 h-3 mr-1 text-slate-400"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                  />
                                </svg>
                              </a>
                         
                          </div>
                          <div className="border border-slate-100 rounded-md p-3.5">
                            <div className="flex justify-start items-center w-full grid-cols-4 gap-4 ">
                              <div className="w-[100px] col-span-4 px-2 py-6 border rounded-sm md:col-span-1 border-slate-100">
                                
                                  <button 
                                        onClick={()=>{setFileManager(true)
                                          setOpenFileManager(true)
                                          setSelectTypeFileFromFileManager('media')}}
                                        className="flex items-center justify-center">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs text-slate-400">
                                        افزودن
                                      </span>
                                    </div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 mx-2 text-slate-400"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                      />
                                    </svg>
                                  </button>
                                <span className="w-full text-slate-400 md:text-[8px] text-xs flex justify-center">
                                  حداکثر ۱۰۰ کیلو بایت{" "}
                                </span>
                              </div>
                              <div className="flex justify-start items-center max-w-[310px] p-1 border-2 rounded-md overflow-x-auto">
                             {
                              chooseProductImages && chooseProductImages.map( image =>

                                <div className="relative w-[80px] h-[80px] ml-2 col-span-4 border rounded-sm md:col-span-1 border-slate-100">
                                  <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50 ">
                                    
                                    <button onClick={()=>{
                                                      setFileNameForDeleted(image.name)
                                                      setChosenFileDeleted(true)
                                                      setSelectTypeFileFromFileManager('media')
                                                      }}>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-rose-500"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                    </button>
                                  </span>
                                  
                                  {
                                    iconFile(image.name) === 'image' ?
                                    <img
                                      src={`${rootFileAddress}/${image.name}`}
                                      className="w-[80px] h-[60px]"
                                    />
                                    : <div className="text-center mt-2">
                                      {
                                        iconFile(image.name)
                                      }
                                      </div>
                                  }
                                  {/* eror dar mamayesh ax */}
                               
                                </div>
                              )
                              }
                            </div>
                              </div>
                            <div className="w-full h-full flex md:flex-row flex-col justify-between md:items-center mt-[18px] mb-2 md:space-y-0 space-y-2">
                              <p className="text-[9px] text-slate-500 flex items-center">
                                برای کاهش حجم تصاویر از این لینک استفاده نمایید
                              </p>
                              <div className="inline-flex items-center">
                                <a className="px-2 rounded-md bg-slate-600 hover:bg-slate-500 ">
                                  <span className="text-white text-[7px]">
                                    کاهش حجم تصاویر
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-3 mt-">
                        <div className="flex justify-start items-center col-span-12 lg:col-span-3">
                          <div className="col-span-12 lg:col-span-3 w-[190px] ml-2">
                            <label className="px-2 mb-2 text-sm text-slate-700">واحد </label>
                            <select
                              name='weight_label'
                              value={productDetailsInfo.weight_label}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              className={`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.weight_label ? '' : productDetailsInfo.weight_label === '' ? 'border border-danger' : ''}`}
                              aria-label="Default select example"
                              onFocus={focusHandler}
                              >
                              <option selected> انتخاب کنید</option>
                              {
                                weights.map(weight=>
                                  <option className="text-sm text-slate-400" value={weight}>
                                    {weight}
                                  </option>
                                  )
                                }
                            </select>
                        </div>
                        <div className="col-span-12 lg:col-span-3 mt-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">وزن</label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              value={productDetailsInfo.weight}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              name='weight'
                              type="number"
                              className={`form-control ${!touched.weight ? '' : productDetailsInfo.weight === '' ? 'border-2 border-red-600' : ''}`}
                              placeholder="وزن"
                              onFocus={focusHandler}
                              />
                          </div>
                        </div>
                      </div>
                        <div className="col-span-12 lg:col-span-3 mt-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">قیمت</label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              name='price'
                              value={productDetailsInfo.price}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              type="number"
                              className={`form-control ${!touched.price ? '' : productDetailsInfo.price === '' ? 'border-2 border-red-600' : ''}`}
                              placeholder="تومان"
                              onFocus={focusHandler} 
                            />
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 mt-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            روش فروش
                          </label>
                          <select
                            name='wholesale'
                            value={productDetailsInfo.wholesale}
                            onChange={fillDetailProductInfoOnChangeHandler}
                            class={`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.wholesale ? '' : productDetailsInfo.wholesale === '' ? 'border border-danger' : ''}`}
                            aria-label="Default select example"
                            onFocus={focusHandler} 
                          >
                            <option selected> انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="wholesaler">
                              عمده
                            </option>
                            <option className="text-sm text-slate-400" value="single">
                              تکی
                            </option>
                            <option className="text-sm text-slate-400" value="both">
                              هر دو
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 lg:col-span-3 mt-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            حداقل تعداد خرید
                          </label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              name='minimum_purchase'
                              value={productDetailsInfo.minimum_purchase}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              type="number"
                              className={`form-control ${!touched.minimum_purchase ? '' : productDetailsInfo.minimum_purchase === '' ? 'border-2 border-red-600' : ''}`}
                              placeholder="عدد"
                              onFocus={focusHandler} 
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col discount ">
                        <div className="flex flex-col my-4 discount-title">
                          <h5 className="text-xs font-semibold md:text-sm">تخفیف</h5>
                          <small className="text-xs text-justify text-slate-500 ">
                            در صورت ارائه تخفیف می توانید از روش های زیر استفاده نمایید و
                            در صورت همپوشانی روش های تخفیف ، سیسیتم بر اساس بیشترین درصد
                            اعمال خواهد نمود .
                          </small>
                        </div>
                        <div className="p-3 space-y-3 border rounded-md discount-border border-slate-500">
                          <div className="flex flex-col justify-between w-full space-y-3 discount-price md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <input 
                                  type='radio'
                                  id='discount-mony' 
                                  ref={discountMoney}
                                  onChange={selectTypeDiscountMoneyClickHandler}
                                  className="mb-3 ml-2 text-xs font-semibold text-slate-500"/>
                                <p className="mb-3 text-xs font-semibold text-slate-500">
                                  ۱. تخفیف بر اساس مبلغ
                                </p>
                              </div>
                              <div
                                ref={discountMoneyDiv}
                                className="grid grid-cols-2 gap-4">
                                <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    بیشتر از
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      name='price'
                                      value={productDetailsDiscounts.price}
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      type="number"
                                      className="form-control"
                                      placeholder="تومان"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='percent'
                                      value={productDetailsDiscounts.percent}
                                      type="number"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <p className="mb-3 text-xs font-semibold text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div
                                ref={discountMoneyDiv1}
                                class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  type="number"
                                  value={`${+productDetailsInfo.price}`*`${+productDetailsDiscounts.percent/100}`}
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-date md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <input type='radio' 
                                        
                                        id='discount-date' 
                                        ref={discountDate} 
                                        onChange={selectTypeDiscountDateClickHandler}
                                        className="mb-3 ml-2 text-xs font-semibold text-slate-500"/>
                                <p className="mb-3 text-xs font-semibold text-slate-500">
                                ۲. تخفیف بر اساس تاریخ
                                </p>
                              </div>
                              <div 
                                ref={discountDateDiv}
                                className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تاریخ
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='data_start'
                                      value={productDetailsDiscounts.data_start}
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    تا تاریخ
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='data_end'
                                      value={productDetailsDiscounts.data_end}
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div
                                    class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      name='percent'
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      value={productDetailsDiscounts.percent}
                                      type="number"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div 
                                 ref={discountDateDiv1}
                                class="all-input-group md:w-36 w-full  input-group">
                                <input
                                  readOnly
                                  value={`${+productDetailsInfo.price}`*`${+productDetailsDiscounts.percent/100}`}
                                  type="number"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col ">
                              <div className="flex items-center">
                                <input 
                                  type='radio' 
                                  id='discount-howmany' 
                                  onClick={selectTypeDiscountHowmanyClickHandler}
                                  ref={discountHowmany} 
                                  className="mb-3 ml-2 text-xs font-semibold text-slate-500"/>
                                <p className="mb-3 text-xs font-semibold text-slate-500">
                                ۳. تخفیف بر اساس تعداد
                                </p>
                              </div>
                              <div
                                ref={discountHowmanyDiv}
                                disabled={!stateDiscount.discountHowmany}
                                className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      name=''
                                      type="number"
                                      className="form-control"
                                      placeholder="حداقل خرید + ۱"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    تا تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='qty'
                                      value={productDetailsDiscounts.qty}
                                      type="number"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div 
                                    className="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='percent'
                                      value={productDetailsDiscounts.percent}
                                      type="number"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div
                                ref={discountHowmanyDiv1}
                                class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  readOnly
                                  value={`${+productDetailsInfo.price}`*`${+productDetailsDiscounts.percent/100}`}
                                  type="number"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col ">
                              <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="حداقل خرید + ۱"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    تا تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div className="grid grid-cols-12 gap-3 mt-4">
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              زمان آماده سازی
                            </label>
                            <div class="all-input-group input-group mb-3 ">
                              <input
                                name='delivery_time'
                                value={productDetailsInfo.delivery_time}
                                onChange={fillDetailProductInfoOnChangeHandler}
                                type="number"
                                className={`form-control ${!touched.delivery_time ? '' : productDetailsInfo.delivery_time === '' ? 'border-2 border-red-600' : ''}`}
                                placeholder="تعداد روز کاری"
                                onFocus={focusHandler}
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              روش ارسال
                            </label>
                            <select
                              name='shipping_method'
                              value={productDetailsInfo.shipping_method}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              className= {`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.shipping_method ? '' : productDetailsInfo.shipping_method === '' ? 'border border-danger' : ''}`}
                              aria-label="Default select example"
                              onFocus={focusHandler}
                            >
                              <option selected>انتخاب کنید</option>
                              <option className="text-sm text-slate-400" 
                              value="free">
                                رایگان
                              </option>
                              <option className="text-sm text-slate-400" 
                              value="seller">
                                با خریدار
                              </option>
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              مدت زمان عودت
                            </label>
                            <div class="all-input-group input-group mb-3">
                              <input
                                name='return_duration'
                                value={productDetailsInfo.return_duration}
                                onChange={fillDetailProductInfoOnChangeHandler}
                                type="number"
                                className={`form-control ${!touched.return_duration ? '' : productDetailsInfo.return_duration === '' ? 'border-2 border-red-600' : ''}`}
                                placeholder="تعداد روز کاری"
                                onFocus={focusHandler} 
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              روش عودت
                            </label>
                            <select
                              onChange={fillDetailProductInfoOnChangeHandler}
                              name='return_method'
                              value={productDetailsInfo.return_method}
                              className= {`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.return_method ? '' : productDetailsInfo.return_method === '' ? 'border border-danger' : ''}`}
                              aria-label="Default select example"
                              onFocus={focusHandler} 
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="marjui"
                              >مرجوعی</option>
                              
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              شرایط فروش
                            </label>
                            <select
                            name='sale_terms'
                              value={productDetailsInfo.sale_terms}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              className= {`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.sale_terms ? '' : productDetailsInfo.sale_terms === '' ? 'border border-danger' : ''}`}
                              aria-label="Default select example"
                              onFocus={focusHandler}
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="cash"
                              >نقدی</option>
                              <option
                                className="text-sm text-slate-400"
                                value="credit"
                              >اعتباری</option>
                              <option
                                className="text-sm text-slate-400"
                                value="barter"
                              >تهاتر</option>
                            </select>
                          </div>
                          <div hidden className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              هزینه ارسال
                            </label>
                            <div class="all-input-group input-group mb-3">
                              <input
                                readOnly
                                value={productDetailsInfo.shipping_cost}
                                onChange={fillDetailProductInfoOnChangeHandler}
                                name='shipping_cost'
                                type="number"
                                className="form-control"
                                placeholder="تومان"
                                onFocus={focusHandler}
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              گارانتی
                            </label>
                            <select
                              value={productDetailsInfo.guarantor_company}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              name='guarantor_company'
                              className= {`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.guarantor_company ? '' : productDetailsInfo.guarantor_company === '' ? 'border border-danger' : ''}`}
                              aria-label="Default select example"
                              onFocus={focusHandler}
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="origin-and-healthy-warranty"
                              >گارانتی اصالت و سلامت فیزیکی</option>
                              <option
                                className="text-sm text-slate-400"
                                value="change-product-warranty"
                              >گارانتی تضمین تعویض کالا</option>
                              <option
                                className="text-sm text-slate-400"
                                value="verify-organization-warranty"
                              >گارانتی مورد تایید سامانه های جامع گارانتی</option>
                              <option
                                className="text-sm text-slate-400"
                                value="seller-warranty"
                              >گارانتی شخصی فروشندگان</option>
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              مالیات بر ارزش افزوده
                            </label>
                            <select
                              name='tax'
                              value={productDetailsInfo.tax}
                              onChange={fillDetailProductInfoOnChangeHandler}
                              className= {`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.tax ? '' : productDetailsInfo.tax === '' ? 'border border-danger' : ''}`}
                              aria-label="Default select example"
                              onFocus={focusHandler}
                            >
                              <option selected> انتخاب کنید </option>
                              <option
                                className="text-sm text-slate-400"
                                value="yes"
                              >دارد</option>
                              <option
                                className="text-sm text-slate-400"
                                value="no"
                              >ندارد</option>
                              
                            </select>
                          </div>
                        </div>
                        {/* <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="col-span-2 md:col-span-1">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              ارسال به کسب و کارهای مورد علاقه
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                          <div className="col-span-2 md:col-span-1">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              ارسال به حوزه های مرتبط
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected>انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                        </div> */}
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="col-span-2 standard-col md:col-span-1">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col my-3 products-specifications-title">
                                <h5 className="text-xs font-semibold md:text-sm">
                                  استانداردها / مجوز ها
                                </h5>
                              </div>
                              <Link href="/">
                                <a className="flex items-center h-full">
                                  <p className="text-xs text-slate-400">مشاهده همه </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-3 h-3 mr-1 text-slate-400"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                            <div className="p-4 border rounded-md border-slate-100">
                            <div className="flex justify-start items-center w-full grid-cols-4 gap-4 ">
                              <div className="w-[100px] col-span-4 px-2 py-6 border rounded-sm md:col-span-1 border-slate-100">
                                
                                    <button className="flex items-center justify-center"
                                            onClick={()=>{setFileManager(true)
                                              setOpenFileManager(true)
                                              setSelectTypeFileFromFileManager('license')}}>
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-400">
                                          افزودن
                                        </span>
                                      </div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 mx-2 text-slate-400"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                      </svg>
                                    </button>
                                  
                                </div>
                              <div className="flex justify-end items-center max-w-[310px] p-1 border-2 rounded-md overflow-x-auto">
                             {
                              choosePermissionFiles && choosePermissionFiles.map( image =>

                                <div className="relative w-[80px] h-[80px] ml-2 col-span-4 border rounded-sm md:col-span-1 border-slate-100">
                                  <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50 ">
                                    
                                    <button onClick={()=>{
                                                      setFileNameForDeleted(image.name)
                                                      setChosenFileDeleted(true)
                                                      setSelectTypeFileFromFileManager('license')
                                                      }}>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-rose-500"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                    </button>
                                  </span>
                                  {
                                    iconFile(image.name) === 'image' ?
                                    <img
                                    src={`${rootFileAddress}/${image.name}`}
                                    
                                    className="w-[80px] h-[60px]"
                                    />
                                    : <div className="text-center mt-2">
                                      {
                                        iconFile(image.name)
                                      }
                                      </div>
                                  }
                                  {/* eror dar mamayesh ax */}
                                </div>
                              )
                              }
                            </div>
                              </div>
                                
                            </div>
                          </div>
                          <div className="col-span-2 standard-col md:col-span-1">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col my-3 products-specifications-title">
                                <h5 className="text-xs font-semibold md:text-sm">
                                راهنمای استفاده از محصول
                                </h5>
                              </div>
                              <Link href="/">
                                <a className="flex items-center h-full">
                                  <p className="text-xs text-slate-400">مشاهده همه </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-3 h-3 mr-1 text-slate-400"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                          <div className=" flex justify-end p-4 border rounded-md border-slate-100">
                            <div className="flex justify-start items-center w-full grid-cols-4 gap-4 ">
                              <div className="w-[100px] col-span-4 px-2 py-6 border rounded-sm md:col-span-1 border-slate-100">
                                     
                                  <button className="flex items-center justify-center"
                                          onClick={()=>{setFileManager(true)
                                            setOpenFileManager(true)
                                            setSelectTypeFileFromFileManager('catalog')}}>
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs text-slate-400">
                                        افزودن
                                      </span>
                                    </div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 mx-2 text-slate-400"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                      />
                                    </svg>
                                  </button>
                                
                              </div>                              
                              <div className="flex justify-end items-center max-w-[310px] p-1 border-2 rounded-md overflow-x-auto">
                             {
                              chooseHelpFiles && chooseHelpFiles.map( image =>

                                <div className="relative w-[80px] h-[80px] ml-2 col-span-4 border rounded-sm md:col-span-1 border-slate-100">
                                  <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50 ">
                                    
                                    <button onClick={()=>{
                                                      setFileNameForDeleted(image.name)
                                                      setChosenFileDeleted(true)
                                                      setSelectTypeFileFromFileManager('catalog')
                                                      }}>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-rose-500"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                    </button>
                                  </span>
                                  
                                  {
                                    iconFile(image.name) === 'image' ?
                                    <img
                                    src={`${rootFileAddress}/${image.name}`}
                                    
                                    className="w-[80px] h-[60px]"
                                    />
                                    : <div className="text-center mt-2">
                                      {
                                        iconFile(image.name)
                                      }
                                      </div>
                                  }
                                  {/* eror dar mamayesh ax */}
                                </div>
                              )
                              }
                            </div>

                                
                              </div>
                                
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2 question-content">
                          <div className="flex flex-col mb-2 discount-title">
                            <h5 className="text-xs font-semibold md:text-sm">
                              سوالات متداول
                            </h5>
                          </div>
                          <div class="flex">
                            <span class="inline-flex items-center md:px-3 px-1 md:text-sm text-[10px] text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 ">
                              سوال
                            </span>
                            <input
                              onChange={(e)=>{setFQuestion(e.target.value)}}
                              name='question'
                              value={FQuestion}
                              type="text"
                              id="website-admin"
                              class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full md:text-sm text-[8px] border-gray-300 p-2.5"
                              placeholder="از زمان سفارش محصول تا زمان تحویل به مشتری حدودا چقدر زمان می برد ؟"
                            />
                          </div>
                          <div class="flex">
                            <span class="inline-flex items-center md:px-3 px-1 md:text-sm text-[10px] text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                              پاسخ
                            </span>
                            <input
                              onChange={(e)=>{setFAanswer(e.target.value)}}
                              name='answer'
                              value= {FAnswer}
                              type="text"
                              id="website-admin"
                              class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full md:text-sm text-[8px] border-gray-300 p-2.5"
                              placeholder="با توجه به زمان سفارش و مکان تحویل محصول بین ۲ تا ۵ روز کاری متغییر است"
                            />
                          </div>
                        </div>
                        <span hidden={!showFAQ} className="bg-[#4b4b4b99] fixed top-0 left-0 right-0 bottom-0 max-w-[100%] max-h-[100%] z-[200]">
                          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-w-[100%] max-h-[100%] z-[201] bg-transparent align-middle">
                            <div className="flex justify-end">
                              <i className="bi bi-x-square-fill cursor-pointer text-red-700"
                              onClick={()=>{ setShowFAQ(false)
                              }}></i>
                            </div>  
                            <div className="border-2 bg-white border-slate-300 rounded-lg px-2 py-1">
                              {
                                FAQ.length === 0 ? <p className="px-4 py-2">برای این محصول سوالات متداولی ایجاد نشده است</p> :  FAQ.map((faq, index)=>
                                  <div className="border-2 border-slate-200 rounded-lg px-2 py-1 w-[500px] mb-2">
                                    <div className="flex justify-end">
                                      <i onClick={()=>deleteFAQClickHandler(faq.question)}                        
                                        className="bi bi-trash text-left"></i>
                                    </div>
                                    <div className="flex items-center mb-2">
                                      <label className="bg-gray-200 px-2 py-1 rounded-tr-sm rounded-br-sm">سوال</label>
                                      <p className="w-full px-2 py-1">{faq.question}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                      <label className="bg-gray-200 px-2 py-1 rounded-tr-sm rounded-br-sm">پاسخ</label>
                                      <p className="w-full px-2 py-1">{faq.answer}</p>
                                    </div>
                                  </div>
                              )
                              }
                            </div>
                          </div>
                        </span>
                        <div className="inline-flex justify-end w-full my-3 btn-add">
                          <button 
                            onClick={()=>{
                              setFAQ([...FAQ, {question: FQuestion,
                                answer: FAnswer}])
                              setFAanswer('')
                              setFQuestion('')
                              }}          
                            className="link-add-slide md:w-36 w-24 h-full md:px-2.5 px-1 md:py-1.5 py-0.5 border border-slate-400 rounded-md flex items-center justify-center hover:bg-blue-500 hover:text-white">
                            <span className="ml-3 text-xs text-slate-400 hover:text-white"></span>
                            افزودن
                            
                          </button>
                          <button className="mr-4 border-2 border-orange-300 rounded-lg px-2 py-1 hover:bg-orange-300 hover:text-white"  
                                  onClick={()=>{setShowFAQ(true)}}>نمایش</button>
                        </div>
                      </div>
                      <div className="flex justify-end w-full h-full py-4 border-t-2 border-dotted next-btn border-slate-100">
                        <div className="flex items-center justify-between w-full">
                          <div className="inline-flex items-center">
                            <div className="col-span-12 md:col-span-3">
                              <label className="px-2 mb-2 text-sm text-slate-700">
                              وضعیت محصول
                              </label>
                              <select
                                name='status'
                                value={productDetailsInfo.status}
                                onChange={fillDetailProductInfoOnChangeHandler}
                                className= {`form-select form-select-text-style py-[0.575rem] pr-2 ${!touched.status ? '' : productDetailsInfo.status === '' ? 'border border-danger' : ''}`}
                                // ${productDetailsInfo.status === "" && touched.status && 'border-4 border-red-600' }
                                aria-label="Default select example"
                                onFocus={focusHandler}
                              >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="publish"
                              >انتشار</option>
                              <option
                                className="text-sm text-slate-400"
                                value="draft"
                              >پیش نویس</option>
                              <option
                                className="text-sm text-slate-400"
                                value="scheduling"
                              >در صف انتظار</option>
                              <option
                                className="text-sm text-slate-400"
                                value="unavailable"
                              >ناموجود</option>
                            </select>
                          </div>
                            <div>
                              <div hidden={!scheduling} className="text-sm mr-2 mt-4 z-100">
                                <DtPicker
                                  className="text-center IranSanse "
                                  onChange={setDate}
                                  local="fa"
                                  
                                  withTime
                                  showTimeInput
                                  placeholder='تاریخ انتشار را وارد کنید'
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="before-btn my-6 ml-4">
                              <Link href="/">
                                <a
                                  class="bg-orange-400  hover:bg-orange-500 text-white rounded-md text-xs px-2 py-1.5"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  پیش نمایش
                                </a>
                              </Link>
                            </div>
                          <div className="end-save">
                            <button 
                              onClick={(e) => {saveProductDetailClickHandler(e)
                                               setLoadingSpinner(true)}}
                              className="px-2 py-1 my-6 bg-blue-500 rounded-md hover:bg-blue-400">

                              {
                                loadingSpinner === true ? 
                                <div
                                  className="spinner-border text-xs px-2 py-1 text-white"
                                  role="status"
                                ><span className="sr-only">Loading...</span></div>
                              :
                                <span className="text-xs text-white">ثبت نهایی</span>
                              }
                              </button>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default add;
