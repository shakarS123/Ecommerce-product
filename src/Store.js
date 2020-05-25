import thank from "redux-thunk";
import rootReducer from "./Reducer/Index";

import {createStore, applyMiddleware} from 'redux';

const middleware=[thank];
const initialState={};

const Store= createStore(
    rootReducer,
    initialState,

        applyMiddleware(...middleware)
);
export default Store;