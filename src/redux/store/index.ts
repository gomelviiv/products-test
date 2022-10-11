import { configureStore } from "@reduxjs/toolkit";
import setMiddleware from "../middleware";
import reducers from "../reducers";

const store = configureStore({
  reducer: reducers,
  middleware: setMiddleware(),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
