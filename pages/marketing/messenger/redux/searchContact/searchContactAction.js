import axios from "axios"

import config  from "../../../utils/config"

const fetchSearchContentRequest = ()=>{
  return {
    type: 'FETCH_SEARCH_CONTENT_REQUEST',
  }
}
const fetchSearchContentSuccess = province =>{
  return{
    type : 'FETCH_SEARCH_CONTENT_SUCCESS',
    payload: province,    
  }
}

const fetchSearchContentFailure = error => {
  return{
    type: 'FETCH_SEARCH_CONTENT_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchSearchContent = (businessName)=>{
  let dataContent
  return async (dispatch) =>{
    dispatch(fetchSearchContentRequest())
    await axios({
        method: 'get',
        url: `${config.api_url}/public/businesses/search?name=${businessName}`,
        
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json; charset= UTF-8",   
          'Authorization': 'Bearer ' + config.token_id,
        }},)
      .then(response =>{
        const dataContent = response.data
        dispatch(fetchSearchContentSuccess(dataContent))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchSearchContentFailure(errorMsg))
      })
  }
}

export {fetchSearchContent}