module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Photon",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Photon by HTML5 UP"
  },
  pathPrefix: "/buyclothes",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://madthread.us17.list-manage.com/subscribe/post?u=936000290ca667d12dd8f65c0&amp;id=1c653d046b' // see instructions section below
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-W6J2WNL'",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      },
    },
  ]
}
