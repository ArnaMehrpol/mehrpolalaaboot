import axios from "axios"

import  config  from "../../../utils/config"

const fetchGetMessageRequest = ()=>{
  return {
    type: 'FETCH_GET_MESSEGE_REQUEST',
  }
}
const fetchGetMessageSuccess = province =>{
  return{
    type : 'FETCH_GET_MESSEGE_SUCCESS',
    payload: province,    
  }
}

const fetchGetMessageFailure = error => {
  return{
    type: 'FETCH_GET_MESSEGE_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchGetMessage = (businessId, contentMessage, chosenFiles)=>{
  let dataContent
  return async (dispatch) =>{
    let GetMessage
    console.log({businessId, contentMessage, chosenFiles})
    dispatch(fetchGetMessageRequest())
    await axios({
        method: 'get',
        
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
          GetMessage = await response.data
          console.log('dataFiles: ',GetMessage)
          dispatch(fetchGetMessageSuccess(GetMessage))
        })
        .catch(async error => {
          const errorMsg =await error.message
          dispatch(fetchGetMessageFailure(errorMsg))
        })
  }
}

export {fetchGetMessage}