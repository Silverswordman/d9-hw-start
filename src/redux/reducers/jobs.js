import { GETJOBS } from "../actions";

const initialState = {
  content: [],
};
const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETJOBS:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};
export default jobReducer;
