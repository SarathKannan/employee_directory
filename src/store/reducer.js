import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import homeReducer from '../container/redux/reducer';

const Config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['dataList'],
};

const HomeReducer = persistReducer(Config, homeReducer);


const rootReducer = combineReducers({
  HomeReducer,
});
export default rootReducer;
