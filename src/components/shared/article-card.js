import React, { useState } from "react";
import styled from "styled-components";
import ProTypes from "prop-types";
import { color, media, box } from "@styles";

const CardContainer = styled.div.attrs({
  title: props => props.title
})`
  width: 100%;
  height: 100%;
  min-height: 30rem;
  position: relative;
  perspective: 150rem;
  cursor: pointer;
`;

const CardSide = styled.div`
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

const CardImage = styled.div`
  height: 75%;
  background-color: grey;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;

  &  img {
    flex-shrink:0;
    max-height:100%;
  }
`;

const PostTitle = styled.h1`
  font-family: "Permanent Marker", cursive;
  text-align: center;
  margin-top: 10px;
`;

const ArticleCard = ({ post }) => {

  function trimCardTitle(postTitle) {
    return postTitle.length > 47 ? `${postTitle.slice(0, 47)}...` : postTitle;
  }

  return (
    <CardContainer title={post.title}>
      <CardSide side="front">
        <CardImage>
          <img src={post.feature_image} />
        </CardImage>
        <PostTitle>{trimCardTitle(post.title)}</PostTitle>
      </CardSide>
      <CardSide side="back">back</CardSide>
    </CardContainer>
  );
};

ArticleCard.proTypes = {
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
