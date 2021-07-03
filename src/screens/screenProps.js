import {Dimensions, StatusBar} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const screenHeight =
  Dimensions.get('window').height - StatusBar.currentHeight;
export const statusBarHeight = StatusBar.currentHeight;
