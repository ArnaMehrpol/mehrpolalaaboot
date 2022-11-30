const initialState ={
  loading: false,
  data: [],
  error: ''
}

const dataReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default dataReducer