import { GET_TALKSHOW } from "../actions/action";

const initialState = [];

const talkshowReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TALKSHOW:
          return action.payload;

      default:
        return state;
    }
  };

  export default talkshowReducer;