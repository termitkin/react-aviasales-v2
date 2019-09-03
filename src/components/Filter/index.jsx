import React from "react";
import styled from "styled-components";
import CurrencyButtonGroup from "../CurrencyButtonGroup";
import CheckboxGroup from "../CheckboxGroup";
import { device } from "../mediaQueries";

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid #fff;

  @media ${device.desktop} {
    width: 232px;
    margin-bottom: 0;
  }
`;

const StyledControlsWrap = styled.fieldset`
  width: 100%;
  max-width: 100%;
  display: block;
  border: none;
  padding: 0;
  margin: 15px 0 0 0;

  &:last-child {
    margin: 15px 0 15px 0;
  }
`;

const StyledTitle = styled.legend`
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-left: 14px;
  margin-bottom: 15px;
  padding: 0;
`;

const Filter = () => {
  return (
    <StyledFilter>
      <StyledControlsWrap>
        <StyledTitle>Валюта</StyledTitle>
        <CurrencyButtonGroup />
      </StyledControlsWrap>

      <StyledControlsWrap>
        <StyledTitle>Количество пересадок</StyledTitle>
        <CheckboxGroup />
      </StyledControlsWrap>
    </StyledFilter>
  );
};

export default Filter;
