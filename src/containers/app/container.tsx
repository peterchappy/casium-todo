import {
  always, append, identity, is, mergeDeepRight,
  path, evolve, complement, cond, not,
  propEq, filter, map, T
} from 'ramda';
import * as React from 'react';

import { container } from 'architecture';
import Message, { Activate } from 'architecture/message';

import { TodoFilter/*, TodoAppModel*/ } from './model';
import App from './index';

class AddTodo extends Message {};

class ShowFilter extends Message { };

class ClearCompleted extends Message {};

class DeleteTodo extends Message {
  public static expects = { value: is(Number) };
};

class CompleteTodo extends Message {
  public static expects = { value: is(Number) };
};

const createTodoId = () => new Date().valueOf();

export default container({
  name: 'AppContainer',

  init: always({
    todos: [
      {
        text: 'Use Architecture',
        completed: false,
        id: createTodoId(),
      },
    ],
    filter: TodoFilter.ShowAll,
    todo_input: {
      placeholder: 'What needs to be done?',
      text: '',
      isNew: true,
      completed: false,
      id: createTodoId(),
    },
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
        id: createTodoId(),
      })
    }, state)],

    [CompleteTodo, (state, { value }) => evolve({
      todos: map(cond([
              [propEq('id', value), evolve({ completed: not })],
              [T, identity]
            ]))
    }, state)],

    [DeleteTodo, (state, { value }) => evolve({ todos: filter(complement(propEq('id', value))) }, state)],

    [ClearCompleted, evolve({ todos: filter(propEq('completed', false))})],

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
      clearCompleted={emit(ClearCompleted)}
      onShow={emit(ShowFilter)}
      filter={filter}
    />
  ),
});
