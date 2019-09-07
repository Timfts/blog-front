import { css } from 'styled-components';
import { color } from '../abstract/theme';

const typography = css`
    body {
        font-size: 1.6rem;
        font-family:Bitter;
        color:${color.greyFive};
    }

    a {
        color:${color.red};
        text-decoration:none;
        /* if necessary put in the theme */
        transition:all .2s;

        &:hover {
            color: ${color.redDark}
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family:Kanit;
        font-weight:600;
        color:${color.greyThree};
    }

    ul,ol {
        list-style:none;
    }
`;

export default typography;

