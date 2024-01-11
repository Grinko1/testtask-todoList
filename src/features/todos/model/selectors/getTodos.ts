import { StateSchema } from "app/providers/storeProvider/config/StateSchema";

export const getIsLoading = (state: StateSchema) => state.todos.isLoading;
export const getError = (state: StateSchema) => state.todos.error;
export const getTodos = (state: StateSchema) => state.todos.todos;
export const getNewTodo = (state: StateSchema) => state.todos.newTodo;
export const getProgressTodo = (state: StateSchema) => state.todos.progressTodo;
export const getCompletedTodo = (state: StateSchema) =>
  state.todos.completedTodo;
