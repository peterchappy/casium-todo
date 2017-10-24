import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from '../todo_text_input/index.jsx';

const handleSave = (addTodo, text) => {
  if (text.length !== 0) {
    addTodo(text);
  }
};

const Header = ({ addTodo }) => (
  <header className='header'>
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={text => handleSave(addTodo, text)}
      placeholder='What needs to be done?' />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func,
};

Header.defaultProps = {
  addTodo: () => { },
};

export default Header;

