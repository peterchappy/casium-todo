import { always, identity, is, merge } from 'ramda';
import * as React from 'react';

import { container } from 'architecture';
import Message, { Activate } from 'architecture/message';

import TodoTextInput from './index';

class TextInputChange extends Message {
  public static expects = { value: is(String) };
}

class Blur extends Message { }

export default container({
  name: 'TodoTextInputContainer',
  delegate: 'todo_input',

  init: always({
    placeholder: 'What needs to be done?',
    text: '',
    isNew: true,
    completed: false,
  }),

  update: [
    [Activate, identity],

    [TextInputChange, (state, { value }) => merge(state, { text: value })],

    [Blur, identity]
  ],

  view: ({ emit, text, editing, isNew, placeholder, todoText, onSubmit }) => (
    <TodoTextInput
      onBlur={text && emit(Blur) || undefined}
      onSubmit={onSubmit}
      onChange={emit(TextInputChange)}
      value={text}
      editing={editing}
      isNew={isNew}
      placeholder={placeholder}
    />
  )
});
