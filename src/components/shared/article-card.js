import React, {useState} from "react";
import styled from "styled-components";
import ProTypes from "prop-types";
import { color, media, box } from "@styles";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 30rem;
  position:relative;
  perspective: 150rem;
  cursor:pointer;
`;

const CardSide = styled.div`
  padding: 2rem;
  background-color: ${color.white};
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  backface-visibility:hidden;
  box-shadow: 0px 7px 35px -9px rgba(0,0,0,0.75);
  transition:all .8s ease;
  transform:rotateY(${props => props.side === 'back' ? '180deg' : '0deg'});

  ${CardContainer}:hover & {
     transform:rotateY(${props => props.side === 'back' ? '0deg' : '-180deg'}); 
  } 

`;

const CardImage = styled.div`
  height: 75%;
  padding: 10px;
  background-color: grey;
`;

const PostTitle = styled.h1`
  font-family: "Permanent Marker", cursive;
  text-align: center;
  margin-top: 10px;

`;

const ArticleCard = ({ post }) => {

  const [rotate, setRotate] = useState(false);

  function rotateCard(){
    alert("teste");
  }

  return (
    <CardContainer>
      <CardSide side="front">
        <CardImage />
        <PostTitle>Algum post</PostTitle>
      </CardSide>
      <CardSide side="back">
        back
      </CardSide>
    </CardContainer>
  );
};

ArticleCard.proTypes = {
  main: ProTypes.bool,
  post: ProTypes.object.isRequired,
};

export default ArticleCard;
