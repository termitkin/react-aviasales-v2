import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const StyledLogo = styled.a`
  display: block;
  width: 82px;
  height: 90px;
  margin: 0 auto;
  text-decoration: none;
`;

const Logo = () => {
  return (
    <StyledLogo
      href={"https://termitkin.github.io/react-aviasales-v2/"}
      title="Главная страница"
    >
      <img src={logo} alt="Главная страница" />
    </StyledLogo>
  );
};

export default Logo;
