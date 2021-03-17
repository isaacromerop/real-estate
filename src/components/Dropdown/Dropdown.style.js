import styled from "styled-components";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  justify-content: center;
  top: ${({ open }) => (open ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? "1" : "0")};
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const DropdownMenuLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
