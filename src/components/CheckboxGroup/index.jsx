import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
import Checkbox from "../Checkbox";
import { changeStops } from "../../store/stops/actions";
import { connect } from "react-redux";

const CheckboxGroup = props => {
  const checkboxesArr = [];

  for (let i in props.stops) {
    checkboxesArr.push(props.stops[i]);
  }

  const checkboxes = checkboxesArr.map(el => {
    return (
      <Checkbox
        key={el.id}
        id={el.id}
        labelText={el.labelText}
        state={el.isEnabled}
        stops={el.stops}
        isEnabled={el.isEnabled}
        changeStops={props.changeStops}
      />
    );
  });
  return <div>{checkboxes}</div>;
};

const mapStateToProps = state => {
  return {
    stops: state.stops.checkboxes
  };
};

const mapDispatchToProps = {
  changeStops
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxGroup);
