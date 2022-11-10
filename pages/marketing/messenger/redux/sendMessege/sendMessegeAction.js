import axios from "axios"

import  config  from "../../../utils/config"

const fetchSendMessageRequest = ()=>{
  return {
    type: 'FETCH_SEND_MESSEGE_REQUEST',
  }
}
const fetchSendMessageSuccess = province =>{
  return{
    type : 'FETCH_SEND_MESSEGE_SUCCESS',
    payload: province,    
  }
}

const fetchSendMessageFailure = error => {
  return{
    type: 'FETCH_SEND_MESSEGE_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchSendMessage = (businessId, contentMessage, chosenFiles)=>{
  let dataContent
  return async (dispatch) =>{
    let sendMessage
    console.log({businessId, contentMessage, chosenFiles})
    dispatch(fetchSendMessageRequest())
    await axios({
        method: 'post',
        
        url: `${config.api_url}/businesses/1/communication/message/conversations/${businessId}/messages`,
        data:{
          body: contentMessage,
          files: chosenFiles
        },
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json; charset= UTF-8",   
          'Authorization': 'Bearer ' + config.token_id,
        }},)
        .then(async response =>{
          sendMessage = await response.data
          console.log('dataFiles: ',sendMessage)
          dispatch(fetchSendMessageSuccess(sendMessage))
        })
        .catch(async error => {
          const errorMsg =await error.message
          dispatch(fetchSendMessageFailure(errorMsg))
        })
  }
}

export {fetchSendMessage}