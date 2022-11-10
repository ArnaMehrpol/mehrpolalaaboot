const initialState ={
  loading: false,
  data: [],
  error: ''
}

const searchContentReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_SEARCH_CONTENT_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_SEARCH_CONTENT_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FFETCH_SEARCH_CONTENT_FAILURE':
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