import axios from "axios"
import Cookies from "universal-cookie"
import config from "../../utils/config"


const fetchPostFolderRequest = ()=>{
  return {
    type: 'FETCH_POST_FOLDER_REQUEST',
  }
}
const fetchPostFolderSuccess = province =>{
  return{
    type : 'FETCH_POST_FOLDER_SUCCESS',
    payload: province,    
  }
}

const fetchPostFolderFailure = error => {
  return{
    type: 'FETCH_POST_FOLDER_FAILURE',
    payload: error,
  }
}
//`${process.env.NEXT_APP_BASE_URL}`
const fetchPostFolder = (nameFolder, parent_id) =>{
  const cookies = new Cookies();
  const tokenId = cookies.get('token')
  const businessId = cookies.get('b-Id')

  return async (dispatch) =>{
    console.log('folderID:', parent_id)
    dispatch(fetchPostFolderRequest())
    await axios({
      method: 'post',
      url: `${config.api_url}/businesses/${businessId}/filemanager/create-folder`,
      data: {
        name: nameFolder,
        folder_id: parent_id,
      },
      headers: {
        'Accept': "application/json",
        'Authorization': "Bearer " + tokenId,
      },
  }).then(async response =>{
      const dataFiles = await response.data;
      dispatch(fetchPostFolderSuccess(dataFiles))
      })
      .catch(async error => {
        const errorMsg = await error.message
        dispatch(fetchPostFolderFailure(errorMsg))
      })
  
    
    
    
    
    // axios.post('https://dfgsdfgsdfgj32gsdg.mehrpol.com/api/user/filemanager/create-folder',
    // {
    //   body:JSON.stringify({
    //     name: 'mynamefolder',
    //     folder_id: 25,
    //     parent_id: 'null',
    //     type: 'folder'
    //   }),
    //   headers: {
    //   'Accept': "application/json",
    //   "Content-Type": "application/json; charset= UTF-8",        
    //   'Authorization': "Bearer " + '5|rmoUCOZwyOq6xIrwEKFLo8nKkbiDGddskTyDoBsX',
    // }},)
    //   .then(response =>{
    //     const dataFiles = response.data
    //     dispatch(fetchPostFolderSuccess(dataFiles))
    //   })
    //   .catch(error => {
    //     const errorMsg = error.message
    //     dispatch(fetchPostFolderFailure(errorMsg))
    //   })
  }
}

export {fetchPostFolder}