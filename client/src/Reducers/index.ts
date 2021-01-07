import { combineReducers } from "redux";
import userReducer from "./userRedducer";
export const rootReducer = combineReducers({ userReducer });
export type RootState = ReturnType<typeof rootReducer>;
