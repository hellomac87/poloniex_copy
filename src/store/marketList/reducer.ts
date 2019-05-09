import { IMarketListState, SET_MARKET_LIST_TR, IActionTypes } from "./type";
import { byId } from "./selector";

const initialState: IMarketListState = {
  market_all: {},
  market_byId: {},
  market_allIds: [],
  visibilityIds: [],
  sortType: "baseVolume",
  orderTypeIsAsc: true
};

const marketList = (state = initialState, action: IActionTypes) => {
  switch (action.type) {
    case SET_MARKET_LIST_TR:
      return {
        ...state,
        market_all: action.payload,
        market_byId: byId(action.payload)
      };
    default:
      return state;
  }
};

export default marketList;
