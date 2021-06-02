import styled from "styled-components";
import { Container } from "../../theme/globalStyles";

export const AdvancedStatsBg = styled.section`
  background: ${(props) => props.theme.colors.neutral.lightgrey};
  padding-bottom: 40px;
`;

export const AdvancedStatsContainer = styled(Container)`
  ${Container}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 600px;
`;

export const MainHeading = styled.h1`
  font-size: ${(props) => props.theme.font.size.mainheading};
  color: ${(props) => props.theme.colors.neutral.varydarkviolet};
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const SubText = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  text-align: center;
  color: ${(props) => props.theme.colors.neutral.gray};
`;

export const CardsBg = styled.div`
  position: relative;
`;

export const Line = styled.span`
  position: absolute;
  width: 100%;
  display: block;
  top: 50%;
  height: 6px;
  background: ${(props) => props.theme.colors.primary.cyan};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 6px;
    height: 100%;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Cards = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 80px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-bottom: 0px;
    gap: 80px;
  }
`;

export const Card = styled.li`
  list-style: none;
  background: #fff;
  padding: 60px 50px 50px;
  position: relative;
  border-radius: 20px;

  &:nth-child(1) {
    margin-top: -80px;
  }

  &:nth-child(3) {
    margin-bottom: -80px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 80px 50px 40px;

    &:nth-child(1) {
      margin-top: 0;
    }

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: -25px;
  left: 25px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary.dark};
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 50%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CardHeading = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.neutral.varydarkviolet};
  margin-bottom: 0.5rem;
  font-weight: ${(props) => props.theme.font.weight.bold};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
    margin-bottom: 1.2rem;
  }
`;

export const CardBody = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.neutral.gray};
  font-weight: ${(props) => props.theme.font.weight.semibold};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: center;
  }
`;
