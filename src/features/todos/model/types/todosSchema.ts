import { Todo } from "entities/todo/model/types/todo";

export interface TodosSchema {
  isLoading: boolean;
  error: string | null;
  newTodo: Todo[];
  progressTodo: Todo[];
  completedTodo: Todo[];
  todos: Todo[];
}
