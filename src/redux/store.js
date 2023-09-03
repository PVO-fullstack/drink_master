import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./auth/authSlice";
import { cockteilsSlise } from "./cockteil/cockteilsSlice";
import { preparationSlice } from "./preparation/slice";
import { recipeSlice } from "./recipe/recipeSlice";
import { sliceDrinks } from "./drinks/sliceDrinks";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
    cockteil: cockteilsSlise.reducer,
    preparation: preparationSlice.reducer,
    recipe: recipeSlice.reducer,
    drinks: sliceDrinks.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
