// @flow
import React from 'react';
import {connect} from 'react-redux';

import Details from '../screens/Details';

const DetailsContainer = props => {
  const {navigation, route} = props;

  return <Details navigation={navigation} route={route} />;
};

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => ({
  HomeReducer: state.HomeReducer,
});

export default connect(mapStateToProps, bindAction)(DetailsContainer);
