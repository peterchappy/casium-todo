export enum TodoFilter { ShowAll, ShowCompleted, ShowActive };

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoInput = {
  text: string;
};

export type TodoAppModel = {
  todos: Todo[];
  filter: TodoFilter;
  todo_input: TodoInput;
};
