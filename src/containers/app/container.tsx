import { always, append, identity, pipe, merge, path, evolve} from 'ramda';
import * as React from 'react';

import { container } from 'architecture';
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
        text: 'Use Architecture', // TODO make this value
        completed: false,
        id: 0,
      },
    ],
    filter: TodoFilter.ShowAll,
  }),

  update: [
    [Activate, identity],

    [AddTodo, (state, { value }) => evolve({ todos: append(path(['todo_input'], state)) }, state)],

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
