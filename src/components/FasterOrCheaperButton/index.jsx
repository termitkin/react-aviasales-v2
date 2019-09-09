import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

export const Tab = props => {
  const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50px;
    background-color: ${props.sortBy === props.currentSortBy
      ? "#2196F3"
      : "#fff"};
    color: ${props.sortBy === props.currentSortBy ? "#fff" : "#4A4A4A"};
    border: ${props.sortBy === props.currentSortBy
      ? "1px solid #2196F3"
      : "1px solid #dfe5ec"};
    cursor: pointer;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border-radius: ${props.borderRadius || "0 0 0 0"};
    padding: 0;

    &:hover {
      background-color: ${props.sortBy === props.currentSortBy
        ? "#2196f3"
        : "#fff"};
      border: 1px solid #64b5f5;
    }

    &:focus {
      background-color: ${props.sortBy === props.currentSortBy
        ? "#2196f3"
        : "#fff"};
      border: ${props.sortBy === props.currentSortBy
        ? "1px solid #64b5f5"
        : "3px solid #64b5f5"};
    }
  `;

  const handleClick = () => props.changeFasterOrCheaper(props.sortBy);

  return <StyledButton onClick={handleClick}>{props.text}</StyledButton>;
};

export default Tab;

Tab.propTypes = {
  sortBy: PropTypes.string.isRequired,
  currentSortBy: PropTypes.string.isRequired,
  changeFasterOrCheaper: PropTypes.func.isRequired,
  borderRadius: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
