import styled, { css } from "styled-components";
import { Container, Button } from "../../theme/globalStyles";

import bgmobile from "./bg-shorten-mobile.svg";
import bgdesktop from "./bg-shorten-desktop.svg";
import { Link } from "react-router-dom";

export const ShortenLinkBg = styled.section`
  background: ${(props) => props.theme.colors.neutral.lightgrey};
  position: relative;
  margin-top: 80px;
`;

export const ShotenLinkContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 50px;
    top: -120px;
  }
  ${Container}
`;

export const ShortenLinkForm = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
export const ShortenLinkInput = styled.input`
  display: block;
  flex: 2;
  outline: none;
  border: none;
  padding: 1.3rem 20px;
  border-radius: 6px;
  font-size: ${(props) => props.theme.font.size.normal};
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

export const InputWrapper = styled.div`
  flex: 2;
  width: 100%;
`;

export const FormError = styled.p`
  color: ${(props) => props.theme.colors.secondary.red};
  margin: 12px 8px 0;
  font-size: 0.9rem;
  font-style: italic;
`;

export const ShortenLinkButton = styled(Button)`
  padding: 1.3rem 3rem;
  border-radius: 10px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding: 1.5rem;
  }

  ${(props) =>
    props.copied &&
    css`
      background: ${(props) => props.theme.colors.primary.dark};
    `}
  ${Button}
`;

export const CopyLinkButton = styled(Button)`
  padding: 0.4rem 2rem;

  width: 155px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding: 1.5rem;
  }

  ${(props) =>
    props.copied &&
    css`
      background: ${(props) => props.theme.colors.primary.dark};
    `}
  ${Button}
`;

export const ShortenBox = styled.div`
  background-size: cover;
  background-image: url(${bgdesktop});
  padding: 50px 70px 40px;
  border-radius: 10px;
  background-repeat: no-repeat;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    background-image: url(${bgmobile});
    padding: 30px 15px;
    background-position: top right;
    background-size: auto;
  }
`;

export const ShortenBoxBackground = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary.dark};
  border-radius: 10px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: -100px;
`;

export const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  /* position: relative; */
`;

export const ShortenLinkList = styled.ul`
  width: 100%;
  /* margin-top: 20px; */
  position: relative;
  top: -80px;
`;

export const ShortenLinkItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background: #fff;
  padding: 0px 20px;
  margin-bottom: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    padding: 0;
    border-radius: 10px;
  }
`;

export const MailLink = styled.a`
  display: block;
  text-decoration: none;
  flex: 2;
  color: ${(props) => props.theme.colors.neutral.varydarkviolet};

  font-size: ${(props) => props.theme.font.size.normal};
`;
export const ShortenLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size.normal};
`;

export const ShortenedLink = styled.a`
  font-size: ${(props) => props.theme.font.size.normal};
  text-decoration: none;
  display: block;
  color: ${(props) => props.theme.colors.primary.cyan};
`;

export const Divider = styled.span`
  display: none;
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.neutral.grayishviolet};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const ShortenLinkItemTop = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  width: 100%;
  flex: 2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const ShortenLinkItemBottom = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  flex: 1;
  gap: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;
