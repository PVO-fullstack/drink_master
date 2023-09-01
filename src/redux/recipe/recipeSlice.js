import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipIdThunk } from "./recipeOperations";

const initialState = {
  recipeId: { drink: null, glass: null, ingredients: [], instructions: []},
  error: null,
};

export const recipeSlice = createSlice({
    name: "recipeById",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchRecipIdThunk.fulfilled, (state, {payload}) => {
                state.recipeId = payload;
                state.error = null;
            })
}
    
)
console.log(recipeSlice);
export default recipeSlice.reducer;



