import { combineReducers } from "redux";

import dataReducer from "./mostSearch/MostSearchReducer";
import fastAccessReducer from "./fastAccess/FastAccessReducer";
import bestSellerReducer from "./bestSeller/BestSellerReducer";
import mostPoplularReducer from "./mostPopular/MostPopularReducer";
import discountersReducer from "./discounters/DiscountersReducer";
import newestReducer from "./newest/NewestReducer";

const rootReducer = combineReducers({
  loadMostSearch: dataReducer,
  loadFastAccess: fastAccessReducer,
  loadBestSeller: bestSellerReducer,
  loadMostPopular: mostPoplularReducer,
  loadDiscounter: discountersReducer,
  LoadNewest: newestReducer

})

export default rootReducer