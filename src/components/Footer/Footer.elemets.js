import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../theme/globalStyles";

export const FooterSection = styled.footer`
  background: ${(props) => props.theme.colors.neutral.varydarkviolet};
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 100px 0;
  gap: 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 50px;
    padding: 50px 0;
  }

  ${Container}
`;

export const Branding = styled.div`
  background: ${(props) => props.theme.colors.neutral.varydarkviolet};
  flex: 2;

  svg path {
    fill: #fff;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CompanyLinksList = styled.div`
  display: flex;
  gap: 70px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const CompanyLinksItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.neutral.grayishviolet};
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: ${(props) => props.theme.colors.primary.cyan};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const FooterHeading = styled.h1`
  color: #fff;
  font-size: 1.2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const SocialIconsList = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;

export const SocialLink = styled(Link)`
  font-size: 0.8rem;

  &:hover {
    svg path {
      fill: ${(props) => props.theme.colors.primary.cyan};
    }
  }
`;
