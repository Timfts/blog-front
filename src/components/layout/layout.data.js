import { graphql, useStaticQuery } from "gatsby";

function layoutData() {
  return useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
}

export default layoutData;
