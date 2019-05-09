// constants

export const SET_MARKET_LIST_TR = "marketList/SET_MARKET_LIST_TR";
export type SET_MARKET_LIST_TR = typeof SET_MARKET_LIST_TR;

export const SET_MARKET_LIST_RDS = "marketList/SET_MARKET_LIST_RDS";
export type SET_MARKET_LIST_RDS = typeof SET_MARKET_LIST_RDS;

// state interface
export interface IMarketListState {
  market_all: {};
  market_byId: {};
  market_allIds: [];
  visibilityIds: [];
  sortType: string;
  orderTypeIsAsc: boolean;
}

// action type
export type SetMarketListTR = {
  type: string;
  payload: {};
};

export type SetMarketListRDS = {
  type: string;
  payload: {};
};

// action types

export type IActionTypes = SetMarketListTR | SetMarketListRDS;
