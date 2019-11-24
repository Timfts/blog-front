import styled from "styled-components";
import { color, mixins, media } from "@styles";

const HomeHeaderStyled = {
  root: styled.header`
    height: 40rem;
    width: 100%;
    background-color: red;
    overflow: hidden;
    position: relative;

    ${media.phone`
      height:30rem;
    `}
  `,

  salutPane: styled.div`
    position: absolute;
    padding:2.5rem 1rem;
    top: 8rem;
    left:50%;
    transform:translateX(-50%);
    background-color:${color.greyOne};
    border:.7rem solid ${color.creamOne};
    ${mixins.flexCenter}
    color:${color.creamOne};
    text-align:center;
    font-size:4rem;
    width:75%;
    
    ${media.tabPort`
        width:90%;
        font-size:2.5rem;
    `}
    `,

  imageOverlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
};

export default HomeHeaderStyled;
