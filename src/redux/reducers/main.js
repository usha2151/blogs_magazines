import { combineReducers } from "redux";
import userReducer from "./reducer";
import magazineReducer from "./magazinereducer";
import interReducer from "./interviewreducer";
import interviewIdReducer from "./interviewIdReducer";
import blogIdReducer from "./blogIdReducer";
import magazineIdReducer from "./magazineIdReducer";
import talkshowReducer from "./talkshowReducer";
import talkshowIdReducer from "./talkshowIdReducer";
const rootred = combineReducers({
    userReducer,
    magazineReducer,
    interReducer,
    interviewIdReducer,
    blogIdReducer,
    magazineIdReducer,
    talkshowReducer,
    talkshowIdReducer
});

export default rootred