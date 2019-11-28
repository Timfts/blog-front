import { graphql, useStaticQuery } from "gatsby";

function HomeHeaderData() {
  return useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
}

export default HomeHeaderData;
