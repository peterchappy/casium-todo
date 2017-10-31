import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppContainer from './containers/app/container';

const Main = () => <AppContainer />;

Object.assign(window, { React, AppContainer });
ReactDOM.render(Main(), document.getElementById('app'));
