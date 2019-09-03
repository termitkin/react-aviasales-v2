import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { itemsFetchData } from "../../store/tickets/action";
import Ticket from "../Ticket";
import Message from "../Message";
import TicketPlaceholder from "../TicketPlaceholder";

const TicketsGroup = props => {
  if (props.tickets.tickets.length === 0 && props.isLoading === false) {
    props.fetchData("https://front-test.beta.aviasales.ru/search");
  }

  let tickets = props.tickets.tickets;
  let currentStops = [];

  for (let i in props.checkboxes) {
    if (props.checkboxes.checkbox0.isEnabled === true) {
      currentStops = "all";
      break;
    } else if (props.checkboxes[i].isEnabled === true) {
      currentStops.push(props.checkboxes[i].stops);
    }
  }

  if (currentStops !== "all") {
    tickets = tickets.filter(el => {
      return currentStops.some(
        elem =>
          elem === el.segments[0].stops.length &&
          elem === el.segments[1].stops.length
      );
    });
  }

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

  if (props.hasErrored === true) {
    return <Message text="Произошла ошибка =( Обновите страницу!" />;
  } else if (props.isLoading === true) {
    return <TicketPlaceholder />;
  } else if (tickets.length === 0) {
    return (
      <Message
        text={`Мы нашли ${props.tickets.tickets.length} билетов, но ни один не соответствует заданным фильтрам.`}
      />
    );
  }
  return <Ticket ticket={tickets} currentCurrency={props.currentCurrency} />;
};

const mapStateToProps = state => {
  return {
    checkboxes: state.stops.checkboxes,
    sortBy: state.fastesOrCheaper.sortBy,
    currentCurrency: state.currency.currentCurrency,
    tickets: state.tickets,
    isLoading: state.itemsIsLoading,
    hasErrored: state.itemsHasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
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
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired
};
