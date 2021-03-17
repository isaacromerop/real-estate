import React from "react";
import { Button } from "../Button";

import { menuData } from "../NavBar/NavBar";

import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownMenu,
  DropdownMenuLink,
  BtnWrap,
  DropdownWrapper,
} from "./Dropdown.style";

const Dropdown = ({ menu, openMenu }) => {
  return (
    <DropdownContainer open={menu}>
      <Icon>
        <CloseIcon onClick={() => openMenu(false)} />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((link, index) => (
            <DropdownMenuLink key={index} to={link.link}>
              {link.title}
            </DropdownMenuLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
