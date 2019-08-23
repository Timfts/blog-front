import React from "react";
import styled from "styled-components";
import ProTypes from "prop-types";
import { color, media, box } from "@styles";


const ArticleCard = ({  post }) => {

    return <div>regular post</div>;
  
};

ArticleCard.proTypes = {
  main: ProTypes.bool,
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
