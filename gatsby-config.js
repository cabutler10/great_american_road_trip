module.exports = {
  siteMetadata: {
    title: "Great Road Trip",
    description: `Jeanne's Great American Road Trip`,
    author: `ca.butler10@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jeannes great american road trip`,
        short_name: `jeannes-blog`,
        start_url: `/`,
        background_color: `#763242`,
        theme_color: `#763242`,
        display: `minimal-ui`,
        icon: `src/images/car.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r874uku99f4o`,
        accessToken: "FAJJ4Du0Xo3OAKzUnlDYE2y5iRM6yJZ9KcE2uHLgVA4",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1789485453`,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-top-layout",
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Raleway`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
  ],
}
