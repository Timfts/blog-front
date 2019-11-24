import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import HomeHeaderStyled from './home-header.styled';


const HomeHeader = ({ data }) => (
  <HomeHeaderStyled.root>
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
            <HomeHeaderStyled.imageOverlay />
            <HomeHeaderStyled.salutPane>
              Random words to represent something
            </HomeHeaderStyled.salutPane>
          </>
        )
      }}
    />
  </HomeHeaderStyled.root>
)

export default HomeHeader;


