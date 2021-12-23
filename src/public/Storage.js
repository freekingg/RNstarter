
import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  async setItem(key, value) {
    if (!value) return null;
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      console.log('saving error',e);
    }
  }
  async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key)
      return value
    } catch(e) {
      // error reading value
      console.log('error reading value',e);
      return ''
    }
  }
  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch(e) {
      // remove error
      console.log('remove error',e);
      return false
    }
  }
}

export default new Storage();
