import { always, append, identity } from 'ramda';
import * as React from 'react';

import { container, mergeDeep } from 'architecture';
import Message, { Activate } from 'architecture/message';

import { TodoFilter/*, TodoAppModel*/ } from './model';
import App from './index';

class AddTodo extends Message {};
class SaveTodo extends Message {};
class DeleteTodo extends Message {};
class CompleteTodo extends Message {};

export default container({
  name: 'AppContainer',

  init: always({
    todos: [
      {
        text: 'Use Architecture',
        completed: false,
        id: 0,
      },
    ],
    filter: TodoFilter.ShowAll,
  }),

  update: [
    [Activate, identity],

    [AddTodo, (state, data) => mergeDeep(state, append(data, state.todos))],

    [SaveTodo, identity],

    [DeleteTodo, identity],

    [CompleteTodo, identity],
  ],

  view: ({ emit, todos }) => (
    <App
      todos={todos}
      addTodo={emit(AddTodo)}
      actions={{
        deleteTodo: emit(DeleteTodo),
        completeTodo: emit(CompleteTodo),
      }}
    />
  ),
});
