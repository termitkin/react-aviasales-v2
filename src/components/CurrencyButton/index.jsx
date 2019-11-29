import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

const CurrencyButton = props => {
  const StyledButton = styled.button`
    width: 33.3%;
    height: 40px;
    background-color: ${props.currency === props.currentCurrency
      ? "#2196f3"
      : "#fff"};
    border: ${props.currency === props.currentCurrency
      ? "1px solid #64b5f5"
      : "1px solid #d2d5d6"};
    cursor: pointer;
    color: ${props.currency === props.currentCurrency ? "#fff" : "#2196f3"};
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 22px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: color, background-color, border 0.15s;
    border-radius: ${props.borderRadius || "0 0 0 0"};

    &:nth-of-type(2),
    &:nth-of-type(3) {
      margin-left: -1px;
    }

    &:hover {
      background-color: ${props.currency === props.currentCurrency
        ? "#2196f3"
        : "#e5f9ff"};

      border: 1px solid #64b5f5;
      z-index: 1;
    }

    &:focus {
      background-color: ${props.currency === props.currentCurrency
        ? "#2196f3"
        : "#fff"};
      border: ${props.currency === props.currentCurrency
        ? "1px solid #64b5f5"
        : "3px solid #64b5f5"};
      z-index: 1;
    }
  `;
  const handleClick = () => {
    return props.changeCurrency(props.currency);
  };

  return (
    <StyledButton onClick={handleClick} aria-label={props.ariaLabel}>
      {props.currency}
    </StyledButton>
  );
};

export default CurrencyButton;

CurrencyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  changeCurrency: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired
};
