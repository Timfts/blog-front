import  React, { Component } from 'react';
import  styled  from 'styled-components';
import { color, box, mixins } from '@styles';
import { PanelBtnWhite } from '../shared/button';


const HeaderContainer = styled.nav`
    background-color:${color.greyOne};
    width:100%;
    height:25vh;
    box-shadow:${box.boxShadowOne};
    padding:0 5%;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    ${mixins.flexBetween}
`;

const FakeTitle = styled.h1`
    color:${color.creamThree};
    text-transform:uppercase;
    font-size:3rem;
    letter-spacing:1.5px;
`

const BrandContainer = styled.div``;

const NavContainer = styled.div`

`;


export default class Header extends Component {
    render(){
        return(
            <HeaderContainer>
                <BrandContainer>
                    <FakeTitle>Meu Blog</FakeTitle>
                    <PanelBtnWhite buttonLabel="teste" isActive={false} />
                </BrandContainer>
            </HeaderContainer>            
        );
    }
}