import * as Actions from "redux/Actions";
import * as Types from "redux/Types";

export interface State {
  navbarToggle: boolean;
}

const initialState: State = {
  navbarToggle: false,
};

const Reducers = (state: State = initialState, action: Actions.AllActions) => {
  switch (action.type) {
    case Types.NAVBAR_TOGGLE:
      return { ...state, navbarToggle: action.payload };
    default:
      return state;
  }
};

export default Reducers;
