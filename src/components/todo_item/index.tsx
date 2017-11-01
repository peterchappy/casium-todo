import * as React from 'react';
import * as classnames from 'classnames';
import TodoTextInput from '../../containers/todo_text_input/container';

const createElement = (todo, completeTodo, deleteTodo, addTodo, editingTodo, editing ) => {

  if (editing) {
    return(
      <TodoTextInput
        text={todo.text}
        editing
        onSave={text => addTodo({ text })} />
    );
  }

  return(
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={todo.completed}
        onChange={() => completeTodo()} />
      <label onDoubleClick={editingTodo}>
        {todo.text}
      </label>
      <button
        className='destroy'
        onClick={() => deleteTodo()} />
    </div>
  );
}


type TodoItemProps = {
  todo?: Object;
  deleteTodo?: () => any;
  completeTodo?: () => any;
  editingTodo?: () => any;
  addTodo?: () => any;
}

export default ({ todo, deleteTodo, completeTodo, addTodo = () => { }, editingTodo = () => { }}: TodoItemProps) => (
    <li className={classnames({
      completed: true, //todo.completed ||
      editing: false,
    })}
    >
    {createElement(todo, completeTodo, deleteTodo, editingTodo, addTodo, false )}
    </li>
);
