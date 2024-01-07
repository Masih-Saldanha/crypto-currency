import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      
    },
});

type GetStatTypeOfSignUp = typeof store.getState;

export type StoreState = ReturnType<GetStatTypeOfSignUp>;