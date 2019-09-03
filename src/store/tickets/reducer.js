import { ITEMS_HAS_ERRORED } from "../../constants";
import { ITEMS_IS_LOADING } from "../../constants";
import { ITEMS_FETCH_DATA_SUCCESS } from "../../constants";

const initialState = {
  tickets: []
};

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function tickets(state = initialState, action) {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.tickets;

    default:
      return state;
  }
}
