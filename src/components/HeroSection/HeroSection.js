import React from "react";

import {
  HeroButton,
  HeroContainer,
  HeroImage,
  HeroContent,
  MainHeading,
  SubHeading,
} from "./HeroSection.elements";

import IllustrationWorking from "./IllustrationWorking.svg";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <MainHeading>More than just Shorter links</MainHeading>
        <SubHeading>
          Build your brand's recognisition and get detailed insights on how your
          links are performing.
        </SubHeading>

        <HeroButton rounded primary>Get Started</HeroButton>
      </HeroContent>

      <HeroImage>
        <img src={IllustrationWorking} alt="IllustrationWorking" />
      </HeroImage>
    </HeroContainer>
  );
};

export default HeroSection;
