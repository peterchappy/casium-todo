import { always, identity, merge } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import { container, PARENT } from 'architecture';
import Message, { Activate } from 'architecture/message';

import TodoTextInput from './index.jsx';

class TextInputChange extends Message {}
class AddTodo extends Message {}
class Blur extends Message {}

const handleSave = (addTodo, text) => {
  if (text.length !== 0) {
    addTodo(text);
  }
};

export default container({
  name: 'TodoTextInputContainer',
  delegate: 'todo_input',

  init: always({
    placeholder: 'What needs to be done?',
    todoText: '',
    newTodo: true, //TODO make this a prop
  }),

  update: [
    [Activate, identity],

    [TextInputChange, (state, { text }) => merge(state, { todoText: text})],

    [AddTodo, identity], //TODO: Flesh this bad boy out

    [Blur, identity]
  ],

  view: ({ emit, text, editing, newTodo, placeholder, todoText }) => (
    <TodoTextInput
      handleOnBlur={emit(Blur)}
      onKeyDown={emit(AddTodo)}
      handleChange={emit(TextInputChange)}
      text={todoText}
      editing={editing}
      newTodo={newTodo}
      placeholder={placeholder}
    />
  )
});
