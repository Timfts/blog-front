import React, { useState } from "react";
import HeaderStyled from './header.styled';
import { PanelBtnWhite } from "../shared/button";
import Proptypes from 'prop-types';

const Header = ({ scrolled }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function collapseMobileMenu() {
    setIsMobileOpen(!isMobileOpen);
  }

  return (
    <HeaderStyled.root scrolled={scrolled}>
      <HeaderStyled.brandContainer scrolled={scrolled}>
        <HeaderStyled.title scrolled={scrolled}>Archypost</HeaderStyled.title>
      </HeaderStyled.brandContainer>
      <HeaderStyled.navContainer isMobileOpen={isMobileOpen}>
        <PanelBtnWhite buttonLabel="home" isActive={true} />
        <PanelBtnWhite buttonLabel="timeline" isActive={false} />
        <PanelBtnWhite buttonLabel="posts" isActive={false} />
        <PanelBtnWhite buttonLabel="about" isActive={false} />
      </HeaderStyled.navContainer>
      <HeaderStyled.collapseNav onClick={collapseMobileMenu}>collapsar</HeaderStyled.collapseNav>
    </HeaderStyled.root>
  );
};

Header.propTypes = {
  scrolled: Proptypes.bool
}

Header.defaultProps = {
  scrolled: true
}

export default Header;
