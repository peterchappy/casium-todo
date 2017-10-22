import { always } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import Message, { container, Activate } from 'architecture';

import App from './index.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

class AddToDo extends Message { };

const AppViewWrapper = ({emit}) => (
  <App
    addTodo={emit(AddToDo)}
    {...props}
  />
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
  ],

  view: AppViewWrapper,
});
