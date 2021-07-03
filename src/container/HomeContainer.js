// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Home from '../screens/Home';
import {getData} from './redux/actions';

const HomeContainer = props => {
  const {navigation, HomeReducer, getData} = props;
  const {dataList, isLoading} = HomeReducer;
  useEffect(() => {
    navigation.addListener('focus', () => {
      if (dataList.length <= 0) {
        getData();
      }
    });
  }, []);

  return (
    <Home navigation={navigation} dataList={dataList} isLoading={isLoading} />
  );
};

function bindAction(dispatch) {
  return {
    getData: () => dispatch(getData()),
  };
}

const mapStateToProps = state => ({
  HomeReducer: state.HomeReducer,
});

export default connect(mapStateToProps, bindAction)(HomeContainer);
