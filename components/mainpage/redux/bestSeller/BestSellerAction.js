import axios from "axios"
import config from "../../../utils/config"

const bestSellerFetchRequest = ()=>{
  return {
    type: 'BEST_SELLER_FETCH_REQUEST',
  }
}
const bestSellerFetchSuccess = province =>{
  return{
    type : 'BEST_SELLER_FETCH_SUCCESS',
    payload: province,    
  }
}

const bestSellerFetchFailure = error => {
  return{
    type: 'BEST_SELLER_FETCH_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const bestSellerFetchData = () =>{
  let bestSellerData
  return async (dispatch)  =>{
    dispatch(bestSellerFetchRequest())
    await axios.get(`${config.api_url}/public/pages/home/best-sellers-section`,
    {headers: {
      'Accept': "application/json",
      
    }},)
      .then(async response =>{
        bestSellerData = await response.data
        console.log('bestSellerData: ',bestSellerData)
        dispatch(bestSellerFetchSuccess(bestSellerData))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(bestSellerFetchFailure(errorMsg))
      })
  }
}

export {bestSellerFetchData}