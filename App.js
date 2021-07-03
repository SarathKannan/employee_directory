/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React from 'react';
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/integration/react';
 import {View} from 'react-native';
 import configureStore from './src/store';
 import AppNavigation from './src/Navigation/index';
 
 const {store, persistor} = configureStore();
 
 export default () => (
   <Provider store={store}>
     <PersistGate loading={<View style={{flex: 1}} />} persistor={persistor}>
       <AppNavigation />
     </PersistGate>
   </Provider>
 );
 