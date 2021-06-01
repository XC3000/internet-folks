import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}


* {
    box-sizing: border-box;
    margin :0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

    /* @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 80%;
    } */

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 90%;
    }
}
`;

export const Container = styled.div`
  width: 95%;
  max-width: ${(props) => props.theme.breakpoints.desktop};
  margin: 0 auto;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  outline: none;
  border: none;
  background: transparent;
  padding: 0.5rem 1.6rem;
  transition: all 0.2s ease-in;
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral.grayishviolet};
  border-radius: 25px;

  ${(props) =>
    props.primary &&
    css`
      background: ${props.theme.colors.primary.cyan};
      color: #fff;

      &:hover {
        filter: brightness(120%);
      }
    `}
`;

export default GlobalStyle;
