import React, { useState } from "react";
import {
  HeaderContainer,
  FakeTitle,
  BrandContainer,
  NavContainer,
  CollapseNav,
} from "./header.styled";
import { PanelBtnWhite } from "../shared/button";
import Proptypes from 'prop-types';

const Header = ({ scrolled }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function collapseMobileMenu() {
    setIsMobileOpen(!isMobileOpen);
  }

  return (
    <HeaderContainer scrolled={scrolled}>
      <BrandContainer scrolled={scrolled}>
        <FakeTitle scrolled={scrolled}>Archypost</FakeTitle>
      </BrandContainer>
      <NavContainer isMobileOpen={isMobileOpen}>
        <PanelBtnWhite buttonLabel="home" isActive={true} />
        <PanelBtnWhite buttonLabel="timeline" isActive={false} />
        <PanelBtnWhite buttonLabel="posts" isActive={false} />
        <PanelBtnWhite buttonLabel="about" isActive={false} />
      </NavContainer>
      <CollapseNav onClick={collapseMobileMenu}>collapsar</CollapseNav>
    </HeaderContainer>
  );
};

Header.propTypes = {
  scrolled: Proptypes.bool
}

Header.defaultProps = {
  scrolled: true
}

export default Header;
