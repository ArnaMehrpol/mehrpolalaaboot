const initialState ={
  loading: false,
  data: [],
  error: ''
}

const fastAccessReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FAST_ACCESS_FETCH_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FAST_ACCESS_FETCH_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FAST_ACCESS_FETCH_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default fastAccessReducer