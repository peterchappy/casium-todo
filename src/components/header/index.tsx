import * as React from 'react';
import TodoTextInput from '../../containers/todo_text_input/container';

const handleSave = (addTodo, text) => {
  if (text.length !== 0) {
    addTodo(text);
  }
};

type HeaderProps = {
  addTodo?: () => any;
}

export default ({ addTodo = () => {} }: HeaderProps) => (
  <header className='header'>
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={text => handleSave(addTodo, text)} />
  </header>
);
