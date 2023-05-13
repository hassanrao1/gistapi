import React from "react";
import styled from "styled-components";

const Error = ({ error }) => {
  return <Message>{error}</Message>;
};

const Message = styled.div`
  padding: 10px;
  color: #dc143c;
  display: flex;
  align-items: center;
  height: 80vh;
  font-weight: bold;
`;

export default Error;
