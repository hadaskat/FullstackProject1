import { configureStore } from "@reduxjs/toolkit";
import trampolinaReducer from '../features/trampolina/TrampolinaSlice';
import userReducer from '../features/user/userSlice';
import LendReducer from '../features/lend/LendSlice';
import user from '../features/user/userSlice';

export const store = configureStore({
    reducer: {trampolinaReducer,userReducer,LendReducer},
})
export type RootState=ReturnType<typeof store.getState>
export type AddDispatch=typeof store.dispatch