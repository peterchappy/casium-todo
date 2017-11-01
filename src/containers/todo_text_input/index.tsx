import * as React from 'react';
import * as classnames from 'classnames';
import { when, propEq } from 'ramda';

export default ({ editing = false, newTodo = false, placeholder, value = '', onBlur, onChange, onSubmit }) => (
  <input
    className={classnames({ edit: editing, 'new-todo': newTodo })}
    type='text'
    { ...{ value, placeholder, onBlur, onChange } }
    autoFocus={true}
    onBlur={!newTodo && handleBlur}
    onKeyDown={when(propEq('which', 13), onSubmit)}
  />
);
