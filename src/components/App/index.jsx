import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Filter from "../Filter";
import TabsGroup from "../TabsGroup";
import TicketsGroup from "../TicketsGroup";
import { device } from "../mediaQueries";

const StyledApp = styled.div`
  padding: 1px;
  min-height: 100%;
  background-color: #f3f7fa;
`;

const StyledWrapper = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  justify-content: flex-start;

  @media ${device.desktop} {
    width: 752px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const StyledRightColumn = styled.div`
  width: 100%;
  max-width: 500px;
  dispay: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <StyledApp>
      <Logo />
      <StyledWrapper>
        <Filter />
        <StyledRightColumn>
          <TabsGroup />
          <TicketsGroup />
        </StyledRightColumn>
      </StyledWrapper>
    </StyledApp>
  );
};

export default App;
