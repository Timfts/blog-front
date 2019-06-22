import { createGlobalStyle } from 'styled-components';
import typography from './typography';
import { color } from '../abstract/theme';


const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        box-sizing:inherit;
    }

    html {
        font-size:62.25%;
    }

    body {
        box-sizing: box-shadow;
        background-color:${color.creamTwo};
    }

    ${typography}
`;


export default GlobalStyle;


