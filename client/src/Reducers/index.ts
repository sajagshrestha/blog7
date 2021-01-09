import { combineReducers } from "redux";
import { createDispatchHook, createSelectorHook } from "react-redux";
import userReducer, { UserAction } from "./userReducer";
//create root reducer
export const rootReducer = combineReducers({ user: userReducer });
export type RootState = ReturnType<typeof rootReducer>;

//custom selector and disptach
export const useReduxSelector = createSelectorHook<RootState>();
export const useReduxDispatch = createDispatchHook<void, UserAction>();
