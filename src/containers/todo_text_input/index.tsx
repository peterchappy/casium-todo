import * as React from 'react';
import * as classnames from 'classnames';

export default ({
  editing = false,
  newTodo = false,
  placeholder,
  text = '',
  handleBlur,
  handleChange,
  handleSubmit
}) => (
  <input
    className={classnames({ edit: editing, 'new-todo': newTodo })}
    type='text'
    placeholder={placeholder}
    autoFocus={true}
    value={text}
    onBlur={!newTodo && handleBlur}
    onChange={e => handleChange({value: e.target.value})}
    onKeyDown={e => e.which === 13 && handleSubmit()}
  />
);
