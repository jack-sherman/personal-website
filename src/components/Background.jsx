import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: "https://t4.ftcdn.net/jpg/01/76/67/25/240_F_176672598_cJ4yPCFhxvDXm9Cu7vDLIcXpvTMQJ9zm.jpg";

  overflow: hidden;
  margin: 0;
  border: 0;
`;
const BackgroundImage = styled.img`
  margin: 0;
  border: 0;
  object-fit: contain;
  height: 100vh;
  width: 100vw;
`;

const Background = () => {
  return (
    <BackgroundImage src="https://t4.ftcdn.net/jpg/01/76/67/25/240_F_176672598_cJ4yPCFhxvDXm9Cu7vDLIcXpvTMQJ9zm.jpg" />
  );
};

export default Background;
