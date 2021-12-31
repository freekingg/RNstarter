import * as Types from "../types";

const initialState = [];

const User = (state = initialState, action) => {
  const newState = { ...state };
  let { payload } = action;
  switch (action.type) {
    case Types.SET_BASE_INFO:
      return Object.assign({}, newState, {
        base_info: payload,
      });

    default:
  }
  return state;
};

export default User;
