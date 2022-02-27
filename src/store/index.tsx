import { Provider } from "react-redux";
import { cloneElement } from 'react'
import { AnyAction, combineReducers } from "redux";
import { createStore, applyMiddleware, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk"
import productsReducer from "./products/reducer"

type DispatchExts = ThunkDispatch<IRootState, undefined, AnyAction> | DispatchType;

export const rootReducer = combineReducers<IRootState, ReducerAction>({
  productsState: productsReducer
});

export const store: Store<IRootState> & {
  dispatch: DispatchExts
} = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


const StoreProvider = ({ children }: any) =>
  cloneElement(<Provider store={store} />, { children })

export { StoreProvider }
