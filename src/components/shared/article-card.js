import React, { useState } from "react";
import { navigate } from "gatsby";
import ProTypes from "prop-types";
import ArticleCardStyled from "./article-card.styled";
import { getScreenBreakpoint } from "../../helpers";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const ArticleCard = ({ post }) => {
  const screenType = getScreenBreakpoint();
  const readingTime = readingTimeHelper(post);
  const [rotated, setRotated] = useState(false);

  function trimCardTitle(postTitle) {
    return postTitle.length > 47 ? `${postTitle.slice(0, 47)}...` : postTitle;
  }

  function rotateCard() {
    if (screenType === "phone" || screenType === "tab-port") {
      setRotated(true);
    }
  }

  function openPost() {
    navigate(`${post.slug}`);
  }

  return (
    <ArticleCardStyled.root title={post.title}>
      <ArticleCardStyled.cardSide
        side="front"
        onClick={rotateCard}
        rotated={rotated}
        trigger={ArticleCardStyled.root}
      >
        <ArticleCardStyled.cardImage>
          <img src={post.feature_image} />
        </ArticleCardStyled.cardImage>
        <ArticleCardStyled.postTitle>
          {trimCardTitle(post.title)}
        </ArticleCardStyled.postTitle>
      </ArticleCardStyled.cardSide>
      <ArticleCardStyled.cardSide
        side="back"
        rotated={rotated}
        onClick={openPost}
        trigger={ArticleCardStyled.root}
      >
        <ArticleCardStyled.PostInfo>
          <div>
            <h1>{trimCardTitle(post.title)}</h1>
            <p>{post.excerpt}</p>
          </div>
          <ArticleCardStyled.postMeta>
            <ArticleCardStyled.author>
              <ArticleCardStyled.authorImage>
                <img src={post.authors[0].profile_image} />
              </ArticleCardStyled.authorImage>
              <a href="#">{post.authors[0].name}</a>
            </ArticleCardStyled.author>
            <ArticleCardStyled.timeToRead>
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
            </ArticleCardStyled.timeToRead>
          </ArticleCardStyled.postMeta>
        </ArticleCardStyled.PostInfo>
      </ArticleCardStyled.cardSide>
    </ArticleCardStyled.root>
  );
};

ArticleCard.proTypes = {
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
