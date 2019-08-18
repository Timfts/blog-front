import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color, media, box } from "@styles";

const LastPost = styled.a.attrs(props => ({
    href:"#"
}))`
  background-color: ${color.white};
  box-shadow: ${box.boxShadowOne};
  padding: 3.5rem;
  display: flex;

  &:hover {
    transform: translate3D(0,-1px,0) scale(1.02);
    transition: all .4s ease;
  }
`;

const ImageContainer = styled.div`
  background-color: blue;
  flex: 1;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: ${box.boxShadowOne};
`;

const LastPostImage = styled.img.attrs({
  src: props => props.source,
})`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
`;

const PostContent = styled.div`
  flex: 1;
  padding-left:3.5rem;
`;

const PostTitle = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
`;

const PostInfo = styled.span`
    color:${color.greySix};
`;

const PostExcerpt = styled.p`
    color:${color.greyFive};
    display:inline-block;
    margin-top:3rem;
    line-height:2.48rem;
`;

const MainArticleCard = ({ post }) => {
  return (
    <LastPost>
      <ImageContainer>
        <LastPostImage source={post.feature_image} />
      </ImageContainer>
      <PostContent>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>{post.published_at} by {post.authors[0].name}</PostInfo>
        <PostExcerpt>{post.excerpt}</PostExcerpt>
      </PostContent>
    </LastPost>
  );
};

MainArticleCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MainArticleCard;
