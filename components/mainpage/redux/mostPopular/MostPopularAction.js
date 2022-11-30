import axios from "axios"
import config from "../../../utils/config"

const mostPopularfetchRequest = ()=>{
  return {
    type: 'MOST_POPULAR_FETCH_REQUEST',
  }
}
const mostPopularfetchSuccess = province =>{
  return{
    type : 'MOST_POPULAR_FETCH_SUCCESS',
    payload: province,    
  }
}

const mostPopularfetchFailure = error => {
  return{
    type: 'MOST_POPULAR_FETCH_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const mostPopularfetchData = () =>{
  let dataFiles
  return async (dispatch)  =>{
    dispatch(mostPopularfetchRequest())
    await axios.get(`${config.api_url}/public/pages/home/populars-section`,
    {headers: {
      'Accept': "application/json",
      
    }},)
      .then(async response =>{
        dataFiles = await response.data
        console.log('dataFiles: ',dataFiles)
        dispatch(mostPopularfetchSuccess(dataFiles))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(mostPopularfetchFailure(errorMsg))
      })
  }
}

export {mostPopularfetchData}