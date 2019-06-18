import { createGlobalStyle } from 'styled-components';
import typography from './typography';


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
    }

    ${typography}
`;


export default GlobalStyle;


