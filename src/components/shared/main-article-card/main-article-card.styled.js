import styled from "styled-components";
import { color, media, box } from "@styles";

const MainArticleCardStyled = {
  Root: styled.a.attrs(props => ({
    href: "#",
  }))`
    background-color: ${color.white};
    box-shadow: ${box.boxShadowOne};
    padding: 3.5rem;
    display: flex;

    &:hover {
      transform: translate3D(0, -1px, 0) scale(1.02);
      transition: all 0.4s ease;
    }

    ${media.tabPort`
            flex-direction:column;
          `}
    ${media.phone`
            padding:2rem;
            `}
  `,

  ImageContainer: styled.div`
    flex: 1;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: ${box.boxShadowOne};

    ${media.tabPort`
    flex:auto;
    margin-bottom:1rem;
    `}
  `,

  LastPostImage: styled.img.attrs(props => ({
    src: props.source,
  }))`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  `,

  PostContent: styled.div`
    flex: 1;
    padding-left: 3.5rem;

    ${media.tabPort`
    padding-left:0;
    `}
  `,

  PostTitle: styled.h1`
    text-transform: capitalize;
    font-size: 3rem;

    ${media.tabPort`
    font-size:2rem;
  `}
  `,

  PostInfo: styled.span`
    color: ${color.greySix};
    display: block;
    ${media.tabPort`
    font-size:1.4rem;
  `}
  `,

  PostExcerpt: styled.p`
    color: ${color.greyFive};
    display: inline-block;
    margin-top: 3rem;
    line-height: 1.5;

    ${media.tabPort`
    font-size:1.5rem;
    margin-top:2rem;
  `}
  `,
};

export default MainArticleCardStyled;
