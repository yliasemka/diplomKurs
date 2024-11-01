import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import bookSlice from "./slices/bookSlice";
import cartSlice from "./slices/cartSlice";
import reducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    books: bookSlice,
    cart: cartSlice,
  },
});

console.log(reducer)

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
