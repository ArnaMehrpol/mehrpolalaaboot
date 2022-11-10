const initialState ={
  loading: false,
  data: [],
  error: ''
}

const citiesReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'FETCH_CITIES_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'FETCH_CITIES_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'FETCH_CITIES_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default citiesReducer