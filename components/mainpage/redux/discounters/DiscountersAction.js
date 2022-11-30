import axios from "axios"
import config from "../../../utils/config"

const discountersFetchRequest = ()=>{
  return {
    type: 'DISCOUNTERS_FETCH_REQUEST',
  }
}
const discountersFetchSuccess = province =>{
  return{
    type : 'DISCOUNTERS_FETCH_SUCCESS',
    payload: province,    
  }
}

const discountersFetchFailure = error => {
  return{
    type: 'DISCOUNTERS_FETCH_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const discountersFetchData = () =>{
  let newestData
  return async (dispatch)  =>{
    dispatch(discountersFetchRequest())
    await axios.get(`${config.api_url}/public/pages/home/has-discounts-section`,
    {headers: {
      'Accept': "application/json",
      
    }},)
      .then(async response =>{
        newestData = await response.data
        console.log('newestData: ',newestData)
        dispatch(discountersFetchSuccess(newestData))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(discountersFetchFailure(errorMsg))
      })
  }
}

export {discountersFetchData}