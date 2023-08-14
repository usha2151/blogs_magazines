import { createStore, applyMiddleware } from "redux";
import rootred from "./redux/reducers/main";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    rootred,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store