import styled from "styled-components";
import { color, mixins, media } from "@styles";

const SocialBarStyled = {
  Root: styled.div`
    background-color: ${color.greyOne};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 5.5rem;
    padding-top: 20vh;
    ${mixins.flexCenter}
    z-index:5;

    ${media.tabPort`
        display:none;
    `}
  `,

  Icons: styled.div`
    ${mixins.flexColumn}
    justify-content:center;
    position: relative;

    &::before,
    &::after {
      width: 0.4rem;
      height: 10rem;
      background-color: ${color.creamOne};
      content: "";
      position: absolute;
    }

    &::before {
      top: -12rem;
    }

    &::after {
      bottom: -12rem;
    }
  `,

  Icon: styled.a`
    display: inline-block;
    margin: 1rem 0;

    & svg {
      fill: ${color.creamOne};
      transition: all 0.5s;

      &:hover {
        fill: ${color.redDark};
      }
    }
  `,
};

export default SocialBarStyled;
