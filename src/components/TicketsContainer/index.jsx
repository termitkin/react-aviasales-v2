import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { itemsFetchData } from "../../store/tickets/action";
import { fetchCurrentRates } from "../../store/currencyRates/actions";
import Ticket from "../Ticket";
import Message from "../Message";
import TicketsPlaceholder from "../TicketsPlaceholder";

const TicketsGroup = props => {
  // Fetch tickets
  if (props.tickets.tickets.length === 0 && props.ticketsIsLoading === false) {
    props.fetchTickets("https://front-test.beta.aviasales.ru/search");
  }

  // Fetch current currency rates
  if (
    props.currencyRates.currencyRates.usd === "" &&
    props.currencyRates.currencyRates.eur === "" &&
    props.currencyRatesIsLoading === false
  ) {
    props.fetchCurrentRates();
  }

  let tickets = props.tickets.tickets.slice();
  let currentStops = [];

  if (props.checkboxes.checkbox0.isEnabled === true) {
    currentStops = "all";
  } else {
    for (let i in props.checkboxes) {
      if (props.checkboxes[i].isEnabled === true) {
        currentStops.push(props.checkboxes[i].stops);
      }
    }
  }

  // sorting tickets by stops
  if (currentStops !== "all") {
    tickets = tickets.filter(el => {
      return currentStops.some(
        elem =>
          elem === el.segments[0].stops.length &&
          elem === el.segments[1].stops.length
      );
    });
  }

  // sorting tickets by cheaper or faster
  if (props.sortBy === "cheaper") {
    tickets.sort((a, b) => {
      return a.price - b.price;
    });
  } else {
    tickets.sort((a, b) => {
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      );
    });
  }

  tickets = tickets.slice(0, 5);

  if (props.ticketsHasErrored === true || props.currencyRatesHasErrored) {
    return <Message text="Произошла ошибка =( Обновите страницу!" />;
  } else if (props.ticketsIsLoading === true) {
    return <TicketsPlaceholder />;
  } else if (tickets.length === 0) {
    return (
      <Message
        text={`Мы нашли ${props.tickets.tickets.length} билетов, но ни один не соответствует заданным фильтрам.`}
      />
    );
  }
  return (
    <Ticket
      ticket={tickets}
      currentCurrency={props.currentCurrency}
      currencyRates={props.currencyRates.currencyRates}
    />
  );
};

const mapStateToProps = state => {
  return {
    checkboxes: state.stops,
    sortBy: state.fastesOrCheaper.sortBy,
    currentCurrency: state.currency.currentCurrency,
    tickets: state.tickets,
    ticketsIsLoading: state.ticketsIsLoading,
    ticketsHasErrored: state.ticketsHasErrored,
    currencyRates: state.currencyRates,
    currencyRatesHasErrored: state.currencyRatesHasErrored,
    currencyRatesIsLoading: state.currencyRatesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentRates: () => dispatch(fetchCurrentRates()),
    fetchTickets: url => dispatch(itemsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsGroup);

TicketsGroup.propTypes = {
  checkboxes: PropTypes.object.isRequired,
  tickets: PropTypes.object.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  fetchTickets: PropTypes.func.isRequired,
  ticketsHasErrored: PropTypes.bool.isRequired,
  ticketsIsLoading: PropTypes.bool.isRequired,
  currencyRates: PropTypes.object.isRequired,
  currencyRatesHasErrored: PropTypes.bool.isRequired,
  currencyRatesIsLoading: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired
};
