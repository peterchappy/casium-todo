import * as React from 'react';
import { always, propEq } from 'ramda';

import TodoItem from '../../components/todo_item';
import Footer from '../../components/footer';
import { TodoFilter } from '../app/model';

const TODO_FILTERS = {
  [TodoFilter.ShowAll]: always(true),
  [TodoFilter.ShowActive]: propEq('completed', false),
  [TodoFilter.ShowCompleted]: propEq('completed', true),
};

const renderToggleAll = (completedCount, todos, actions) => (
  (todos.length === 0) ? null : (
    <span>
      <input
        className='toggle-all'
        type='checkbox'
        checked={completedCount === todos.length} />
      <label onClick={actions.completeAll} />
    </span>
  )
);

const renderFooter = (completedCount, todos, filter, onShow) => {
  const activeCount = todos.length - completedCount;

  return !todos.length ? null : (
    <Footer
      completedCount={completedCount}
      activeCount={activeCount}
      filter={filter}
      onClearCompleted={() => { }}
      onShow={onShow} />
  );
}

export default ({ todos, actions, filter, onShow }) => {
  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
  const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);

  return (
    <section className='main'>
      {renderToggleAll(completedCount, todos, actions)}
      <ul className='todo-list'>
        {filteredTodos.map(todo =>
          <TodoItem key={todo.id} todo={todo} {...actions} />
        )}
      </ul>
      {renderFooter(completedCount, todos, filter, onShow)}
    </section>
  );
}
