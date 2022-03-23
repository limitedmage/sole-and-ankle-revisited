import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men Thisisaverylongname</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" size={24} color={COLORS.gray[900]} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" size={24} color={COLORS.gray[900]} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" size={24} color={COLORS.gray[900]} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    &:last-child {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-seconday);
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 34px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

export default Header;
