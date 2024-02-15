import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCurrency } from "../../api/mono"

const initialState = {
    isLoading: false,
    isError: false,
    data: [

    ]
}

export const setCurrency = createAsyncThunk(
    'mono/get',
    async () => {
        const data = getCurrency();
        return data;
    }
)

const monoSlice = createSlice(
    {
        name: 'Mono',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(setCurrency.pending, (state, action) => {
                    state.isLoading = true;
                })
                .addCase(setCurrency.fulfilled, (state, action) => {
                    state.data = [...action.payload];
                    state.isLoading = false;
                })
                .addCase(setCurrency.rejected, (state, action) => {
                    state.isError = true;
                })
        }
    }
);

export default monoSlice.reducer;