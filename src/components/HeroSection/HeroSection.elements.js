import styled from "styled-components";
import { Container, Button } from "../../theme/globalStyles";

export const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 50px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 50px;
  }
  ${Container}
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const HeroImage = styled.div`
  flex: 3;

  img {
    width: 100%;
    display: block;
    position: relative;
    right: -128px;
    width: 110%;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      right: -50px;
    }
  }
`;

export const MainHeading = styled.h1`
  color: ${(props) => props.theme.colors.neutral.varydarkviolet};
  font-size: ${(props) => props.theme.font.size.mainheading};
  margin-bottom: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const SubHeading = styled.h5`
  color: ${(props) => props.theme.colors.neutral.grayishviolet};
  font-size: ${(props) => props.theme.font.size.subheading};
  margin-bottom: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const HeroButton = styled(Button)`
  ${Button}
`;
