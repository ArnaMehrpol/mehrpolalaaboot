const initialState ={
  loading: false,
  data: [],
  error: ''
}

const sendMessageReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_SEND_MESSEGE_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_SEND_MESSEGE_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_SEND_MESSEGE_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default sendMessageReducer