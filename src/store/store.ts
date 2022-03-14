import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type:
//    { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch;
/*
The infer keyword compliments conditional types and cannot
be used outside an extends clause. Infer allows us to define
a variable within our constraint to be referenced or returned
*/
