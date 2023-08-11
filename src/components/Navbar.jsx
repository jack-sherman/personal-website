import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: white;
  margin: 10px;
`;

const Wrapper = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navbar = () => {
  const routeHome = (id) => {
    navigate(id);
  };
  let navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo onClick={() => routeHome("/About")}>About</Logo>
        </Left>
        <Center>
          <Logo onClick={() => routeHome("/Projects")}>Projects</Logo>
        </Center>
        <Right>
          <Logo onClick={() => routeHome("/Contact")}>Contact</Logo>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
