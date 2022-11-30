import axios from "axios"
import config from "../../../utils/config"

const newestFetchRequest = ()=>{
  return {
    type: 'NEWEST_FETCH_REQUEST',
  }
}
const newestFetchSuccess = province =>{
  return{
    type : 'NEWEST_FETCH_SUCCESS',
    payload: province,    
  }
}

const newestFetchFailure = error => {
  return{
    type: 'NEWEST_FETCH_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const newestFetchData = () =>{
  let newestData
  return async (dispatch)  =>{
    dispatch(newestFetchRequest())
    await axios.get(`${config.api_url}/public/pages/home/new-products-section`,
    {headers: {
      'Accept': "application/json",
      
    }},)
      .then(async response =>{
        newestData = await response.data
        console.log('newestData: ',newestData)
        dispatch(newestFetchSuccess(newestData))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(newestFetchFailure(errorMsg))
      })
  }
}

export {newestFetchData}