import { always, append, identity, is, mergeDeepRight, path, evolve, complement, pipe, indexOf, lensPath} from 'ramda';
import * as React from 'react';

import { container } from 'architecture';
import Message, { Activate } from 'architecture/message';

import { TodoFilter/*, TodoAppModel*/ } from './model';
import App from './index';

class AddTodo extends Message {};

class SaveTodo extends Message { };

class ShowFilter extends Message {};

class DeleteTodo extends Message {
  public static expects = { value: is(Number) };
};

class CompleteTodo extends Message {
  public static expects = { value: is(Number) };
};

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

    [AddTodo, (state) => evolve({
      todos: append(path(['todo_input'], state)),
      todo_input: always({
        placeholder: 'What needs to be done?',
        text: '',
        isNew: true,
        completed: false,
      })
    }, state)],

    [CompleteTodo, (state, { index }) => evolve({ todos: pipe(indexOf(index), lensPath(['completed']))}, state)],

    [DeleteTodo, identity],

    [SaveTodo, identity],

    [ShowFilter, (state, { value }) => mergeDeepRight(state, { filter: value })],
  ],

  view: ({ emit, todos, filter }) => (
    <App
      todos={todos}
      addTodo={emit(AddTodo)}
      actions={{
        deleteTodo: emit(DeleteTodo),
        completeTodo: emit(CompleteTodo),
      }}
      onShow={emit(ShowFilter)}
      filter={filter}
    />
  ),
});
