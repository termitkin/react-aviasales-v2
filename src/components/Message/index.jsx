import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  display: block;
  margin-top: 12px;
  text-align: center;
  color: #333;
`;

const Message = ({ text }) => {
  return <StyledMessage>{text}</StyledMessage>;
};

export default Message;
