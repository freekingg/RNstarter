import * as Types from "../types";
import Storage from "../../public/Storage";

const initialState = [];

const User = (state = initialState, action) => {
  const newState = { ...state };
  let { payload } = action;
  switch (action.type) {
    case Types.SET_LOGIN_INFO:
      Storage.setItem("user", payload.data);
      Storage.setItem("token", payload.token);
      return Object.assign({}, newState, {
        login_info: payload,
      });
    case Types.SET_USER_INFO:
      return Object.assign({}, newState, {
        user_info: payload,
      });
    case Types.SET_LOGIND:
      if (!payload) {
        Storage.removeItem("token");
      }
      return Object.assign({}, newState, {
        is_login: payload,
      });
    case Types.SET_BASE_INFO:
      return Object.assign({}, newState, {
        base_info: payload,
      });

    default:
  }
  return state;
};

export default User;
