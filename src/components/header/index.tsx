import * as React from 'react';
import TodoTextInput from '../../containers/todo_text_input/container';

type HeaderProps = {
  addTodo?: () => any;
}

const placeholder = 'What needs to be done?';

export default ({ addTodo }: HeaderProps) => (
  <header className='header'>
    <h1>todos</h1>
    <TodoTextInput isNew placeholder={placeholder} onSubmit={addTodo} />
  </header>
);
