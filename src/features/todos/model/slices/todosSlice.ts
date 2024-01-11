import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosSchema } from "../types/todosSchema";

const initialState: TodosSchema = {
  isLoading: false,
  error: null,
  newTodo: [
    {
      id: 1,
      title: "task1",
      text: "task for completed task for completed task for completed task for completed",
      status: "new",
      completed: false,
    },
    {
      id: 2,
      title: "task2",
      text: "task for completed",
      status: "new",
      completed: false,
    },
    {
      id: 3,
      title: "task3",
      text: "task for completed",
      status: "new",
      completed: false,
    },
    {
      id: 9,
      title: "task9",
      text: "task for completed lorem50",
      status: "new",
      completed: false,
    },
  ],
  progressTodo: [
    {
      id: 4,
      title: "task4",
      text: "task for completed",
      status: "inprogress",
      completed: false,
    },
    {
      id: 8,
      title: "task4",
      text: "task for completed task for completed task for completed task for completed task for completed task for completed task for completedtask for completed",
      status: "inprogress",
      completed: false,
    },
  ],
  completedTodo: [
    {
      id: 5,
      title: "task5",
      text: "task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed",
      status: "completed",
      completed: true,
    },
    {
      id: 6,
      title: "task6",
      text: "task for completed",
      status: "completed",
      completed: true,
    },
    {
      id: 7,
      title: "task7",
      text: "task for completed",
      status: "completed",
      completed: true,
    },
  ],
  todos: [
    {
      id: 1,
      title: "task1",
      text: "task for completed task for completed task for completed task for completed",
      status: "new",
      completed: false,
    },
    {
      id: 2,
      title: "task2",
      text: "task for completed",
      status: "new",
      completed: false,
    },
    {
      id: 3,
      title: "task3",
      text: "task for completed",
      status: "new",
      completed: false,
    },
    {
      id: 9,
      title: "task9",
      text: "task for completed lorem50",
      status: "new",
      completed: false,
    },
    {
      id: 4,
      title: "task4",
      text: "task for completed",
      status: "inprogress",
      completed: false,
    },
    {
      id: 8,
      title: "task4",
      text: "task for completed task for completed task for completed task for completed task for completed task for completed task for completedtask for completed",
      status: "inprogress",
      completed: false,
    },
    {
      id: 5,
      title: "task5",
      text: "task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed task for completed",
      status: "completed",
      completed: true,
    },
    {
      id: 6,
      title: "task6",
      text: "task for completed",
      status: "completed",
      completed: true,
    },
    {
      id: 7,
      title: "task7",
      text: "task for completed",
      status: "completed",
      completed: true,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.status === "new") {
        state.newTodo.push({ ...action.payload, id: 13, completed: false });
      } else if (action.payload.status === "inprogress") {
        state.progressTodo.push({
          ...action.payload,
          id: 14,
          completed: false,
        });
      } else {
        state.completedTodo.push({
          ...action.payload,
          id: 15,
          completed: true,
        });
      }
    },
    deleteTodo: (state, action) => {
      const status = action.payload.status;
      if (status === "new") {
        state.newTodo = state.newTodo.filter(
          (item) => item.id !== action.payload.id
        );
      } else if (status === "inprogress") {
        state.progressTodo = state.progressTodo.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.completedTodo = state.completedTodo.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    editTodo: (state, action) => {},
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
