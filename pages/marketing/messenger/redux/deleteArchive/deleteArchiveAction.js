import axios from "axios"

import config  from "../../../utils/config"

const fetchDeleteArchiveRequest = ()=>{
  return {
    type: 'FETCH_DELETE_ARCHIVE_REQUEST',
  }
}
const fetchDeleteArchiveSuccess = province =>{
  return{
    type : 'FETCH_DELETE_ARCHIVE_SUCCESS',
    payload: province,    
  }
}

const fetchDeleteArchiveFailure = error => {
  return{
    type: 'FETCH_DELETE_ARCHIVE_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchDeleteArchive = (businessId)=>{
  let dataContent
  return async (dispatch) =>{
    dispatch(fetchDeleteArchiveRequest())
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
        dispatch(fetchDeleteArchiveSuccess(dataContent))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchDeleteArchiveFailure(errorMsg))
      })
  }
}

export {fetchDeleteArchive}