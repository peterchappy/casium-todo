import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../../components/todo_item/index.jsx';
import Footer from '../../components/footer/index.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
};

const renderToggleAll = (completedCount, todos, actions ) => {
  if (todos.length > 0) {
    return (
      <span>
        <input
          className='toggle-all'
          type='checkbox'
          checked={completedCount === todos.length} />
        <label onClick={actions.completeAll} />
      </span>
    );
  }
};

const renderFooter = (completedCount, todos, filter) => {
  const activeCount = todos.length - completedCount;

  if (todos.length) {
    return (
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filter={filter}
        onClearCompleted={() => { }}
        onShow={() => { }} />
    );
  }
}

const MainSection = ({ todos, actions, filter}) => {
  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
  const completedCount = todos.reduce((count, todo) =>
    todo.completed ? count + 1 : count,
    0
  );

  return (
    <section className='main'>
      {/* {this.renderToggleAll(completedCount)}
      <ul className='todo-list'>
        {filteredTodos.map(todo =>
          <TodoItem key={todo.id} todo={todo} {...actions} />
        )}
      </ul> */}
      {renderFooter(completedCount, todos, filter)}
    </section>
  );
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
}

export default MainSection;
