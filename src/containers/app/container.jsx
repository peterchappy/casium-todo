import { always } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import { container } from 'architecture';
import Message, { Activate } from 'architecture/message';

import App from './index.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

class AddToDo extends Message {};

const AppViewWrapper = ({emit}) => (
  <App />
);

AppViewWrapper.propTypes = {
  emit: PropTypes.func.isRequired,
};

const initialState = {
  todos: [
    {
      text: 'Use Architecture',
      completed: false,
      id: 0,
    },
  ],
  filter: SHOW_ALL,
};

export default container({
  name: 'AppContainer',

  init: always(initialState),

  update: [
    [Activate, state => state],
    [AddToDo, state => state],
  ],

  view: AppViewWrapper,
});
