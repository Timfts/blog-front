import * as fonts from './fonts';
import { css } from 'styled-components';

const typography = css`
    @font-face {
        font-family: 'Bitter';
        src: url(${fonts.BitterBoldEot});
        src: url(${fonts.BitterBoldWoff2}) format('woff2'),
        url(${fonts.BitterBoldWoff}) format('woff'),
        url(${fonts.BitterBoldTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Bitter';
        src: url(${fonts.BitterItalicEot});
        src: url(${fonts.BitterItalicWoff2}) format('woff2'),
        url(${fonts.BitterItalicWoff}) format('woff'),
        url(${fonts.BitterItalicTtf}) format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'Bitter';
        src: url(${fonts.BitterItalicEot});
        src: url(${fonts.BitterItalicWoff2}) format('woff2'),
        url(${fonts.BitterItalicWoff}) format('woff'),
        url(${fonts.BitterItalicTtf}) format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: 'Bitter';
        src: url(${fonts.BitterRegularEot});
        src: url(${fonts.BitterRegularWoff2}) format('woff2'),
        url(${fonts.BitterRegularWoff}) format('woff'),
        url(${fonts.BitterRegularTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Kanit';
        src: url(${fonts.KanitSemiBoldEot});
        src: url(${fonts.KanitSemiBoldWoff2}) format('woff2'),
        url(${fonts.KanitSemiBoldWoff}) format('woff'),
        url(${fonts.KanitSemiBoldTtf}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }

    body {
        font-size: 1.6rem;
        font-family:Bitter;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family:Kanit;
        font-weight:600;
    }
`;

export default typography;

