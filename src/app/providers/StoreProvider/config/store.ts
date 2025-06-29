import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import type { StateSchema } from "./StateSchema";

const isDev = typeof __IS_DEV__ !== 'undefined' ? __IS_DEV__ : false;

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: isDev,
    preloadedState: initialState,
  });
}
