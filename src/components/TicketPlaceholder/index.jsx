import React from "react";
import Styled from "styled-components";

const StyledPlaceholder = Styled.div`
  width: 100%;
  max-width: 500px;
  height: 184px;
  background-color: #eee;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = Styled.span`
  font-size; 16px;
  color: #333;
  font-family: sans-serif;
  font-weight: bold;
`;

const TicketPlaceholder = () => {
  return (
    <div>
      <StyledPlaceholder>
        <StyledText>Билет загружается</StyledText>
      </StyledPlaceholder>
      <StyledPlaceholder>
        <StyledText>Билет загружается</StyledText>
      </StyledPlaceholder>
      <StyledPlaceholder>
        <StyledText>Билет загружается</StyledText>
      </StyledPlaceholder>
      <StyledPlaceholder>
        <StyledText>Билет загружается</StyledText>
      </StyledPlaceholder>
      <StyledPlaceholder>
        <StyledText>Билет загружается</StyledText>
      </StyledPlaceholder>
    </div>
  );
};

export default TicketPlaceholder;
