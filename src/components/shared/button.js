import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '@styles';

const PbwContainer = styled.a`
    text-transform:uppercase;
    font-family:Kanit;
    margin:8px;
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
    ${props => (props.isActive ?
        `box-shadow: 0px 0px 36px -8px rgba(249,255,185,.4), 
                     4px 4px 5px 0px rgba(0,0,0,0.48);` :
        'box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.48);'
    )}

    &:hover {
        color: ${props => (props.isActive ? color.greyOne : color.greyTwo)};
        transform: translateY(2px);
        box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.60);
    }

    &:active {
        transform:translateY(5px);
        box-shadow: 4px 2px 5px 0px rgba(0,0,0,0.80);
    }
`; 
export const PanelBtnWhite = ({ buttonLabel, isActive }) => (
    <PbwContainer isActive={isActive} href="#">{buttonLabel}</PbwContainer>
);

PanelBtnWhite.propTypes = {
    buttonLabel: PropTypes.string,
    isActive: PropTypes.bool
}

PanelBtnWhite.defaulProps = {
    buttonLabel: 'button',
    isActive: false
}
