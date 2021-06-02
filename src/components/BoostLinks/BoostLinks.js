import React from "react";

import {
  BoostLinksSection,
  BoostLinksBg,
  BoostLinksContainer,
  Heading,
  BoostButton,
} from "./BoostLinks.elements";

const BoostLinks = () => {
  return (
    <BoostLinksSection>
      <BoostLinksBg>
        <BoostLinksContainer>
          <Heading>Boost Your links today</Heading>
          <BoostButton rounded primary>
            Get Started
          </BoostButton>
        </BoostLinksContainer>
      </BoostLinksBg>
    </BoostLinksSection>
  );
};

export default BoostLinks;
