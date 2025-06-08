import { store } from "@/lib/redux/store";
import { Action, ThunkAction } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export enum EFetchingStatus {
  IDLE = "IDLE",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  FULFILLED = "FULFILLED",
}
