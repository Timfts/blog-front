import React, { useState } from "react";
import ProTypes from "prop-types";
import {
  CardContainer,
  CardSide,
  CardImage,
  PostTitle,
  PostInfo,
  PostMeta,
  Author,
  AuthorImage,
  TimeToRead,
} from "./article-card.styled";
import { getScreenBreakpoint } from "../../helpers";
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const ArticleCard = ({ post }) => {
  const screenType = getScreenBreakpoint();
  const readingTime = readingTimeHelper(post);
  console.log(readingTime);
  const [rotated, setRotated] = useState(false);

  function trimCardTitle(postTitle) {
    return postTitle.length > 47 ? `${postTitle.slice(0, 47)}...` : postTitle;
  }

  function rotateCard() {
    if (screenType === "phone" || screenType === "tab-port") {
      setRotated(true);
    }
  }

  return (
    <CardContainer title={post.title}>
      <CardSide side="front" onClick={rotateCard} rotated={rotated}>
        <CardImage>
          <img src={post.feature_image} />
        </CardImage>
        <PostTitle>{trimCardTitle(post.title)}</PostTitle>
      </CardSide>
      <CardSide side="back" rotated={rotated}>
        <PostInfo>
          <div>
            <h1>{trimCardTitle(post.title)}</h1>
            <p>{post.excerpt}</p>
          </div>
          <PostMeta>
            <Author>
              <AuthorImage>
                <img src={post.authors[0].profile_image} />
              </AuthorImage>
              <a href="#">{post.authors[0].name}</a>
            </Author>
            <TimeToRead>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M9 7v-3h-2v5h4v-2zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"></path>
              </svg>
              <span>{readingTime}</span>
            </TimeToRead>
          </PostMeta>
        </PostInfo>
      </CardSide>
    </CardContainer>
  );
};

ArticleCard.proTypes = {
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
