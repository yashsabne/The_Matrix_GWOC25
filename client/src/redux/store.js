import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./state";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
