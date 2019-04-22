import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// reducers
import projectInfo from "./project/reducer";
import { IProjectState } from "./project/type";

export interface AppState {
  projectInfo: IProjectState;
}

const rootReducer = combineReducers({
  projectInfo
});

// configureStore
const configureStore = () => {
  const middlewares: any[] = [];

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
