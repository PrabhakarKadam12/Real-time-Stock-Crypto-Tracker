// import { configureStore } from "@reduxjs/toolkit";
// import stockReducer from "./stockSlice";

// export const store = configureStore({
//   reducer: {
//     stock: stockReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
