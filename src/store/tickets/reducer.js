import { ACTION_TICKETS_HAS_ERRORED } from "../../constants";
import { ACTION_TICKETS_IS_LOADING } from "../../constants";
import { ACTION_TICKETS_FETCH_DATA_SUCCESS } from "../../constants";

const initialState = {
  tickets: []
};

export function ticketsHasErrored(state = false, action) {
  switch (action.type) {
    case ACTION_TICKETS_HAS_ERRORED:
      return action.ticketsHasErrored;

    default:
      return state;
  }
}

export function ticketsIsLoading(state = false, action) {
  switch (action.type) {
    case ACTION_TICKETS_IS_LOADING:
      return action.ticketsIsLoading;

    default:
      return state;
  }
}

export function tickets(state = initialState, action) {
  switch (action.type) {
    case ACTION_TICKETS_FETCH_DATA_SUCCESS:
      return action.tickets;

    default:
      return state;
  }
}
