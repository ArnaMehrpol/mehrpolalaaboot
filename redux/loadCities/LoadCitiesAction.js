import axios from "axios"
import { axiosSetup } from "../../components/utils/axiosSetup"
import Cookies from "universal-cookie";

import config from "../../components/utils/config"

const fetchRequest = ()=>{
  return {
    type: 'FETCH_CITIES_REQUEST',
  }
}
const fetchSuccess = province =>{
  return{
    type : 'FETCH_CITIES_SUCCESS',
    payload: province,    
  }
}

const fetchFailure = error => {
  return{
    type: 'FETCH_CITIES_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchCities = (apiAddress, method, header, sendData) =>{

  let dataFiles, files
  return async (dispatch)  =>{
    dispatch(fetchRequest())
    
    console.log({method, apiAddress, header, sendData})
    axiosSetup(apiAddress, method, header,sendData)
  // console.log('this is axios')

  // let headers = {
  //   'Accept': "application/json",
  //   "Content-Type": "application/json; charset= UTF-8",      
  //   'Authorization':"Bearer 53|LMjCFzxRCMS4ycJ9iTZzbTMsB5guw4YoY2d9jhVI",
  // };

  // for(var key of Object.keys(headers))
  //   headers[key] = header[key];

  // await axios({
  //   method: method,
  //   url: `https://dfgsdfgsdfgj32gsdg.mehrpol.com/api${apiAddress}`,
   
  //   headers: headers
  // })
    //await axiosSetup(apiAddress, method, header, sendData)
    // await axios.get(`${config.api_url}/user/filemanager`,
    // {headers: {
    //   'Accept': "application/json",
    //   "Content-Type": "application/json; charset= UTF-8",        
    //   'Authorization': "Bearer " + config.token_id,
    // }},)
      .then(async response =>{
        dataFiles = await response.data
        console.log('dataFiles: ',dataFiles)
        dispatch(fetchSuccess(dataFiles))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(fetchFailure(errorMsg))
      })
  }
}

export {fetchCities}