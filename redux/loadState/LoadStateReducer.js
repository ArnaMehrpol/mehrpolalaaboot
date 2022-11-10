const initialState ={
  loading: false,
  data: [],
  error: ''
}

const stateReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_STATE_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_STATE_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_STATE_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default stateReducer