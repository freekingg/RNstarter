import * as Types from '../types';

// 设置登陆后信息 token domain
export const SET_LOGIN_INFO = payload => {
  return dispatch => {
    dispatch({
      type: Types.SET_LOGIN_INFO,
      payload,
    });
  };
};

// 设置顶层路由对象，用由app外层全局调用
export const SET_TOP_NAV = payload => {
  return dispatch => {
    dispatch({
      type: Types.SET_TOP_NAV,
      payload,
    });
  };
};

// 设置用户信息
export const SET_USER_INFO = payload => {
  return dispatch => {
    dispatch({
      type: Types.SET_USER_INFO,
      payload,
    });
  };
};

// 设置用户信息
export const SET_LOGIND = payload => {
  return dispatch => {
    dispatch({
      type: Types.SET_LOGIND,
      payload,
    });
  };
};
