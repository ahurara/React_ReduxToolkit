import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Asynchronous thunk action to fetch todos
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
        errorMessage: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.error('Error:', action.error.message);
            state.isError = true;
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});

export const { reducer: todoReducer } = todoSlice;
export default todoReducer;
