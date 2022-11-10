import axios from "axios"

import config  from "../../../utils/config"

const fetchAddArchiveRequest = ()=>{
  return {
    type: 'FETCH_ADD_ARCHIVE_REQUEST',
  }
}
const fetchAddArchiveSuccess = province =>{
  return{
    type : 'FETCH_ADD_ARCHIVE_SUCCESS',
    payload: province,    
  }
}

const fetchAddArchiveFailure = error => {
  return{
    type: 'FETCH_ADD_ARCHIVE_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchAddArchive = (businessId)=>{
  let dataContent
  return async (dispatch) =>{
    dispatch(fetchAddArchiveRequest())
    await axios({
        method: 'post',
        url: `${config.api_url}/businesses/1/communication/message/conversations/archives?conversation_id=${businessId}`,
        
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json; charset= UTF-8",   
          'Authorization': 'Bearer ' + config.token_id,
        }},)
      .then(response =>{
        const dataContent = response.data
        dispatch(fetchAddArchiveSuccess(dataContent))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchAddArchiveFailure(errorMsg))
      })
  }
}

export {fetchAddArchive}