import {NativeModules} from 'react-native';

export function getVerSion() {
  return new Promise((resolve, reject) => {
    NativeModules.BridgeManager.getAppVersion(event => {
      resolve(event);
    });
  });
}
