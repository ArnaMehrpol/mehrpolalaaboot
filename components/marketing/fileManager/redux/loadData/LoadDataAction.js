import axios from "axios"
import Cookies from "universal-cookie"
import config from "../../utils/config"

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
  const cookies = new Cookies();
  const tokenId = cookies.get('token')
  const businessId = cookies.get('b-Id')
  let dataFiles, files
  return async (dispatch)  =>{
    dispatch(fetchRequest())
    await axios.get(`${config.api_url}/businesses/${businessId}/filemanager`,
    {headers: {
      'Accept': "application/json",
      "Content-Type": "application/json; charset= UTF-8",        
      'Authorization': "Bearer " + tokenId,
    }},)
      .then(async response =>{
        dataFiles = await response.data
        console.log('dataFiles: ',dataFiles)
        dispatch(fetchSuccess(dataFiles.data))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(fetchFailure(errorMsg))
      })
  }
}

export {fetchData}