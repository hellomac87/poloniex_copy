import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import axios from "axios";
import { SET_MARKET_LIST_TR, SET_MARKET_LIST_RDS } from "./type";

const setMarketListTR = (payload: {}) => {
  return {
    type: SET_MARKET_LIST_TR,
    payload
  };
};

export const setMarketListRDS = (payload: any) => {
  return {
    type: SET_MARKET_LIST_RDS,
    payload
  };
};

export const getMarketListTR = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  const { data: payload } = await axios.get(
    "https://poloniex.com/public?command=returnTicker"
  );

  dispatch(setMarketListTR(payload));
};
