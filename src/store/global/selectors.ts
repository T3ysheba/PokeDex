import type { RootState } from "@/types";

const pokemonListState = (state: RootState) => state.global.pokemonList;

export const GlobalSelectors = { pokemonListState };
