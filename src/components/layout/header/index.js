import React, { useState } from "react";
import HeaderStyled from "./header.styled";
import { PanelBtnWhite } from "@components/shared/button";
import Proptypes from "prop-types";

const Header = ({ scrolled }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function collapseMobileMenu() {
    setIsMobileOpen(!isMobileOpen);
  }

  return (
    <HeaderStyled.Root scrolled={scrolled}>
      <HeaderStyled.BrandContainer scrolled={scrolled}>
        <HeaderStyled.Title scrolled={scrolled}>Archypost</HeaderStyled.Title>
      </HeaderStyled.BrandContainer>
      <HeaderStyled.NavContainer isMobileOpen={isMobileOpen}>
        <PanelBtnWhite buttonLabel="home" isActive={true} />
        <PanelBtnWhite buttonLabel="timeline" isActive={false} />
        <PanelBtnWhite buttonLabel="posts" isActive={false} />
        <PanelBtnWhite buttonLabel="about" isActive={false} />
      </HeaderStyled.NavContainer>
      <HeaderStyled.CollapseNav onClick={collapseMobileMenu}>
        collapsar
      </HeaderStyled.CollapseNav>
    </HeaderStyled.Root>
  );
};

Header.propTypes = {
  scrolled: Proptypes.bool,
};

Header.defaultProps = {
  scrolled: true,
};

export default Header;
