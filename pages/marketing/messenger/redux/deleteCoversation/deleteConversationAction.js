import axios from "axios"

import config  from "../../../utils/config"

const fetchDeleteConversationRequest = ()=>{
  return {
    type: 'FETCH_DELETE_CONVERSATION_REQUEST',
  }
}
const fetchDeleteConversationSuccess = province =>{
  return{
    type : 'FETCH_DELETE_CONVERSATION_SUCCESS',
    payload: province,    
  }
}

const fetchDeleteConversationFailure = error => {
  return{
    type: 'FETCH_DELETE_CONVERSATION_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchDeleteConversation = (businessId)=>{
  let dataContent
  return async (dispatch) =>{
    dispatch(fetchDeleteConversationRequest())
    await axios({
        method: 'post',
        url: `${config.api_url}/businesses/1/communication/message/conversations/3/delete-for-me?conversation_id=${businessId}`,
        
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json; charset= UTF-8",   
          'Authorization': 'Bearer ' + config.token_id,
        }},)
      .then(response =>{
        const dataContent = response.data
        dispatch(fetchDeleteConversationSuccess(dataContent))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchDeleteConversationFailure(errorMsg))
      })
  }
}

export {fetchDeleteConversation}