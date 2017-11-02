import * as React from 'react';
import * as classnames from 'classnames';
import { when, propEq } from 'ramda';

export default ({ editing = false, isNew = false, placeholder, value = '', onBlur, onChange, onSubmit }) => (
  <input
    type='text'
    className={classnames({ edit: editing, 'new-todo': isNew })}
    { ...{ value, placeholder, onBlur, onChange } }
    autoFocus={true}
    onKeyDown={when(propEq('which', 13), onSubmit)}
  />
);
