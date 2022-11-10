import axios from "axios"

import config  from "../../../utils/config"

const fetchMakeConversationRequest = ()=>{
  return {
    type: 'FETCH_MAKE_CONVERSATION_REQUEST',
  }
}
const fetchMakeConversationSuccess = province =>{
  return{
    type : 'FETCH_MAKE_CONVERSATION_SUCCESS',
    payload: province,    
  }
}

const fetchMakeConversationFailure = error => {
  return{
    type: 'FFETCH_MAKE_CONVERSATION_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchMakeConversation = (title, priority, id)=>{
    return async (dispatch) =>{
      let resMakeConv
    console.log({title,priority,id})
    dispatch(fetchMakeConversationRequest())
    await axios({
        method: 'post',
        url: `${config.api_url}/user/communication/message/conversations`,
        data:{
          to_business_id: id,
          priority: priority,
          title:title
        },
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json; charset= UTF-8",   
          'Authorization': 'Bearer ' + config.token_id,
        }},)
      .then(async response =>{
        resMakeConv = await response.data
        console.log('dataFiles: ',resMakeConv)
        dispatch(fetchMakeConversationSuccess(resMakeConv))
      })
      .catch(async error => {
        const errorMsg =await error.message
        dispatch(fetchMakeConversationFailure(errorMsg))
      })
  }
}

export {fetchMakeConversation}