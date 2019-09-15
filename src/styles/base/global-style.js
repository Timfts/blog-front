import { createGlobalStyle } from 'styled-components';
import typography from './typography';
import { color } from '../abstract/theme';
import { media } from '../abstract/response';




const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        box-sizing:inherit;
        margin:0;
        padding:0;
        scrollbar-color: ${color.redDark} transparent;
        scrollbar-width: thin;
    }

    html {
        font-size:62.25%;

        ${media.tabLand`
            font-size:56.25%;
        `}
        ${media.tabPort`
            font-size:50%;
        `}
    }

    body {
        box-sizing: border-box;
        background-color:${color.creamThree};
        overflow:hidden;
    }

    ::-webkit-scrollbar {
        box-sizing: border-box;
        width:10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color:${color.redDark};
        border:2px solid transparent;
        border-radius: 200px;
        background-clip: padding-box;
    }


    ${typography}
`;


export default GlobalStyle;