import {StyleSheet} from 'react-native';
import { deviceHeight, deviceWidth, statusBarHeight } from './screenProps';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 15,
    marginTop : statusBarHeight
    // height: '100%'
  },
  cardMain: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginVertical: 5,
    flexDirection: 'row',
    elevation : 5
  },
  imageArea: {
    // width: '30%',
    borderRadius : 50,
    overflow : 'hidden',
    borderWidth : 1
  },
  textArea: {
    padding: 5,
    marginLeft : 10,
    justifyContent : "center"
  },
  name: {
    fontSize : 16,
    fontWeight : "bold"
  },
  companyName: {},
  image : {
    height : 75,
    width : 75
  },

  serach : {
    height : 100,
    width : "100%",
    justifyContent : "center"
    // backgroundColor :"gray"
  },

  _textinput: {
    height: 45,
    borderRadius: 4,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 12,
    // opacity: 0.5,
    color : "#000",
    justifyContent: 'center',
  },


  // Details Page
  headerMain : {
    // height : deviceHeight * 0.4,
    width : "100%",
    // backgroundColor : "green",
    alignItems : "center",
    justifyContent : "center",
    paddingTop : 30,
    paddingBottom : 25
  },
  back : {
    position : "absolute",
    height : 40,
    width : 40,
    top : 0,
    left : 0,
    alignItems : "center",
    justifyContent : "center"
  },
  mainImageArea : {
    height : deviceWidth * 0.5,
    width : deviceWidth * 0.5,
    backgroundColor : "pink",
    borderRadius : deviceWidth * 0.4,
    zIndex : 2,
    overflow : "hidden",
    marginBottom : 15
  },
  nameHead : {
    fontSize : 30,
    fontWeight : "bold"
  },
  imageHead : {
    height : deviceWidth * 0.5,
    width : deviceWidth * 0.5,
  },
  company : {
    fontSize : 18,
  },
  bodyHead : {
    flexDirection : "row",
    paddingVertical : 5
  },
  bodyHeadTxt : {
    fontSize : 22,
    fontWeight : "bold",
    paddingLeft : 5
  }
});

export default styles;
