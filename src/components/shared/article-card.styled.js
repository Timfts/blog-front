import styled from "styled-components";
import { color, media, box } from "@styles";

export const CardContainer = styled.div.attrs({
  title: props => props.title,
})`
  width: 100%;
  height: 100%;
  min-height: 30rem;
  position: relative;
  perspective: 150rem;
  cursor: pointer;
`;

export const CardSide = styled.div`
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

  ${CardContainer}:hover & {
    transform: rotateY(
      ${props => (props.side === "back" ? "0deg" : "-180deg")}
    );
  }
`;

export const CardImage = styled.div`
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
`;

export const PostTitle = styled.h1`
  font-family: "Permanent Marker", cursive;
  text-align: center;
  margin-top: 10px;
`;
