// import any constants or actions you need
import { GET_TALKSHOWID } from "../actions/action";

// define the initial state
const initialState = [];

// define the reducer function
const talkshowIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TALKSHOWID:
      return action.payload; // assuming the payload is an array of interview data
    default:
      return state;
  }
};

export default talkshowIdReducer;