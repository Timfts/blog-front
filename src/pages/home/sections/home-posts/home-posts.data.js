import { graphql, useStaticQuery } from "gatsby";

function HomePostsData() {
  const { cardPosts } = useStaticQuery(graphql`
    query PostQuery {
      cardPosts: allGhostPost(
        limit: 13
        sort: { order: DESC, fields: [published_at] }
      ) {
        edges {
          node {
            title
            excerpt
            html
            feature_image
            slug
            authors {
              name
              profile_image
            }
            published_at(fromNow: true)
          }
        }
      }
    }
  `);

  return cardPosts.edges;
}

export default HomePostsData;
