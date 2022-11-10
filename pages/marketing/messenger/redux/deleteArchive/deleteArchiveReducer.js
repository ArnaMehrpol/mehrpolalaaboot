const initialState ={
  loading: false,
  data: [],
  error: ''
}

const searchContentReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_DELETE_ARCHIVE_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_DELETE_ARCHIVE_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FFETCH_DELETE_ARCHIVE_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default searchContentReducer