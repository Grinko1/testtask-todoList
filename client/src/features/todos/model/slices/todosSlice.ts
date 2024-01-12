import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosSchema } from '../types/todosSchema';
import { Todo } from 'entities/todo/model/types/todo';
import { createTodo } from '../services/createTodo';
import { loadTodos } from '../services/loadTodos';
import { deleteTodo } from '../services/deleteTodo';
import { takeToWork } from '../services/takeToWork';
import { toggleCompleted } from '../services/toggleCompleted';

let t = [
  {
    _id: '1',
    title: 'task1',
    text: 'task for completed task for completed task for completed task for completed',
    status: 'new',
    completed: false,
  },
  {
    _id: '2',
    title: 'task2',
    text: 'task for completed',
    status: 'new',
    completed: false,
  },
  {
    _id: '3',
    title: 'task3',
    text: 'task for completed',
    status: 'new',
    completed: false,
  },
  {
    _id: ' 9',
    title: 'task9',
    text: 'task for completed lorem50',
    status: 'new',
    completed: false,
  },
  {
    _id: '4',
    title: 'task4',
    text: 'task for completed',
    status: 'inprogress',
    completed: false,
  },
  {
    _id: ' 8',
    title: 'task4',
    text: 'task for completed task for completed task for completed task for completed task for completed task for completed task for completedtask for completed',
    status: 'inprogress',
    completed: false,
  },
  {
    _id: ' 5',
    title: 'task5',
    text: 'task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed',
    status: 'completed',
    completed: true,
  },
  {
    _id: '6',
    title: 'task6',
    text: 'task for completed',
    status: 'completed',
    completed: true,
  },
  {
    _id: '7',
    title: 'task7',
    text: 'task for completed',
    status: 'completed',
    completed: true,
  },
];
const initialState: TodosSchema = {
  isLoading: false,
  error: null,
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, id: 13, completed: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload.id);
    },
    changeStatus: (state, action: PayloadAction<Todo>) => {
      const { status, _id } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo._id === _id);
      if (todoToUpdate) {
        if (status === 'new') {
          todoToUpdate.status = 'inprogress';
          todoToUpdate.completed = false;
        } else if (status === 'inprogress') {
          todoToUpdate.status = 'completed';
          todoToUpdate.completed = true;
        } else {
          todoToUpdate.completed = false;
          todoToUpdate.status = 'inprogress';
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Не удалось создать новую задачу';
      });
    builder
      .addCase(loadTodos.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(loadTodos.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Не удалось загрузить задачи';
      });
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter((todo) => todo._id !== action.payload._id);
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Не удалось загрузить задачи';
      });
    builder
      .addCase(takeToWork.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(takeToWork.fulfilled, (state, action) => {
        state.isLoading = false;
        const todoToUpdate = state.todos.find((todo) => todo._id === action.payload._id);
        if (todoToUpdate) {
          todoToUpdate.status = 'inprogress';
          todoToUpdate.completed = false;
        }
      })
      .addCase(takeToWork.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Не удалось взять в работу';
      });
    builder
      .addCase(toggleCompleted.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        const todoToUpdate = state.todos.find((todo) => todo._id === action.payload._id);
        if (todoToUpdate) {
          if (todoToUpdate.status !== 'completed') {
            todoToUpdate.status = 'completed';
            todoToUpdate.completed = true;
          } else {
            todoToUpdate.status = 'new';
            todoToUpdate.completed = false;
          }
        }
      })
      .addCase(toggleCompleted.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Не удалось взять в работу';
      });
  },
});

export const { actions: todosActions } = todosSlice;
export const { reducer: todosReducer } = todosSlice;
