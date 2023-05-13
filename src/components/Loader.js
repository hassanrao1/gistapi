import React from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <Spinner>
      <AiOutlineLoading3Quarters size={50} />
    </Spinner>
  );
};
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  color: black;
  animation: ${rotate} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export default Loader;
