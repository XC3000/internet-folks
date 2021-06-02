import React from "react";

import {
  AdvancedStatsBg,
  AdvancedStatsContainer,
  Card,
  CardBody,
  CardsBg,
  CardHeading,
  Cards,
  Header,
  Icon,
  MainHeading,
  SubText,
  Line,
} from "./AdvancedStatistics.elements";

import BrandRecognisitionIcon from "./icon-brand-recognition.svg";
import DetailedRecordsIcon from "./icon-detailed-records.svg";
import FullyCustomizableIcon from "./icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  const data = [
    {
      icon: BrandRecognisitionIcon,
      heading: "Brand Recognistion",
      details: `Boost your brand recognisition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your
            content.`,
    },

    {
      icon: DetailedRecordsIcon,
      heading: "Detailed Records",
      details: `Gain insights into who is clicking your links. Knowing when 
            and where people engage with your content helps inform better decisions`,
    },

    {
      icon: FullyCustomizableIcon,
      heading: "Brand Recognistion",
      details: `Boos your brand recognisition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.`,
    },
  ];

  return (
    <AdvancedStatsBg>
      <AdvancedStatsContainer>
        <Header>
          <MainHeading>Advanced Statistics</MainHeading>
          <SubText>
            Track how your links are performig across the web with our advanced
            statistics dashboard.
          </SubText>
        </Header>

        <CardsBg>
          <Line />
          <Cards>
            {data.length > 0 &&
              data.map((card, index) => (
                <Card key={index}>
                  <Icon>
                    <img src={card.icon} alt={card.heading} />
                  </Icon>
                  <CardHeading>{card.heading}</CardHeading>
                  <CardBody>{card.details}</CardBody>
                </Card>
              ))}
          </Cards>
        </CardsBg>
      </AdvancedStatsContainer>
    </AdvancedStatsBg>
  );
};

export default AdvancedStatistics;
