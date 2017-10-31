import * as React from 'react'
import Header from '../../components/header/index';
import MainSection from '../main_section/container';

export default ({ todos, actions = {}, addTodo, saveTodo }) => (
  <div>
    <Header addTodo={addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
);