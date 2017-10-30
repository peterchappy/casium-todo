import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TodoTextInput = ({ editing, newTodo, placeholder, text,
  handleBlur, handleChange, handleSubmit }) => (
  <input
    className={
      classnames({
        edit: editing,
        'new-todo': newTodo,
      })}
    type='text'
    placeholder={placeholder}
    autoFocus='true'
    value={text}
    onBlur={!newTodo && handleBlur}
    onChange={handleChange}
    onKeyDown={e => e.which === 13 && handleSubmit()} />
);

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
};

TodoTextInput.defaultProps = {
  text: '',
  editing: false,
  newTodo: false,
};

export default TodoTextInput;
