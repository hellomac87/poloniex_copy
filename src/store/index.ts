import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import saga from "redux-saga";
import thunk from "redux-thunk";

// reducers
import marketList from "./marketList/reducer";
import { IMarketListState } from "./marketList/type";

export interface AppState {
  marketList: IMarketListState;
}

const rootReducer = combineReducers<AppState>({
  marketList
});

// configureStore
const configureStore = () => {
  const middlewares: any[] = [thunk];

  // logger, works only in development environments
  if (process.env.NODE_ENV !== "production") {
    middlewares.push();
  }

  // redux devtool
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );

  const store = createStore(rootReducer, enhancer);

  return store;
};

export default configureStore;
