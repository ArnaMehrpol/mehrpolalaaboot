const initialState ={
  loading: false,
  data: [],
  error: ''
}

const mostPoplularReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'MOST_POPULAR_FETCH_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'MOST_POPULAR_FETCH_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'MOST_POPULAR_FETCH_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default mostPoplularReducer