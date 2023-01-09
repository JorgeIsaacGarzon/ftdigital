import { configureStore } from "@reduxjs/toolkit";

// Slices
import remindersSlice from "./slices/reminders";

export const store = configureStore({
  reducer: {
    reminders: remindersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
