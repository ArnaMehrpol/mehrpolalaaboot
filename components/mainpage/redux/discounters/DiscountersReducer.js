const initialState ={
  loading: false,
  data: [],
  error: ''
}

const discountersReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'DISCOUNTERS_FETCH_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'DISCOUNTERS_FETCH_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'DISCOUNTERS_FETCH_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default discountersReducer