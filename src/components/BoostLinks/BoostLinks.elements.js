import styled from "styled-components";
import { Container, Button } from "../../theme/globalStyles";

import bgmobile from "./bg-boost-mobile.svg";
import bgdesktop from "./bg-boost-desktop.svg";

export const BoostLinksSection = styled.section`
  background: ${(props) => props.theme.colors.primary.dark};

  z-index: 1;
`;

export const BoostLinksBg = styled.div`
  background-image: url(${bgdesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    background-image: url(${bgmobile});
  }
`;

export const BoostLinksContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0 80px;
  ${Container}
`;

export const Heading = styled.h1`
  font-size: ${(props) => props.theme.font.size.subheading};
  color: #fff;
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-bottom: 1rem;
  text-align: center;
`;

export const BoostButton = styled(Button)`
  ${Button}
`;
