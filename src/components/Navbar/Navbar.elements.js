import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Button } from "../../theme/globalStyles";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 25px 15px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavSubMenuLeft = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Navitem = styled.li`
  margin: 0 10px;
  list-style: none;
  text-decoration: none;
`;

export const NavLinks = styled(Link)`
  color: ${(props) => props.theme.colors.neutral.grayishviolet};
  text-decoration: none;
  font-weight: ${(props) => props.theme.font.weight.bold};

  &:hover {
    color: ${(props) => props.theme.colors.neutral.varydarkviolet};
  }
`;

export const NavSubMenuRight = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavbarButton = styled(Button)`
  margin-left: 0.5rem;
  ${Button}
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background: ${(props) => props.theme.colors.neutral.grayishviolet};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;
