import React from "react";
import HomeHeaderData from "./home-header.data";
import HomeHeaderStyled from "./home-header.styled";
import Img from "gatsby-image";


const HomeHeader = () => {
  const data = HomeHeaderData();

  return (
    <HomeHeaderStyled.root>
      <Img
        fluid={data.headerImage.childImageSharp.fluid}
        style={{ width: "100%", height: "100%" }}
      />
      <HomeHeaderStyled.imageOverlay />
      <HomeHeaderStyled.salutPane>
        Random words to represent something
      </HomeHeaderStyled.salutPane>
    </HomeHeaderStyled.root>
  );
};

export default HomeHeader;
