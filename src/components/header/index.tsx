import * as React from 'react';
import TodoTextInput from '../../containers/todo_text_input/container';

type HeaderProps = {
  addTodo?: () => any;
}

export default ({ addTodo }: HeaderProps) => (
  <header className='header'>
    <h1>todos</h1>
    <TodoTextInput newTodo onSubmit={addTodo} />
  </header>
);
