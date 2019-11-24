import styled from "styled-components";
import { color, media, box } from "@styles";

const ArticleCardStyled = {
  root: styled.div.attrs({
    title: props => props.title,
  })`
    width: 100%;
    height: 100%;
    min-height: 30rem;
    position: relative;
    perspective: 150rem;
    cursor: pointer;
  `,

  cardSide: styled.div`
    padding: 2rem;
    background-color: ${color.white};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    box-shadow: ${box.boxShadowOne};
    transition: all 0.8s ease;
    transform: rotateY(${props => (props.side === "back" ? "180deg" : "0deg")});

    @media (min-width: 48em) {
      ${props => props.trigger}:hover & {
        transform: rotateY(
          ${props => (props.side === "back" ? "0deg" : "-180deg")}
        );
      }
    }

    ${media.phone`
      ${props =>
        props.rotated
          ? `
          ${props => props.trigger}:hover & {
            transform: rotateY(${props.side === "back" ? "0deg" : "-180deg"});
          }
        `
          : ""}
      `}
  `,

  cardImage: styled.div`
    height: 75%;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & img {
      flex-shrink: 0;
      max-height: 100%;
    }
  `,

  postTitle: styled.h1`
    font-family: "Permanent Marker", cursive;
    text-align: center;
    margin-top: 1rem;

    ${media.desk`
    font-size:1.6rem;
  `}
  `,

  PostInfo: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & h1 {
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 1.6rem;
    }

    & p {
      font-size: 1.3rem;
      line-height: 1.5;
      color: ${color.greySix};
    }
  `,

  postMeta: styled.div`
    display: flex;
    justify-content: space-between;
    color: ${color.greySix};
    font-size: 1.5rem;
  `,

  author: styled.div`
    display: flex;
    align-items: center;

    & a {
      display: inline-block;
      color: ${color.greySix};
    }
  `,

  authorImage: styled.div`
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    position: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20rem;
    margin-right: 1rem;

    & img {
      height: 100%;
    }
  `,

  timeToRead: styled.div`
    display: flex;
    align-items: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: ${color.greySix};
      margin-right: 1rem;
    }
  `,
};

export default ArticleCardStyled;
