import React from 'react';
import styled from 'styled-components';
import { color } from '@styles'

const SocialContainer = styled.div`
    background-color:${color.greyOne};
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:5.5rem;
    padding-top:20vh;
    z-index:5;
`;

const socialBar = () => (
    <SocialContainer>teste</SocialContainer>
);

export default socialBar;
