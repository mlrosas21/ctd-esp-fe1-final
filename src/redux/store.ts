import { configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../redux/charactersSlice'
import episodesReducer from '../redux/episodesSlice'

export const store = configureStore({
   reducer:{
      characters: charactersReducer,
      episodes: episodesReducer
   }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;