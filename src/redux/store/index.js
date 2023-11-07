// costruzione del redux store
// funzioen dal toolkit
// import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
//configure store ha bisogno di un oggetto

// const store = configureStore({
//indicare qual'è il reducer! il suo creatore
//   reducer: mainReducer,
// });
// export default store;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobReducer from "../reducers/jobs";
import favReducer from "../reducers/fav";
// import mainReducer from "../reducers";
const CombinedReducer = combineReducers({ jobs: jobReducer, fav: favReducer });

const store = configureStore({
  reducer: CombinedReducer,
});

export default store;
