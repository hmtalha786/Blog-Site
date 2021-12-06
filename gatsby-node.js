const path = require("path");
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const graphQLResult = await graphql(`
    {
      allContentfulGatsbyBlogs {
        nodes {
          title
          blogMedia {
            file {
              url
            }
          }
          blogDescription {
            raw
          }
          authorDescription
          authorName
        }
      }
    }
  `);
  graphQLResult.data.allContentfulGatsbyBlogs.nodes.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.title}`,
      component: path.resolve("./src/Template/blog.tsx"),
      context: {
        blogData: blog,
      },
    });
  });
};
