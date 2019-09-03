import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import CurrencyButton from "../CurrencyButton";
import { device } from "../mediaQueries";
import { changeCurrency } from "../../store/currency/actions";

const StyledCurrencyButtonWrapper = styled.div`
  display: flex;
  margin: 0 14px 0 14px;
`;

const StyledCurrencyButton = styled(CurrencyButton)`
  width: 100%;
  height: 65px;
  display: flex;
  padding: 10px 15px 15px;
  box-sizing: border-box;

  @media ${device.desktop} {
    height: 40px;
    margin: 10px auto 16px auto;
  }
`;

export const CurrencyButtonGroup = props => {
  return (
    <StyledCurrencyButtonWrapper aria-label="В какой валюте показывать цены">
      <StyledCurrencyButton
        ariaLabel="рубли"
        currency="rub"
        borderRadius="5px 0px 0px 5px"
        currentCurrency={props.currentCurrency}
        changeCurrency={props.changeCurrency}
      ></StyledCurrencyButton>
      <StyledCurrencyButton
        ariaLabel="доллары"
        currency="usd"
        currentCurrency={props.currentCurrency}
        changeCurrency={props.changeCurrency}
      ></StyledCurrencyButton>
      <StyledCurrencyButton
        ariaLabel="евро"
        currency="eur"
        borderRadius="0px 5px 5px 0px"
        currentCurrency={props.currentCurrency}
        changeCurrency={props.changeCurrency}
      ></StyledCurrencyButton>
    </StyledCurrencyButtonWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentCurrency: state.currency.currentCurrency
  };
};

const mapDispatchToProps = {
  changeCurrency
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyButtonGroup);

CurrencyButtonGroup.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired
};
