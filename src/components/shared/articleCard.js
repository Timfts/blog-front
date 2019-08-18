import React from "react";
import styled from "styled-components";
import ProTypes from "prop-types";
import { color, media, box } from "@styles";
import Img from "gatsby-image";

const LastPost = styled.div`
  background-color: ${color.white};
  box-shadow: ${box.boxShadowOne};
  padding: 3rem;
  display: flex;
`;

const LastPostImage = styled.img.attrs({
    src: props => props.source
})`
  width:40%;
  display: block;
`;

const ArticleCard = ({ main, post }) => {
    console.log(post);
  if (main) {
    return (
      <LastPost>
        <LastPostImage source={post.feature_image} />
      </LastPost>
    );
  } else {
    return <div>regular post</div>;
  }
};

ArticleCard.proTypes = {
  main: ProTypes.bool,
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
