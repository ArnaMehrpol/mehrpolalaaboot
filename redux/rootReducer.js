import { combineReducers } from "redux";

import stateReducer from "./loadState/LoadStateReducer";
import citiesReducer from "./loadCities/LoadCitiesReducer";

const rootReducer = combineReducers({
  loadState: stateReducer,
  loadCities: citiesReducer,
  
})

export default rootReducer