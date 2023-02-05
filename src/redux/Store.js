import {legacy_createStore as createStore, combineReducers} from "redux";
import { productReducer } from "./reducer";


export const Store = createStore(
    productReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )