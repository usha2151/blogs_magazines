import { combineReducers } from "redux";
import userReducer from "./reducer";
import magazineReducer from "./magazinereducer";
import interReducer from "./interviewreducer";
import interviewIdReducer from "./interviewIdReducer";
import blogIdReducer from "./blogIdReducer";
import magazineIdReducer from "./magazineIdReducer";

const rootred = combineReducers({
    userReducer,
    magazineReducer,
    interReducer,
    interviewIdReducer,
    blogIdReducer,
    magazineIdReducer
});

export default rootred