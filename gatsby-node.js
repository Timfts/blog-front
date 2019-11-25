/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require('path');


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        //'@config': path.resolve(__dirname, 'src/config'),
        //'@content': path.resolve(__dirname, 'src/content'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@helpers': path.resolve(__dirname, 'src/helpers')
        //'@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};


/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
      {
          allGhostPost(sort: { order: ASC, fields: published_at }) {
              edges {
                  node {
                      slug
                  }
              }
          }
          allGhostTag(sort: { order: ASC, fields: name }) {
              edges {
                  node {
                      slug
                      url
                      postCount
                  }
              }
          }
          allGhostAuthor(sort: { order: ASC, fields: name }) {
              edges {
                  node {
                      slug
                      url
                      postCount
                  }
              }
          }
          allGhostPage(sort: { order: ASC, fields: published_at }) {
              edges {
                  node {
                      slug
                      url
                  }
              }
          }
          allGhostPage(sort: { order: ASC, fields: published_at }) {
              edges {
                  node {
                      slug
                      url
                  }
              }
          }
      }
  `)

  // Check for any errors
  if (result.errors) {
      throw new Error(result.errors)
  }

  // Extract query results
  const tags = result.data.allGhostTag.edges
  const authors = result.data.allGhostAuthor.edges
  const pages = result.data.allGhostPage.edges
  const posts = result.data.allGhostPost.edges

  // Load templates
  const postTemplate = path.resolve(`./src/templates/post.js`);

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/${node.slug}/`

    createPage({
        path: node.url,
        component: postTemplate,
        context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
        },
    })
})
}


