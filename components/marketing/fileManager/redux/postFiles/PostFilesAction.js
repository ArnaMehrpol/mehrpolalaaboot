import axios from "axios"
import Cookies from "universal-cookie"
import config from "../../utils/config"

const fetchPostFilesRequest = ()=>{
  return {
    type: 'FETCH_POST_FILES_REQUEST',
  }
}
const fetchPostFilesSuccess = province =>{
  return{
    type : 'FETCH_POST_FILES_SUCCESS',
    payload: province,    
  }
}

const fetchPostFilesFailure = error => {
  return{
    type: 'FETCH_POST_FILES_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchPostFiles = (file,folder_id) =>{
  const cookies = new Cookies();
  const tokenId = cookies.get('token')
  
  return async (dispatch) =>{
    dispatch(fetchPostFilesRequest())
    await axios({
      method: 'post',
      url: `${config.api_url}/user/filemanager/upload-file`,
      data: {
        file: file,
        folder_id: folder_id
      },
      headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': "Bearer " + tokenId,
    }},)
      .then(async response =>{
        const dataFiles = await response.data;
        dispatch(fetchPostFilesSuccess(dataFiles))
      })
      .catch(async error => {
        const errorMsg = await error.message
        dispatch(fetchPostFilesFailure(errorMsg))
      })
  }
}

export {fetchPostFiles}