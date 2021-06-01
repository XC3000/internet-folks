import React, { useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  Navitem,
  NavLinks,
  NavSubMenuLeft,
  NavSubMenuRight,
  Hamburger,
  NavbarButton,
} from "./Navbar.elements";

import { ReactComponent as Logo } from "./logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Nav>
      <NavbarContainer>
        <NavSubMenuLeft>
          <NavLogo to="/">
            <Logo />
          </NavLogo>

          <NavMenu>
            <Navitem>
              <NavLinks to="/">Features</NavLinks>
            </Navitem>

            <Navitem>
              <NavLinks to="/">Pricing</NavLinks>
            </Navitem>

            <Navitem>
              <NavLinks to="/">Resources</NavLinks>
            </Navitem>
          </NavMenu>
        </NavSubMenuLeft>

        <NavSubMenuRight>
          <NavbarButton>Login</NavbarButton>
          <NavbarButton primary>Sign Up</NavbarButton>
        </NavSubMenuRight>

        <Hamburger onClick={handleOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
