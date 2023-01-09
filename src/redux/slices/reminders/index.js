import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    resetReminders: () => initialState,
    createReminder: (state, { payload }) => {
      state.push(payload);
    },
    updateReminder: (state, { payload }) =>
      state.map((item) => (item.id === payload.id ? payload : item)),
    deleteReminder: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
  },
});

export const {
  resetReminders,
  createReminder,
  updateReminder,
  deleteReminder,
} = remindersSlice.actions;

export default remindersSlice.reducer;
