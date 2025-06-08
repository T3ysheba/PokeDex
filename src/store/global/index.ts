import { createSlice } from "@reduxjs/toolkit";

import type { TGlobal } from "./types";
import { getPokemonList } from "./actions";

const initialState: TGlobal = {
  pokemonList: {
    data: null,
    error: null,
    isLoading: false,
  },
};

const GlobalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPokemonList.pending, (state) => {
        state.pokemonList.isLoading = true;
        state.pokemonList.error = null;
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.pokemonList.isLoading = false;
        state.pokemonList.data = action.payload.data;
      })
      .addCase(getPokemonList.rejected, (state) => {
        state.pokemonList.isLoading = false;
        state.pokemonList.error = "Failed to fetch information data";
      });
  },
});

export const {} = GlobalSlice.actions;

const globalSliceReducer = GlobalSlice.reducer;

export default globalSliceReducer;
