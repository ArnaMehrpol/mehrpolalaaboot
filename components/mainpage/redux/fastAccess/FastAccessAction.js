import axios from "axios"
import config from "../../../utils/config"

const fastAccessFetchRequest = ()=>{
  return {
    type: 'FAST_ACCESS_FETCH_REQUEST',
  }
}
const fastAccessFetchSuccess = province =>{
  return{
    type : 'FAST_ACCESS_FETCH_SUCCESS',
    payload: province,    
  }
}

const fastAccessFetchFailure = error => {
  return{
    type: 'FAST_ACCESS_FETCH_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fastAccessFetchData = () =>{
  let fastAccessData
  return async (dispatch)  =>{
    dispatch(fastAccessFetchRequest())
    await axios.get(`${config.api_url}/public/pages/home/categories-section`,
    {headers: {
      'Accept': "application/json",
      
    }},)
      .then(async response =>{
        fastAccessData = await response.data
        console.log('fastAccessData: ',fastAccessData)
        dispatch(fastAccessFetchSuccess(fastAccessData))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(fastAccessFetchFailure(errorMsg))
      })
  }
}

export {fastAccessFetchData}