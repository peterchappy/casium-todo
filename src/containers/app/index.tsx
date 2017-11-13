import * as React from 'react'
import Header from '../../components/header/index';
import MainSection from '../../components/main_section/';
import { Todo, TodoFilter } from './model';


type AppProps = {
  todos: Array<Todo>,
  addTodo: () => any,
  onShow: () => any,
  clearCompleted: () => any,
  filter: TodoFilter,
  deleteTodo: () => any,
  completeTodo: () => any,
  editTodo: () => any,
};

export default ({ addTodo, ...props }: AppProps) => (
  <div>
    <Header addTodo={addTodo} />
    <MainSection { ...props } />
  </div>
);