import React, { Component } from 'react';
import styled from 'styled-components';
import { color, box, mixins, media } from '@styles';
import { PanelBtnWhite } from '../shared/button';


const HeaderContainer = styled.nav`
    background-color:${color.greyOne};
    width:100%;
    height:20vh;
    box-shadow:${box.boxShadowOne};
    padding:0 2%;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    ${mixins.flexBetween}
    ${media.desk`
        ${mixins.flexColumn}
        justify-content:center;
        height:auto;
        padding:3rem  0;
    `}
`;

const FakeTitle = styled.h1`
    color:${color.creamThree};
    /*text-transform:uppercase;*/
    font-size:3rem;
    letter-spacing:1.5px;
    padding:5px;
    border-bottom:4px solid ${color.redDark};

`

const BrandContainer = styled.div`
    ${media.desk`
        margin-bottom:3rem;
    `}
`;

const NavContainer = styled.div`
    ${media.tabPort`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        overflow: hidden;
        transition:height .5s ease-in;
        
    `}
    ${media.phone`
        ${mixins.flexColumn}
        ${props => (props.isMobileOpen ?
            `
                height:35rem;

            ` :
            `
                height:0;

            `
        )}
    `}
`;

const CollapseNav = styled.button`
    background-color:red;
    display:none;
    ${media.phone`
        display:inline-block;
    `}
`;


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobileOpen: false
        }
        this.collapseMobileMenu = this.collapseMobileMenu.bind(this);
    }

    collapseMobileMenu(teste) {
        //turn will change on
        // trigger animation
        // turn will change
        this.setState({ isMobileOpen: !this.state.isMobileOpen });
    }

    render() {
        return (
            <HeaderContainer>
                <BrandContainer>
                    <FakeTitle>Archypost</FakeTitle>
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