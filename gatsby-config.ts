import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://sivonpearson.github.io/portfolio-site/`,
  },
  pathPrefix: "/portfolio-site",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100, // Adjust for fixed headers
        duration: 500, // Smooth scrolling duration
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`, // Path to your images folder
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:300`, // Add the font weights you need
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sivon Pearson's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#faf3e8`,
        theme_color: `#faf3e8`,
        display: `minimal-ui`,
        cache_busting_mode: `query`,
        icon: `src/icons/favicon512.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static`, // Copies PDFs to /public/static/
              ignoreFileExtensions: [], // Ensures PDFs are copied
            },
          },
        ],
      },
    },
  ],
};

export default config;
