import { is, merge } from 'ramda';
import * as React from 'react';

import { container } from 'casium';
import Message from 'casium/message';

import TodoTextInput from './index';

class TextInputChange extends Message {
  public static expects = { value: is(String) };
}

export default container({
  name: 'TodoTextInputContainer',

  delegate: 'todo_input',

  update: [
    [TextInputChange, (state, { value }) => merge(state, { text: value })],
  ],

  view: ({ emit, text, editing, isNew, placeholder, todoText, onBlur = () => { }, onSubmit = () => {} }) => (
    <TodoTextInput
      onSubmit={onSubmit}
      onChange={emit(TextInputChange)}
      value={text}
      {...{ placeholder, isNew, editing, onBlur}}
    />
  )
});
