import * as React from 'react';
import * as classnames from 'classnames';
import TodoTextInput from '../../containers/todo_text_input/container';
import { Todo } from '../../containers/app/model';

const createElement = (todo, completeTodo, deleteTodo, addTodo, editTodo, delegate) => {
  if (todo.editing) {
    console.log(editTodo);
    return(
      <TodoTextInput
        text={todo.text}
        editing
        delegate={['todos', 0]}
        onSave={text => addTodo({ text })} />
    );
  }

  return(
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={todo.completed}
        onChange={() => completeTodo({ value: todo.id })} />
      <label onDoubleClick={() => editTodo({ value: todo.id })}>
        {todo.text}
      </label>
      <button
        className='destroy'
        onClick={() => deleteTodo({ value: todo.id})} />
    </div>
  );
}


type TodoItemProps = {
  todo?: Todo;
  deleteTodo?: () => any;
  completeTodo?: () => any;
  editTodo?: () => any;
  addTodo?: () => any;
  delegate: Array<any>;
}

export default ({ todo, deleteTodo, completeTodo, addTodo = () => { }, editTodo = () => { }, delegate}: TodoItemProps) => (
    <li className={classnames({ completed: todo.completed, editing: false })}>
    {createElement(todo, completeTodo, deleteTodo, addTodo, editTodo, delegate )}
    </li>
);
