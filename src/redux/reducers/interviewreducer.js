import { GET_INTERVIEW } from "../actions/action";

const initialState=[];

const interReducer = (state = initialState, action) => {
    switch (action.type) {
    
          case GET_INTERVIEW:
            return action.payload;
    
      default:
        return state;
    }
  };

  export default interReducer;