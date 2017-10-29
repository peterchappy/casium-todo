import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const handleSubmit = (e) => {
  // TODO THIS NEEDS TO BE SWAPPED OUT WITH MESSAGE
  // const text = e.target.value.trim();
  // if (e.which === 13) {
  //   this.props.onSave(text);
  //   if (this.props.newTodo) {
  //     this.setState({ text: '' });
  //   }
  // }
}

const handleChange = (e) => {
  // TODO THIS NEEDS TO BE SWAPPED OUT WITH MESSAGE
  // this.setState({ text: e.target.value });
}

const handleBlur = (e) => {
    // TODO THIS NEEDS TO BE SWAPPED OUT WITH MESSAGE
  // if (!this.props.newTodo) {
  //   this.props.onSave(e.target.value);
  // }
}

const TodoTextInput = ({ editing, newTodo, placeholder, text }) => (
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
    onBlur={handleBlur}
    onChange={handleChange}
    onKeyDown={handleSubmit} />
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
