import { REGISTER_USER, GET_BLOG } from "../actions/action";

const initialState=[];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        return [...state, action.payload];
          
            case GET_BLOG:
              return action.payload;  

      default:
        return state;
    }
  };

  export default userReducer;