const initialState ={
  loading: false,
  data: [],
  error: ''
}

const newestReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'NEWEST_FETCH_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'NEWEST_FETCH_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'NEWEST_FETCH_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default newestReducer