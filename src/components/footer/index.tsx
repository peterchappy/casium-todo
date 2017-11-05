import * as React from 'react';
import * as classnames from 'classnames';
import { TodoFilter } from '../../containers/app/model';

const FILTER_TITLES = {
  [TodoFilter.ShowAll]: 'All',
  [TodoFilter.ShowActive]: 'Active',
  [TodoFilter.ShowCompleted]: 'Completed',
};

const renderTodoCount = (count) => (
  <span className='todo-count'>
    <strong>{count || 'No'}</strong> {`item${count === 1 ? '' : 's'}`} left
  </span>
);

const renderFilterLink = (filter, onShow, selectedFilter) =>(
  <a
    className={classnames({ selected: filter === selectedFilter })}
    style={{ cursor: 'pointer' }}
    onClick={() => onShow({ value: filter })}
  >
    {FILTER_TITLES[filter]}
  </a>
);

const renderClearButton = (completedCount, clearCompleted ) => (
  completedCount === 0 ? null : (
    <button
      className='clear-completed'
      onClick={clearCompleted}
    >Clear completed</button>
  )
);

type FooterProps = {
  completedCount: number;
  activeCount: number;
  filter: TodoFilter;
  clearCompleted: () => any;
  onShow: () => any;
};

export default ({ completedCount, clearCompleted, activeCount, filter, onShow }: FooterProps) => (
  <footer className='footer'>
    {renderTodoCount(activeCount)}
    <ul className='filters'>
      {[TodoFilter.ShowAll, TodoFilter.ShowActive, TodoFilter.ShowCompleted].map(type =>
        (<li key={type}>{renderFilterLink(type, onShow, filter)}</li>)
      )}
    </ul>
    {renderClearButton(completedCount, clearCompleted)}
  </footer>
);
