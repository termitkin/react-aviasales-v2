import { combineReducers } from "redux";

import { currencyReducer } from "./currency/reducer";
import { fastesOrCheaperReducer } from "./fastesOrCheaper/reducer";
import { stopsReducer } from "./stops/reducer";

import { tickets, itemsHasErrored, itemsIsLoading } from "./tickets/reducer";

export default combineReducers({
  stops: stopsReducer,
  currency: currencyReducer,
  fastesOrCheaper: fastesOrCheaperReducer,

  tickets,
  itemsHasErrored,
  itemsIsLoading
});
