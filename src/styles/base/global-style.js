import { createGlobalStyle } from 'styled-components';
import typography from './typography';
import { color } from '../abstract/theme';




const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        box-sizing:inherit;
        margin:0;
        padding:0;
    }

    html {
        font-size:62.25%;
    }

    body {
        box-sizing: border-box;
        background-color:${color.creamThree};
        padding:20vh 0 0 6rem;
    }

    ${typography}
`;


export default GlobalStyle;