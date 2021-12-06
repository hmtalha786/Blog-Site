require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Gatsby Firebase Authentication`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "gt2z1iv64oav",
        accessToken: "R-fyDGrqZI76UGL8tUqh9Nc3sq79GWwyR6eVd3X7X_8",
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAfiR2zp-OiGIFoQa3sTo17uuenRR1a8Ko",
          authDomain: "gatsbyblog-c485e.firebaseapp.com",
          projectId: "gatsbyblog-c485e",
          storageBucket: "gatsbyblog-c485e.appspot.com",
          messagingSenderId: "642232804722",
          appId: "1:642232804722:web:80d74603823077c1dae9eb",
          measurementId: "G-ZTZLCGLNHB",
        },
      },
    },
  ],
};
