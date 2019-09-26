import React, { useState } from "react";
import ProTypes from "prop-types";
import {
  CardContainer,
  CardSide,
  CardImage,
  PostTitle,
} from "./article-card.styled";

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
      <CardSide side="back">
        back
      </CardSide>
    </CardContainer>
  );
};

ArticleCard.proTypes = {
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
