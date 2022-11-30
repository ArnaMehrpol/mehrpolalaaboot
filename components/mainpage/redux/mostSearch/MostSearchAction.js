import axios from "axios"
import config from "../../../utils/config"

const fetchRequest = ()=>{
  return {
    type: 'FETCH_REQUEST',
  }
}
const fetchSuccess = province =>{
  return{
    type : 'FETCH_SUCCESS',
    payload: province,    
  }
}

const fetchFailure = error => {
  return{
    type: 'FETCH_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchData = () =>{
  let dataFiles
  return async (dispatch)  =>{
    dispatch(fetchRequest())
    await axios.get(`${config.api_url}/public/pages/home/search-section`,
    {headers: {
      'Accept': "application/json",
      
    }},)
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

export {fetchData}