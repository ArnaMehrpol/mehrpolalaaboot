const initialState ={
  loading: false,
  data: [],
  error: ''
}

const getMessageReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_GET_MESSEGE_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_GET_MESSEGE_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_GET_MESSEGE_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default getMessageReducer