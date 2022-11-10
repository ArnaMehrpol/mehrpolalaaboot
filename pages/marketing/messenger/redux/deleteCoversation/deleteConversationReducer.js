const initialState ={
  loading: false,
  data: [],
  error: ''
}

const deleteConversationReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_DELETE_CONVERSATION_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_DELETE_CONVERSATION_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FFETCH_DELETE_CONVERSATION_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default deleteConversationReducer