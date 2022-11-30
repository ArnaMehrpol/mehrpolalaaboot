import { combineReducers } from "redux";

import stateReducer from "./loadState/LoadStateReducer";
import citiesReducer from "./loadCities/LoadCitiesReducer";

import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";


const rootReducer = combineReducers({
  loadState: stateReducer,
  loadCities: citiesReducer,
  productsState: productsReducer,
  cartState: cartReducer
})

export default rootReducer