import { createSelector } from "reselect";
import { AppState } from "../index";

export const byId = createSelector(
  (state: {}) => state,
  (state: {}) => {
    const newState: {} = {};

    const keys = Object.keys(state).map((key: string) => key);
    keys.forEach(key => {});

    console.log(keys);

    return newState;
  }
);

/*
  export const allIds = createSelector(
    state => state,
    state => {
      const arr = [];
      Object.entries(state).forEach(item => {
        arr.push(item[1].id);
      });
      return arr;
    }
  );
  */
