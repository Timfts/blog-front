import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeaderContainer = styled.header`
  height:40rem;
  width:100%;
  background-color:red;
  overflow: hidden;
  position:relative;
`;

const HeaderImageOverlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,.5);
  z-index:5;
`;


const Header = ({ data }) => (
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
            <HeaderImageOverlay />
            <Img fluid={data.headerImage.childImageSharp.fluid} style={{ width: '100%', height: '100%' }} />
          </>
        )
      }}
    />
  </HeaderContainer>
)

export default Header;


