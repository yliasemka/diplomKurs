import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../services/types";

interface IUserStore {
  isAuthorized: boolean;
  email: string | undefined;
  name: string | undefined;
  favorites: IBook[];
  cart: IBook[];
}

const initialState: IUserStore = {
  isAuthorized: false, //change!
  email: undefined,
  name: undefined,
  favorites: [],
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthorized = true;
      state.email = action.payload;
    },
    unsetUser: (state) => {
      state.isAuthorized = false;
      state.email = undefined;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    setFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },

    deleteFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = state.favorites.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});
export const { setUser, unsetUser, setUserName, setFavorite, deleteFavorite } =
  userSlice.actions;
export default userSlice.reducer;
