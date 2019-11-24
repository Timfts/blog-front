import React from "react";
import PropTypes from "prop-types";
import MainArticleCardStyled from "./main-article-card.styled";


const MainArticleCard = ({ post }) => {
  return (
    <MainArticleCardStyled.root>
      <MainArticleCardStyled.imageContainer>
        <MainArticleCardStyled.lastPostImage source={post.feature_image} />
      </MainArticleCardStyled.imageContainer>
      <MainArticleCardStyled.postContent>
        <MainArticleCardStyled.postTitle>
          {post.title}
        </MainArticleCardStyled.postTitle>
        <MainArticleCardStyled.postInfo>
          {post.published_at} by {post.authors[0].name}
        </MainArticleCardStyled.postInfo>
        <MainArticleCardStyled.postExcerpt>
          {post.excerpt}
        </MainArticleCardStyled.postExcerpt>
      </MainArticleCardStyled.postContent>
    </MainArticleCardStyled.root>
  );
};

MainArticleCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MainArticleCard;
