import { always, append } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import { container, merge } from 'architecture';
import Message, { Activate } from 'architecture/message';

import App from './index.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

class AddTodo extends Message {};

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

    [AddTodo, (state, data) => merge(state, append(data, state.todos))],
  ],

  view: ({ emit, todos }) => (
    <App
      todos={todos}
      addTodo={emit(AddTodo)}
    />
  ),
});
