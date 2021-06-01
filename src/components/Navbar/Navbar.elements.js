import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Container, Button } from "../../theme/globalStyles";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 25px 15px;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
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
  margin-left: 2rem;

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

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: 0;
  }
  ${Button}
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.primary.dark};
  display: none;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 25px 0;
  }

  a {
    font-size: ${(props) => props.theme.font.size.normal};
    color: #fff;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
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

export const Divider = styled.span`
  display: block;
  margin: 20px auto;
  height: 1px;
  width: 80%;
  background: #fff;
`;

export const MobileMenuButton = styled(Button)`
  ${(props) =>
    props.primary &&
    css`
      background: ${props.theme.colors.primary.cyan};
      color: #fff;

      &:hover {
        filter: brightness(120%);
        /* background: ${props.theme.colors.primary.lightcyan}; */
      }
    `}
  color: #fff;
  display: block;
  margin: 0 auto;
  width: 80%;
  padding: 10px auto;
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.size.normal};
  ${Button}
`;
