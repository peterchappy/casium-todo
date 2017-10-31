import { always, identity, merge } from 'ramda';
import * as React from 'react';

import { container } from 'architecture';
import Message, { Activate } from 'architecture/message';

import TodoTextInput from './index';

class TextInputChange extends Message {}
class AddTodo extends Message {}
class Blur extends Message {}

// const handleSave = (addTodo, text) => {
//   if (text.length !== 0) {
//     addTodo(text);
//   }
// };

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

    [TextInputChange, (state, { text }) => merge(state, { todoText: text })],

    [AddTodo, identity], //TODO: Flesh this bad boy out

    [Blur, identity]
  ],

  view: ({ emit, text, editing, newTodo, placeholder, todoText }) => (
    <TodoTextInput
      handleBlur={emit(Blur)}
      handleSubmit={emit(AddTodo)}
      handleChange={emit(TextInputChange)}
      text={todoText}
      editing={editing}
      newTodo={newTodo}
      placeholder={placeholder}
    />
  )
});