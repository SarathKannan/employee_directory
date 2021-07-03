import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from '../container/HomeContainer';
import Details from '../container/DetailsContainer';

import screens from '../screens';
import { navigationRef } from './service';

const Stack = createStackNavigator();

homeNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={screens.Home} component={Home} />
        <Stack.Screen name={screens.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default homeNavigator;
