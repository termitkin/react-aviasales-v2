import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../mediaQueries";
import checkBoxIcon from "./check.svg";

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: Open Sans, sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 35px;
  color: #4a4a4a;

  &::before {
    content: "";
    display: inline-block;
    width: 19px;
    height: 19px;
    border: 1px solid #d2d5d6;
    border-radius: 3px;
    box-sizing: border-box;
    margin-right: 10px;
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + ${StyledLabel}::before {
    border: 1px solid #2196f3;
    background-image: url(${checkBoxIcon});
    background-position: center center;
    background-repeat: no-repeat;
  }

  &:focus + ${StyledLabel}::before {
    border: 3px solid #2196f3;
  }
`;

const StyledOnlyButton = styled.button`
  width: 49px;
  background-color: transparent;
  border: none;
  margin-left: auto;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 11px;
  line-height: 35px;
  letter-spacing: 0.5px;
  color: #2196f3;
  text-transform: uppercase;
  display: none;
  cursor: pointer;
  padding: 0;
`;

const StyledCheckboxWrap = styled.div`
  width: 290px;
  height: 36px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  outline: none;

  @media ${device.desktop} {
    width: 232px;
  }

  &:hover {
    background-color: #f1fcff;
  }

  &:hover ${StyledOnlyButton} {
    display: table-cell;
    background-color: #f1fcff;
  }
`;

const Checkbox = props => {
  const handleClickOnCheckbox = () => {
    return props.changeStops({
      clickedButton: "checkbox" + props.id,
      only: false
    });
  };

  const handleClickOnOnlyButton = () => {
    return props.changeStops({
      clickedButton: "checkbox" + props.id,
      only: true
    });
  };

  const onlyButton =
    props.stops === "all" ? (
      ""
    ) : (
      <StyledOnlyButton onClick={handleClickOnOnlyButton}>
        только
      </StyledOnlyButton>
    );

  return (
    <StyledCheckboxWrap tabIndex="-1">
      <StyledCheckbox
        checked={props.isEnabled}
        id={"checkbox" + props.id}
        type="checkbox"
        onChange={handleClickOnCheckbox}
      />
      <StyledLabel htmlFor={"checkbox" + props.id}>
        {props.labelText}
      </StyledLabel>
      {onlyButton}
    </StyledCheckboxWrap>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  changeStops: PropTypes.func.isRequired,
  stops: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired
};
