import { GET_MAGAZINE } from "../actions/action";

const initialState=[];

const magazineReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MAGAZINE:
          return action.payload;

      default:
        return state;
    }
  };

  export default magazineReducer;