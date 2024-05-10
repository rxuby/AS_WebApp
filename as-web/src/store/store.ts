import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import questionSlice from "./slice/questionSlice";

const store = configureStore({
  reducer: {
    quiz: questionSlice,
  },
    
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
