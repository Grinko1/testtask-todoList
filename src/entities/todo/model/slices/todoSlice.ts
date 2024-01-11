import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoSchema } from '../types/todoSchema';

const initialState: TodoSchema = {
    
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
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

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;