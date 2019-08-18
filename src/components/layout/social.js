import React from 'react';
import styled from 'styled-components';
import { color, mixins, media } from '@styles'

const SocialContainer = styled.div`
    background-color:${color.greyOne};
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:5.5rem;
    padding-top:20vh;
    ${mixins.flexCenter}
    z-index:5;

    ${media.phone`
        display:none;
    `}
`;

const SocialIcons = styled.div`
    ${mixins.flexColumn}
    justify-content:center;
    position:relative;

    &::before,
    &::after {
        width:.4rem;
        height:10rem;
        background-color:${color.creamOne};
        content:"";
        position:absolute;
    }

    &::before {
        top:-12rem;
    }

    &::after {
        bottom:-12rem;
    }
`;

const SocialIcon = styled.a`
    display:inline-block;
    margin:1rem 0;

    & svg {
        fill:${color.creamOne};
        transition:all .5s;

        &:hover {
            fill:${color.redDark};
        }
    }
`;

const socialBar = () => (
    <SocialContainer>
        <SocialIcons>
            <SocialIcon href="https://instagram.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M2 1C1.448 1 1 1.448 1 2V22C1 22.552 1.448 23 2 23H22C22.552 23 23 22.552 23 22V2C23 1.448 22.552 1 22 1H2ZM3 3H21V21H3V3ZM16.989 11.223C16.839 10.251 16.418 9.366 15.795 8.656C15.412 8.219 14.953 7.848 14.433 7.564C13.93 7.289 13.372 7.099 12.786 7.012C12.322 6.938 11.816 6.935 11.309 7.01C10.641 7.109 10.021 7.337 9.473 7.665C8.904 8.006 8.414 8.454 8.027 8.977C7.64 9.5 7.353 10.1 7.192 10.743C7.037 11.363 6.999 12.022 7.098 12.69C7.197 13.358 7.425 13.978 7.753 14.526C8.094 15.095 8.542 15.585 9.065 15.972C9.588 16.359 10.187 16.646 10.83 16.808C11.45 16.963 12.109 17.001 12.777 16.902C13.445 16.803 14.065 16.575 14.613 16.247C15.182 15.906 15.672 15.458 16.059 14.935C16.446 14.412 16.733 13.813 16.895 13.17C17.05 12.55 17.088 11.891 16.989 11.223ZM15.011 11.517C15.071 11.921 15.048 12.315 14.955 12.685C14.859 13.07 14.687 13.429 14.453 13.744C14.219 14.059 13.925 14.328 13.585 14.532C13.258 14.728 12.887 14.865 12.484 14.925C12.081 14.985 11.686 14.962 11.316 14.869C10.931 14.773 10.572 14.601 10.257 14.367C9.942 14.133 9.673 13.839 9.469 13.499C9.273 13.172 9.136 12.801 9.076 12.398C9.016 11.995 9.039 11.6 9.132 11.23C9.228 10.845 9.4 10.486 9.634 10.171C9.868 9.856 10.162 9.587 10.502 9.383C10.829 9.187 11.2 9.05 11.603 8.99C11.916 8.944 12.218 8.948 12.473 8.988C12.843 9.043 13.177 9.158 13.476 9.321C13.786 9.49 14.061 9.712 14.291 9.975C14.666 10.403 14.921 10.938 15.011 11.518V11.517ZM18.5 6.5C18.5 5.948 18.052 5.5 17.5 5.5C16.948 5.5 16.5 5.948 16.5 6.5C16.5 7.052 16.948 7.5 17.5 7.5C18.052 7.5 18.5 7.052 18.5 6.5Z" />
                </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M20.833 5.262C20.647 5.504 20.442 5.737 20.217 5.958C19.984 6.19 19.87 6.525 19.939 6.866C19.976 7.048 19.999 7.27 20 7.5C20 8.905 19.826 10.197 19.51 11.371C19.218 12.456 18.803 13.443 18.288 14.329C17.269 16.083 15.851 17.452 14.19 18.398C13.337 18.884 12.418 19.26 11.455 19.518C10.451 19.787 9.39897 19.928 8.32197 19.934C7.22097 19.94 6.09497 19.804 4.96897 19.518C6.21497 19.157 7.42897 18.596 8.56197 17.828C8.70897 17.729 8.83497 17.585 8.91397 17.407C9.13797 16.902 8.91097 16.311 8.40597 16.087C6.96797 15.448 5.91897 14.687 5.15497 13.882C4.43497 13.124 3.95197 12.312 3.63697 11.493C3.45197 11.012 3.32397 10.526 3.24097 10.044C3.13597 9.438 3.10297 8.838 3.11797 8.266C3.13897 7.455 3.25597 6.706 3.39597 6.084C3.78897 6.427 4.19797 6.79 4.62997 7.122C5.67197 7.923 6.84997 8.551 8.12097 8.965C9.34997 9.365 10.665 9.565 12.026 9.53C12.567 9.515 13 9.073 13 8.53V7.519C12.998 7.34 13.009 7.162 13.034 6.985C13.092 6.574 13.222 6.175 13.421 5.807C13.613 5.453 13.871 5.126 14.195 4.844C14.552 4.533 14.952 4.31 15.372 4.169C15.808 4.023 16.267 3.966 16.721 3.998C17.175 4.03 17.621 4.149 18.033 4.355C18.429 4.552 18.794 4.829 19.105 5.186C19.357 5.472 19.754 5.602 20.138 5.49C20.369 5.423 20.601 5.347 20.833 5.262ZM22.424 2.183C21.684 2.705 20.901 3.109 20.137 3.388C19.766 3.055 19.358 2.78 18.926 2.565C18.276 2.241 17.573 2.053 16.861 2.003C16.149 1.953 15.427 2.042 14.738 2.273C14.074 2.495 13.443 2.849 12.884 3.335C12.377 3.776 11.969 4.292 11.664 4.853C11.348 5.435 11.144 6.064 11.054 6.707C11.017 6.972 10.999 7.24 11 7.507C10.217 7.449 9.46097 7.298 8.73997 7.063C7.68997 6.721 6.71397 6.202 5.84897 5.537C5.07397 4.941 4.38797 4.228 3.81597 3.421C3.49597 2.971 2.87197 2.865 2.42097 3.184C2.26797 3.293 2.15397 3.438 2.08597 3.594C2.06897 3.633 1.71897 4.426 1.44397 5.644C1.28197 6.366 1.14297 7.247 1.11797 8.215C1.10097 8.899 1.13997 9.631 1.26997 10.384C1.37297 10.984 1.53497 11.598 1.77097 12.211C2.17497 13.262 2.79497 14.301 3.70497 15.259C4.31397 15.9 5.04497 16.497 5.91697 17.034C5.40597 17.271 4.88297 17.463 4.35497 17.613C3.26097 17.923 2.14097 18.049 1.04397 18.001C0.491974 17.977 0.0249736 18.404 0.000973618 18.956C-0.0160264 19.345 0.190974 19.692 0.513974 19.874C3.04297 21.279 5.73497 21.947 8.33297 21.933C9.57797 21.926 10.801 21.763 11.973 21.449C13.098 21.148 14.176 20.708 15.181 20.135C17.141 19.018 18.817 17.399 20.018 15.333C20.623 14.292 21.105 13.142 21.442 11.891C21.805 10.538 22 9.071 22 7.5C21.999 7.333 21.992 7.17 21.977 7.011C22.983 5.896 23.653 4.582 23.973 3.23C24.1 2.693 23.767 2.154 23.23 2.027C22.94 1.958 22.65 2.024 22.423 2.183H22.424Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M21.5628 6.637C21.8498 8.166 22.0108 9.932 21.9998 11.762C22.0188 13.29 21.8768 15.029 21.5628 16.783C21.5058 16.991 21.4128 17.186 21.2908 17.358C21.1748 17.522 21.0318 17.665 20.8678 17.781C20.7088 17.893 20.5288 17.981 20.3418 18.034C20.2408 18.061 20.0898 18.091 19.8848 18.122C19.6588 18.156 19.3888 18.188 19.0828 18.217C18.3318 18.288 17.4058 18.339 16.4648 18.375C15.7228 18.403 14.9798 18.422 14.3178 18.435C13.7878 18.445 13.3108 18.451 12.9288 18.455C12.3548 18.46 11.9998 18.46 11.9998 18.46C11.9998 18.46 11.6448 18.46 11.0718 18.455C10.6898 18.451 10.2128 18.445 9.68277 18.435C9.02077 18.422 8.27677 18.403 7.53577 18.375C6.59477 18.339 5.66877 18.288 4.91777 18.217C4.61077 18.188 4.34077 18.156 4.11577 18.122C3.91077 18.091 3.76077 18.061 3.66977 18.037C3.46477 17.98 3.27377 17.889 3.10377 17.769C2.93977 17.653 2.79577 17.511 2.67977 17.347C2.57477 17.199 2.49077 17.031 2.43377 16.846C2.14777 15.32 1.98877 13.56 1.99977 11.736C1.97877 10.196 2.12077 8.444 2.43677 6.676C2.49377 6.468 2.58677 6.273 2.70877 6.101C2.82477 5.937 2.96777 5.794 3.13177 5.678C3.29077 5.566 3.47077 5.478 3.65777 5.425C3.75877 5.398 3.90977 5.368 4.11477 5.337C4.34077 5.303 4.61077 5.271 4.91677 5.242C5.66777 5.171 6.59377 5.12 7.53477 5.084C8.27677 5.056 9.01977 5.037 9.68177 5.024C11.0088 5 11.9998 5 11.9998 5C11.9998 5 12.9918 5 14.3178 5.023C14.9808 5.035 15.7238 5.052 16.4658 5.078C17.4098 5.111 18.3398 5.158 19.0948 5.223C19.4018 5.249 19.6728 5.278 19.8998 5.31C20.1048 5.338 20.2578 5.366 20.3218 5.381C20.5408 5.444 20.7428 5.546 20.9198 5.68C21.0798 5.801 21.2188 5.948 21.3288 6.115C21.4318 6.27 21.5118 6.445 21.5628 6.637ZM23.5098 6.177C23.4038 5.752 23.2288 5.361 22.9978 5.012C22.7598 4.652 22.4638 4.34 22.1268 4.085C21.7538 3.803 21.3308 3.591 20.8778 3.46C20.6398 3.401 20.4128 3.362 20.1738 3.329C19.9018 3.291 19.5948 3.259 19.2668 3.231C18.4628 3.162 17.4928 3.114 16.5358 3.08C15.7788 3.054 15.0228 3.036 14.3528 3.024C13.0108 3 11.9998 3 11.9998 3C11.9998 3 11.6328 3 11.0518 3.006C10.6648 3.01 10.1808 3.016 9.64377 3.026C8.97277 3.039 8.21577 3.058 7.45777 3.087C6.50277 3.124 5.53477 3.176 4.72977 3.252C4.39977 3.283 4.09077 3.319 3.81577 3.36C3.57477 3.397 3.34277 3.44 3.14177 3.494C2.70677 3.617 2.31977 3.804 1.97877 4.045C1.62577 4.294 1.32277 4.599 1.07777 4.944C0.807773 5.325 0.608773 5.755 0.490773 6.212C0.484773 6.236 0.479773 6.261 0.475773 6.283C0.132773 8.181 -0.023227 10.076 -0.000227043 11.764C-0.012227 13.688 0.160773 15.595 0.476773 17.266C0.482773 17.297 0.489773 17.328 0.497773 17.354C0.617773 17.775 0.805773 18.161 1.04777 18.503C1.29777 18.856 1.60377 19.158 1.94977 19.402C2.30677 19.654 2.70677 19.844 3.13077 19.963C3.34277 20.02 3.57477 20.063 3.81677 20.1C4.09077 20.141 4.40077 20.177 4.72977 20.208C5.53477 20.284 6.50377 20.336 7.45877 20.373C8.21677 20.402 8.97277 20.421 9.64477 20.434C10.9878 20.46 11.9998 20.46 11.9998 20.46C11.9998 20.46 13.0118 20.46 14.3558 20.434C15.0268 20.421 15.7838 20.402 16.5418 20.373C17.4968 20.336 18.4658 20.284 19.2708 20.208C19.6008 20.177 19.9098 20.141 20.1838 20.1C20.4248 20.064 20.6568 20.02 20.8588 19.966C21.2938 19.843 21.6798 19.656 22.0218 19.415C22.3748 19.166 22.6778 18.861 22.9218 18.516C23.1918 18.135 23.3918 17.705 23.5088 17.248C23.5148 17.223 23.5208 17.198 23.5238 17.177C23.8638 15.293 24.0198 13.412 23.9998 11.737C24.0118 9.812 23.8388 7.904 23.5228 6.233C23.5188 6.213 23.5148 6.193 23.5108 6.176L23.5098 6.177ZM10.7498 13.301V10.199L13.4768 11.75L10.7498 13.301ZM10.2438 15.889L15.9938 12.619C16.4738 12.346 16.6418 11.735 16.3688 11.255C16.2758 11.091 16.1428 10.963 15.9938 10.88L10.2438 7.61C9.76377 7.337 9.15277 7.505 8.87977 7.985C8.78977 8.143 8.74777 8.315 8.74877 8.479V15.019C8.74877 15.571 9.19677 16.019 9.74877 16.019C9.93077 16.019 10.1008 15.97 10.2428 15.888L10.2438 15.889Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="24" height="24" />
                        </clipPath>
                    </defs>
                </svg>
            </SocialIcon>
        </SocialIcons>
    </SocialContainer>
);

export default socialBar;
