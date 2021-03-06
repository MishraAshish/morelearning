import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import user from "./reducers/userreducer";
//import other from "./reducers/userreducer";

const myLogger = () => (next) => (action) => {    
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers({
        user
    }),
    {},
    applyMiddleware(myLogger, promise)
)