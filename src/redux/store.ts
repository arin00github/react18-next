import { Action, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { configureStore, ThunkAction, combineReducers } from "@reduxjs/toolkit";
import { SubjectProps } from "./subject/subject.slice";
import subjectReducer from "./subject/subject.slice";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export interface State {
  subject: SubjectProps;
}

const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  } else {
    return combineReducers({
      subject: subjectReducer,
    })(state, action);
  }
};

const makeStore = (context: Context) => {
  console.log("makeStore context", context);
  const isServer = typeof window === "undefined";

  if (isServer) {
    return configureStore({
      reducer: rootReducer,
    });
  } else {
    return configureStore({
      reducer: rootReducer,
      devTools: process.env.NODE_ENV !== "production",
    });
  }
};

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
