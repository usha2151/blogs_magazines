import { combineReducers } from "redux";
import userReducer from "./reducer";
import magazineReducer from "./magazinereducer";
import interReducer from "./interviewreducer";

const rootred = combineReducers({
    userReducer,
    magazineReducer,
    interReducer
});

export default rootred