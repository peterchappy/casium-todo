import { identity } from 'ramda';
import * as React from 'react';

import { container, PARENT } from 'architecture';
import Message, { Activate } from 'architecture/message';

import MainSection from './index';

export class ClearCompleted extends Message { }
export class HandleShow extends Message { }

export default container({
  name: 'MainSectionContainer',

  delegate: PARENT,

  update: [
    [Activate, identity],
    [ClearCompleted, identity],
    [HandleShow, identity],
  ],

  view: props => <MainSection {...props} />,
});
