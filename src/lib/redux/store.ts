import { configureStore } from "@reduxjs/toolkit";

import * as reducers from "@/store";

export const store = configureStore({
  reducer: {
    ...reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
