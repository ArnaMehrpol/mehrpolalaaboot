const initialState ={
  loading: false,
  data: [],
  error: ''
}

const postFolderReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_POST_FOLDER_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_POST_FOLDER_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_POST_FOLDER_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default postFolderReducer