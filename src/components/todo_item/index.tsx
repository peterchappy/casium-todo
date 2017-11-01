import * as React from 'react';
import * as classnames from 'classnames';
import TodoTextInput from '../../containers/todo_text_input/container';

const handleDoubleClick = () => {
  // this.setState({ editing: true });
}

const handleSave = (id, text) => {
  if (text.length === 0) {
    this.props.deleteTodo(id);
  } else {
    this.props.editTodo(id, text);
  }
  // this.setState({ editing: false });
}


const createElement = (todo, completeTodo, deleteTodo, editing ) => {

  if (editing) {
    return(
      <TodoTextInput
        text={todo.text}
        editing
        onSave={text => handleSave(todo.id, text)} />
    );
  }

  return(
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)} />
      <label onDoubleClick={handleDoubleClick}>
        {todo.text}
      </label>
      <button
        className='destroy'
        onClick={() => deleteTodo(todo.id)} />
    </div>
  );
}


type TodoItemProps = {
  todo?: Object;
  deleteTodo?: () => any;
  completeTodo?: () => any;
  addTodo?: () => any;
}

  export default ({ todo, deleteTodo, completeTodo, addTodo = () => { } }: TodoItemProps) => (
    <li className={classnames({
      completed: true, //todo.completed ||
      editing: false,
    })}
    >
    {createElement(todo, completeTodo, deleteTodo, true )}
    </li>
);
