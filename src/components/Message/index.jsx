import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

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

Message.propTypes = {
  text: PropTypes.string.isRequired
};
