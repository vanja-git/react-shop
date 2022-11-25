import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
// import { ThunkAction } from "redux-thunk"
// import { applyMiddleware, compose, createStore } from "redux";

// import thunk from "redux-thunk";
import rootReducer from "./reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


/*
// create Redux store
// export const store = createStore(rootReducer); // simple store without debugger
// If you setup your store with middleware and enhancers, change:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
)); // store with support for thunk and redux-dev-tools and React Native Debugger
*/



const store = configureStore({
    reducer: {
        // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
        // photosStore: photosSliceReducer,
        rootReducer,

        // anyOtherStore: anyOtherSlice,
        // middleware: ['array of middlewares'],
        // devTools: process.env.NODE_ENV !== "development" ? false : true,
    },
});




export default store;