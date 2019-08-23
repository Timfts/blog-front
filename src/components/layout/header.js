import React, { Component } from "react";
import styled from "styled-components";
import { color, box, mixins, media } from "@styles";
import { PanelBtnWhite } from "../shared/button";
import { debounce, getScreenBreakpoint } from "../../helpers";

const HeaderContainer = styled.nav`
  background-color: ${color.greyOne};
  width: 100%;
  transition:all .4s;
  height: ${props => (props.scrolled ? "15vh" : "20vh")};
  box-shadow: ${box.boxShadowOne};
  padding: 0 2%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  ${mixins.flexBetween}
  ${media.desk`
        ${mixins.flexColumn}
        justify-content:center;
        height:auto;
        padding:3rem  0;
    `}
    ${media.phone`
      padding:${props => (props.scrolled ? "1rem" : "3rem")};
    `}
`;

const FakeTitle = styled.h1`
  color: ${color.creamThree};
  /*text-transform:uppercase;*/
  font-size: 3rem;
  letter-spacing: 1.5px;
  padding: 5px;
  border-bottom: 4px solid ${color.redDark};

  ${media.tabPort`
    font-size:${props => (props.scrolled ? "2rem" : "3rem")};
  `}
`;

const BrandContainer = styled.div`
  position: relative;
  transition: all 0.6s ease;
  ${media.desk`
        margin-bottom:3rem;
    `}
  ${media.phone`
    margin-bottom:2rem;
    ${props => (props.scrolled ? "transform:translateX(-80%)" : "")}
  `}
`;

const NavContainer = styled.div`
  ${media.tabPort`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        overflow: hidden;
        transition:height .5s ease-in;
        width:auto;
        ${mixins.flexColumn}
        ${props =>
          props.isMobileOpen
            ? `
                height:35rem;

            `
            : `
                height:0;

            `}
        
    `}
`;

const CollapseNav = styled.button`
  background-color: red;
  display: none;
  ${media.tabPort`
        display:inline-block;
    `}
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileOpen: false,
    };
    this.collapseMobileMenu = this.collapseMobileMenu.bind(this);
  }

  componentDidMount() {}

  collapseMobileMenu(teste) {
    //turn will change on
    // trigger animation
    // turn will change
    this.setState({ isMobileOpen: !this.state.isMobileOpen });
  }

  render() {
    return (
      <HeaderContainer scrolled={this.props.scrolled}>
        <BrandContainer scrolled={this.props.scrolled}>
          <FakeTitle scrolled={this.props.scrolled}>Archypost</FakeTitle>
        </BrandContainer>
        <NavContainer isMobileOpen={this.state.isMobileOpen}>
          <PanelBtnWhite buttonLabel="home" isActive={true} />
          <PanelBtnWhite buttonLabel="timeline" isActive={false} />
          <PanelBtnWhite buttonLabel="posts" isActive={false} />
          <PanelBtnWhite buttonLabel="about" isActive={false} />
        </NavContainer>
        <CollapseNav onClick={this.collapseMobileMenu}>collapsar</CollapseNav>
      </HeaderContainer>
    );
  }
}
