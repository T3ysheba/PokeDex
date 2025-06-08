import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "@/lib/axios";

export const getPokemonList = createAsyncThunk(
  "pokemon/list",
  async ({ per_page = 24, page = 1 }: { per_page?: number; page?: number }) => {
    const offset = per_page * page;

    try {
      const response = await api.get(
        `/pokemon?limit=${per_page}&offset=${offset}`
      );

      return response;
    } catch (err) {
      throw Error(`Failed to get privacy policy information data: ${err}`);
    }
  }
);
