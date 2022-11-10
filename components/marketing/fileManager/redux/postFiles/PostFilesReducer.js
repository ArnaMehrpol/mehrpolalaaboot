const initialState ={
  loading: false,
  data: [],
  error: ''
}

const postFilesReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_POST_FILES_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_POST_FILES_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_POST_FILES_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default postFilesReducer