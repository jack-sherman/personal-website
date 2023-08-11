import styled from "styled-components";
import Typed from "react-typed";

const TerminalContainer = styled.div`
  min-height: 50vh;
  background-color: #575757;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(14px+2vmin);
  padding: 6vh;
`;

const BoldText = styled.h1`
  font-size: 55px;
`;

const ScrollText = styled.p`
  font-size: 30px;
`;

const Terminal = () => {
  return (
    <TerminalContainer>
      <BoldText>Hi, I'm Jack Sherman</BoldText>
      <ScrollText>
        <Typed
          strings={[
            "I'm a software developer",
            "I'm an engineer",
            "I love to learn everyday",
            "Lets work together!",
          ]}
          typeSpeed={50}
          backSpeed={30}
          backDelay={1600}
        />
      </ScrollText>
    </TerminalContainer>
  );
};

export default Terminal;
