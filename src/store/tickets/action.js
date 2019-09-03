import { ITEMS_HAS_ERRORED } from "../../constants";
import { ITEMS_IS_LOADING } from "../../constants";
import { ITEMS_FETCH_DATA_SUCCESS } from "../../constants";
import axios from "axios";

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(tickets) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    tickets
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    const getId = url => {
      return axios
        .get(url)
        .then(response => response.data.searchId)
        .catch(() => dispatch(itemsHasErrored(true)));
    };

    const getTickets = (sID, result) => {
      return axios
        .get("https://front-test.beta.aviasales.ru/tickets", {
          params: {
            searchId: sID
          }
        })
        .then(response => {
          if (response.data.stop === false) {
            result.push(...response.data.tickets);
            return getTickets(sID, result);
          } else if (response.data.stop === true) {
            result.push(...response.data.tickets);
            return result;
          }
        })
        .catch(error => {
          if (error.response.status === 500) {
            return getTickets(sID, result);
          } else {
            dispatch(itemsHasErrored(true));
          }
        });
    };

    getId(url).then(currentId => {
      const result = [];
      getTickets(currentId, result).then(result => {
        dispatch(
          itemsFetchDataSuccess({
            tickets: result
          })
        );
        dispatch(itemsIsLoading(false));
      });
    });
  };
}
