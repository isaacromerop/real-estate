import React, { useState } from "react";

import { Button } from "../Button";

import {
  Nav,
  MenuBars,
  Logo,
  NavMenu,
  NavMenuLinks,
  NavButton,
} from "./Navbar.style";

export const menuData = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Rentals", link: "/rentals" },
];

const NavBar = ({ menu }) => {
  const [bg, setBg] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 195) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <Nav className={bg ? "active" : ""}>
      <Logo to="/">RealState</Logo>
      <MenuBars onClick={() => menu(true)} />
      <NavMenu>
        {menuData.map((link, index) => (
          <NavMenuLinks key={index} to={link.link}>
            {link.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavButton>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default NavBar;
