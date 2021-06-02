import React from "react";

import {
  FooterSection,
  Branding,
  FooterContainer,
  CompanyLinksList,
  CompanyLinksItem,
  FooterHeading,
  FooterList,
  FooterLink,
  SocialIconsList,
  SocialLink,
} from "./Footer.elemets";
import { links, socialicons } from "./data";

import { ReactComponent as Logo } from "./logo.svg";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Branding>
          <Logo />
        </Branding>

        <CompanyLinksList>
          {links &&
            links.map((link, index) => (
              <CompanyLinksItem key={index}>
                <FooterHeading>{link.heading}</FooterHeading>

                <FooterList>
                  {link.sublinks &&
                    link.sublinks.map((sublink, index) => (
                      <FooterLink to={sublink.link} key={index}>
                        {sublink.name}
                      </FooterLink>
                    ))}
                </FooterList>
              </CompanyLinksItem>
            ))}
        </CompanyLinksList>

        <SocialIconsList>
          {socialicons &&
            socialicons.map((socialicon, index) => (
              <SocialLink key={index} to={socialicon.to}>
                <socialicon.icon />
              </SocialLink>
            ))}
        </SocialIconsList>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
