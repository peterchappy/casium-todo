import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
};

const renderTodoCount = (activeCount) => {
  const itemWord = activeCount === 1 ? 'item' : 'items';

  return (
    <span className='todo-count'>
      <strong>{activeCount || 'No'}</strong> {itemWord} left
    </span>
  );
};

const renderFilterLink = (filter, onShow, { selectedFilter }) => {
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

const renderClearButton = ( completedCount, onClearCompleted ) => {
  if (completedCount > 0) {
    return (
      <button
        className='clear-completed'
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    );
  }
};

const Footer = ({ completedCount, onClearCompleted, activeCount, filter, onShow }) => (
  <footer className='footer'>
    {renderTodoCount(activeCount)}
    <ul className='filters'>
      {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(type =>
        (<li key={type}>{renderFilterLink(type, onShow, filter)}</li>)
      )}
    </ul>
    {renderClearButton(completedCount, onClearCompleted)}
  </footer>
);

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default Footer;
