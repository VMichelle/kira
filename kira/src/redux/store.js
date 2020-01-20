import { createStore } from "redux";
import { kira } from "./reducers/projectReducers";

export default createStore(
    kira,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
