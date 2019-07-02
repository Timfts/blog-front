import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '@styles';

const PbwContainer = styled.a`
    text-transform:uppercase;
    font-family:Kanit;
    font-weight:600;
    color:${color.greyOne};
    display:inline-block;
    padding:4px;
    height:6rem;
    width:16rem;
    background:${props => (props.isActive ? 
        'radial-gradient(circle, rgba(249,255,185,1) 0%, rgba(137,133,96,1) 93%)' : 
        'radial-gradient(circle, rgba(158,158,158,1) 0%, rgba(113,112,112,1) 93%);'
    )};

    &:hover {
        color: ${props => (props.isActive ? color.greyOne : color.greyTwo)}
    }
`; 
export const PanelBtnWhite = ({ buttonLabel, isActive }) => (
    <PbwContainer isActive={isActive} href="#">{buttonLabel}</PbwContainer>
);
