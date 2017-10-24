import { always } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import { container, PARENT } from 'architecture';
import Message, { Activate } from 'architecture/message';

import MainSection from './index.jsx';

export class ClearCompleted extends Message { }
export class HandleShow extends Message { }

const MainSectionViewWrapper = props => <MainSection {...props} />;

MainSectionViewWrapper.propTypes = {
  emit: PropTypes.func.isRequired,
};

export default container({
  name: 'MainSectionContainer',

  delegate: PARENT,

  update: [
    [Activate, state => state],
    [ClearCompleted, state => state],
    [HandleShow, state => state],
  ],

  view: MainSectionViewWrapper,
});
