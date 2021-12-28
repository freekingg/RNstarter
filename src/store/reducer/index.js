import * as Types from '../action/Types';
import Storage from '../../public/Storage';

const initialState = [];

const Reducer = (state = initialState, action) => {
  const newState = {...state};
  let {payload} = action;
  switch (action.type) {
    case Types.SET_LOGIN_INFO:
      Storage.setItem('socketDomain', payload.socketDomain);
      Storage.setItem('token',payload.token);

      return Object.assign({}, newState, {
        login_info: payload,
      });
    case Types.SET_USER_INFO:
      return Object.assign({}, newState, {
        user_info: payload,
      });
    case Types.SET_LOGIND:
      if (!payload) {
        Storage.removeItem('token');
      }
      return Object.assign({}, newState, {
        is_login: payload,
      });
    case Types.SET_TOP_NAV:
      return Object.assign({}, newState, {
        topLevelNavigator: payload,
      });
    default:
  }
  return state;
};

export default Reducer;
