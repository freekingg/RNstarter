import axios from 'axios';
import {baseURL} from '../../app.json';
import {Alert, Linking} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Storage from '../public/Storage';
import store from '../store';
import {SET_LOGIND} from '../store/action/Actions';
import qs from 'qs';

// axios 实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 10,
  withCredentials: true,
});

//请求拦截
service.interceptors.request.use(
  async function (config) {
    console.log(store);

    let token = null;
    let version = '3.0.0';
    try {
      token = await Storage.getItem({key: 'token'});
    } catch (error) {
      token = '';
    }

    config.headers.token = token;
    config.headers.version = version;
    if (config.method === 'post' || config.method === 'put') {
      config.data = {
        ...config.data,
      };
    } else if (config.method === 'get') {
      config.params = {
        ...config.params,
        deviceType: 4,
      };
    }
    if (/^application\/x-www-form-urlencoded/.test(config.headers['Content-Type'])) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//响应拦截
service.interceptors.response.use(
  function (response) {
    /*
     * 10020 未授权
     * 10021 token失效
     * 410 网站维护
     * 403 访问受限
     */
    console.log('响应res', response);
    if (response.data.code === 0) {
      return response.data.data;
    } else if (response.data.code === 10020 || response.data.code === 10021) {
      store.dispatch(SET_LOGIND(false));
      console.log(store.getState().topLevelNavigator);
      // store.getState().topLevelNavigator.navigate('signIn');

      store.getState().topLevelNavigator.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {name: 'signIn'},
            {
              name: 'Profile',
              params: {user: 'jane'},
            },
          ],
        }),
      );

      return Promise.reject(response);
    } else if (response.data.code === 31049) {
      try {
        Alert.alert(
          '新版本提示',
          '点击确定下载',
          [
            {
              text: '确认升级',
              onPress: () => {
                Linking.openURL(response.data.msg).catch(err => console.error('An error occurred', err));
              },
            },
          ],
          {cancelable: false},
        );
      } catch (e) {
        console.log('e', e);
      }
      return Promise.reject(response);
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    // console.warn('响应Error', error);
    return Promise.reject(error);
  },
);
export default service;
