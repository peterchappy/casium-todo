import * as React from 'react'
import Header from '../../components/header/index';
import MainSection from '../../components/main_section/';
import { Todo, TodoFilter } from './model';


type AppProps = {
  todos: Array<Todo>,
  addTodo: () => any,
  actions: Object,
  onShow: () => any,
  filter: TodoFilter,
};

export default ({ todos, actions = {}, filter, onShow, addTodo }: AppProps) => (
  <div>
    <Header addTodo={addTodo} />
    <MainSection { ...{ todos, actions, filter, onShow} } />
  </div>
);