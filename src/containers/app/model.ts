export enum TodoFilter { ShowAll, ShowCompleted, ShowActive };

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoAppModel = {
  todos: Todo[];
  filter: TodoFilter;
};
