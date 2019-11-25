import React from "react";
import PropTypes from "prop-types";
import MainArticleCardStyled from "./main-article-card.styled";


const MainArticleCard = ({ post }) => {
  return (
    <MainArticleCardStyled.Root>
      <MainArticleCardStyled.ImageContainer>
        <MainArticleCardStyled.LastPostImage source={post.feature_image} />
      </MainArticleCardStyled.ImageContainer>
      <MainArticleCardStyled.PostContent>
        <MainArticleCardStyled.PostTitle>
          {post.title}
        </MainArticleCardStyled.PostTitle>
        <MainArticleCardStyled.PostInfo>
          {post.published_at} by {post.authors[0].name}
        </MainArticleCardStyled.PostInfo>
        <MainArticleCardStyled.PostExcerpt>
          {post.excerpt}
        </MainArticleCardStyled.PostExcerpt>
      </MainArticleCardStyled.PostContent>
    </MainArticleCardStyled.Root>
  );
};

MainArticleCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MainArticleCard;
