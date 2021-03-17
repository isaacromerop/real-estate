import styled, { css } from "styled-components";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const navVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      delay: 0.5,
    },
  },
};

export const Nav = styled(motion.div).attrs(() => ({
  variants: navVariants,
  initial: "hidden",
  animate: "visible",
}))`
  height: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 100;
  transition: 0.2s ease-in;

  &.active {
    background: #cd853f;
  }
`;

const NavLinks = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

export const Logo = styled(Link)`
  ${NavLinks}
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  cursor: pointer;
  align-self: center;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLinks}
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
