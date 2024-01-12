import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosSchema } from '../types/todosSchema';
import { Todo } from 'entities/todo/model/types/todo';

const initialState: TodosSchema = {
  isLoading: false,
  error: null,
  todos: [
    {
      id: 1,
      title: 'task1',
      text: 'task for completed task for completed task for completed task for completed',
      status: 'new',
      completed: false,
    },
    {
      id: 2,
      title: 'task2',
      text: 'task for completed',
      status: 'new',
      completed: false,
    },
    {
      id: 3,
      title: 'task3',
      text: 'task for completed',
      status: 'new',
      completed: false,
    },
    {
      id: 9,
      title: 'task9',
      text: 'task for completed lorem50',
      status: 'new',
      completed: false,
    },
    {
      id: 4,
      title: 'task4',
      text: 'task for completed',
      status: 'inprogress',
      completed: false,
    },
    {
      id: 8,
      title: 'task4',
      text: 'task for completed task for completed task for completed task for completed task for completed task for completed task for completedtask for completed',
      status: 'inprogress',
      completed: false,
    },
    {
      id: 5,
      title: 'task5',
      text: 'task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed',
      status: 'completed',
      completed: true,
    },
    {
      id: 6,
      title: 'task6',
      text: 'task for completed',
      status: 'completed',
      completed: true,
    },
    {
      id: 7,
      title: 'task7',
      text: 'task for completed',
      status: 'completed',
      completed: true,
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, id: 13, completed: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    changeStatus: (state, action: PayloadAction<Todo>) => {
      const { status, id } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
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
    editTodo: (state, action) => {
      // const todoForUpdate = 
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: todosActions } = todosSlice;
export const { reducer: todosReducer } = todosSlice;
