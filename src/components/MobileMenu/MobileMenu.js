/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" size={24} color={COLORS.gray[900]} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${COLORS.overlay};
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLORS.white};
  padding: 26px 16px 32px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 18px;
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  display: block;
  color: ${COLORS.gray[700]};
  font-size: 14px;
  text-decoration: none;
`;

export default MobileMenu;
