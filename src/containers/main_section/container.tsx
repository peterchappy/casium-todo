import { identity } from 'ramda';
import * as React from 'react';

import { container, PARENT } from 'architecture';
import Message, { Activate } from 'architecture/message';

import MainSection from './index';

export class ClearCompleted extends Message { }
export class Show extends Message { }
export class ChangeFilter extends Message {}
export class DeleteTodo extends Message {}
export class CompleteTodo extends Message {}
export class AddTodo extends Message {}

export default container({
  name: 'MainSectionContainer',

  delegate: PARENT,

  update: [
    [Activate, identity],
    [ClearCompleted, identity],
    [Show, identity],
    [ChangeFilter, identity],
  ],

  view: ({ emit, ...props }) =>
    <MainSection
      handleFilterChange={emit(ChangeFilter)}
      onShow={emit(Show)}
      {...props}
    />,
});
