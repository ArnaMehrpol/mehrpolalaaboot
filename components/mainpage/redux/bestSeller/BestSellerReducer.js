const initialState ={
  loading: false,
  data: [],
  error: ''
}

const bestSellerReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'BEST_SELLER_FETCH_REQUEST':
      return{
        ...state,
        loading: true
      }
    
    case 'BEST_SELLER_FETCH_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    
    case 'BEST_SELLER_FETCH_FAILURE':
      return{
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default bestSellerReducer