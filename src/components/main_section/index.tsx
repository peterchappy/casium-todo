import * as React from 'react';
import { always, propEq } from 'ramda';

import TodoItem from '../../components/todo_item/';
import Footer from '../../components/footer/';
import { TodoFilter, Todo } from '../../containers/app/model';

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

const renderFooter = (completedCount, todos, filter, onShow, clearCompleted) => {
  const activeCount = todos.length - completedCount;

  return !todos.length ? null : (
    <Footer
      completedCount={completedCount}
      activeCount={activeCount}
      filter={filter}
      clearCompleted={clearCompleted}
      onShow={onShow} />
  );
}

type MainSectionProps = {
  todos: Array<Todo>;
  actions: Object;
  filter: TodoFilter;
  onShow: () => any;
  clearCompleted: () => any;
};

export default ({ todos, actions, filter, onShow, clearCompleted }: MainSectionProps) => {
  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
  const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);
  return (
    <section className='main'>
      {renderToggleAll(completedCount, todos, actions)}
      <ul className='todo-list'>
        {filteredTodos.map((todo, i) =>
          <TodoItem delegate={['todos', i]} key={todo.id} todo={todo} {...actions} />
        )}
      </ul>
      {renderFooter(completedCount, todos, filter, onShow, clearCompleted)}
    </section>
  );
}
