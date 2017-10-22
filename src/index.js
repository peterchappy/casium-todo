import R from 'ramda';
import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app/container.jsx';

const Main = () => (
  <AppContainer />
);

Object.assign(window, { React, AppContainer });
ReactDOM.render(Main(), document.getElementById('app'));
