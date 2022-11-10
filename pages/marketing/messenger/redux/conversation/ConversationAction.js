import axios from "axios"

import config from "../../../utils/config"

const fetchConversationRequest = ()=>{
  return {
    type: 'FETCH_CONVERSATION_REQUEST',
  }
}
const fetchConversationSuccess = province =>{
  return{
    type : 'FETCH_CONVERSATION_SUCCESS',
    payload: province,    
  }
}

const fetchConversationFailure = error => {
  return{
    type: 'FETCH_CONVERSATION_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchConversationAction = ()=>{
  let dataFiles
  return async (dispatch) =>{
    dispatch(fetchConversationRequest())
    await axios({
        method: 'get',
        url: `${config.api_url}/businesses/1/communication/message/conversations`,
        
      headers: {
      'Accept': "application/json",
      "Content-Type": "application/json; charset= UTF-8",   
      'Authorization': 'Bearer ' + config.token_id,
    }},)
    .then(async response =>{
      dataFiles = await response.data
      console.log('dataFiles: ',dataFiles)
      dispatch(fetchConversationSuccess(dataFiles))
    })
    .catch(async error => {
      const errorMsg =await error.message
      dispatch(fetchConversationFailure(errorMsg))
    })
  }
}

export {fetchConversationAction}