import { css } from 'styled-components'

const screenSizes = {
    giant: 1440,
    bigDesk: 1200,
    desk: 1000,
    tab: 768,
    phone: 600
}


/* 
    it will build an object with the breakpoints as properties.
    each property/breakpoint holds a function that takes the css to be 
    aplied on a specific viewport as paramenter, and returns it 
    encapsulated in the respective media query
    
*/

export const media = Object.keys(breakpoints).reduce(acc, bkpName => {
    // convert the current breakpoint value from px to em
    const emSize = screenSizes[bpkName] / 16;

    acc[label] = (...args) => css`
        @media (max-width: ${emSize}em){
            ${css(...args)}
        }
    `;
    return acc;
}, {});