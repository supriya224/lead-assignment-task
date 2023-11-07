/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { countInitialState } from "../intitialState/count.intitialState";

export const counterSlice = createSlice({
  name: "postalCode",
  initialState: countInitialState,
  reducers: {
    saveInputValue: (state, action: PayloadAction<number>) => {
      state.postalCode = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { saveInputValue } = counterSlice.actions;

export default counterSlice.reducer;
