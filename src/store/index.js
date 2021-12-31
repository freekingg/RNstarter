import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
 }

