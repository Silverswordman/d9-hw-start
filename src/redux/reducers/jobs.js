import { GETJOBS } from "../actions";

const initialState = {
  jobs: [],
};
const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETJOBS:
      return { ...state, jobs: action.payload };

    default:
      return state;
  }
};
export default jobReducer;
