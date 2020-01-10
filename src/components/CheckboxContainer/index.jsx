import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import { changeStops } from "../../store/stops/actions";
import { connect } from "react-redux";

const CheckboxGroup = props => {
  return (
    <div>
      {Object.values(props.stops).map(checkbox => {
        return (
          <Checkbox
            key={checkbox.id}
            id={checkbox.id}
            labelText={checkbox.labelText}
            stops={checkbox.stops}
            isEnabled={checkbox.isEnabled}
            changeStops={props.changeStops}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stops: state.stops
  };
};

const mapDispatchToProps = {
  changeStops
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxGroup);

CheckboxGroup.propTypes = {
  changeStops: PropTypes.func.isRequired,
  stops: PropTypes.object.isRequired
};
