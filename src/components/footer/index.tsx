import * as React from 'react';
import * as classnames from 'classnames';
import { TodoFilter } from '../../containers/app/model';

const FILTER_TITLES = {
  [TodoFilter.ShowAll]: 'All',
  [TodoFilter.ShowActive]: 'Active',
  [TodoFilter.ShowCompleted]: 'Completed',
};

const renderTodoCount = (activeCount) => {
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <span className='todo-count'>
      <strong>{activeCount || 'No'}</strong> {itemWord} left
    </span>
  );
};

const renderFilterLink = (filter, onShow, selectedFilter) => {
  const title = FILTER_TITLES[filter];
  return (
    <a
      className={classnames({ selected: filter === selectedFilter })}
      style={{ cursor: 'pointer' }}
      onClick={() => onShow(filter)}
    >
      {title}
    </a>
  );
};

const renderClearButton = ( completedCount, onClearCompleted ) => (
  (completedCount === 0) ? null : (
    <button
      className='clear-completed'
      onClick={onClearCompleted}
    >Clear completed</button>
  )
);

type FooterProps = {
  completedCount: number;
  activeCount: number;
  filter: TodoFilter;
  onClearCompleted: () => any;
  onShow: () => any;
};

export default ({ completedCount, onClearCompleted, activeCount, filter, onShow }: FooterProps) => (
  <footer className='footer'>
    {renderTodoCount(activeCount)}
    <ul className='filters'>
      {[TodoFilter.ShowAll, TodoFilter.ShowActive, TodoFilter.ShowCompleted].map(type =>
        (<li key={type}>{renderFilterLink(type, onShow, filter)}</li>)
      )}
    </ul>
    {renderClearButton(completedCount, onClearCompleted)}
  </footer>
);
