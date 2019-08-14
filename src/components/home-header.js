import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { color, mixins, media } from "@styles";

const HeaderContainer = styled.header`
  height:40rem;
  width:100%;
  background-color:red;
  overflow: hidden;
  position:relative;

  ${media.phone`
    height:30rem;
  `}
`;

const SalutPane = styled.div`
  position: absolute;
  padding:2.5rem 1rem;
  top: 8rem;
  left:50%;
  transform:translateX(-50%);
  background-color:${color.greyOne};
  border:.7rem solid ${color.creamOne};
  ${mixins.flexCenter}
  color:${color.creamOne};
  text-align:center;
  font-size:4rem;
  width:75%;
  
  ${media.tabPort`
      width:90%;
      font-size:2.5rem;
  `}
`;

const HeaderImageOverlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,.5);
`;


const HomeHeader = ({ data }) => (
  <HeaderContainer>
    <StaticQuery
      query={graphql`
      query {
        headerImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data => {
        return (
          <>
            <Img fluid={data.headerImage.childImageSharp.fluid} style={{ width: '100%', height: '100%' }} />
            <HeaderImageOverlay />
            <SalutPane>
              Random words to represent something
            </SalutPane>
          </>
        )
      }}
    />
  </HeaderContainer>
)

export default HomeHeader;


