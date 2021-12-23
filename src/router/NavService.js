import {CommonActions} from '@react-navigation/native';

// 该服务作为单例模式使用，用于记录顶层导航器，这样在应用的各个部分，各个屏幕组件内部，
// 用于记录所使用的导航器  https://blog.csdn.net/weixin_34148340/article/details/91365044
let TopLevelNavigator;

/**
 * 记录所使用的导航器
 * @param navigatorRef
 */
const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

/**
 * 导航到目标路由/屏幕
 * @param routeName
 * @param params
 */
const navigate = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  navigate,
  setTopLevelNavigator,
};
