const initialState ={
  loading: false,
  data: [],
  error: ''
}

const makeConversationReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_MAKE_CONVERSATION_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_MAKE_CONVERSATION_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FFETCH_MAKE_CONVERSATION_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default makeConversationReducer