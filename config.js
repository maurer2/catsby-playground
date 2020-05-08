const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.gatsbyjs.org',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'logo',
    logoLink: 'logoLink',
    title: 'title',
    githubUrl: 'github',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{
      text: '',
      link: '',
    }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'text', link: 'https://www.gatsbyjs.org' }],
    frontline: false,
    ignoreIndex: true,
    title: 'title',
  },
  siteMetadata: {
    title: 'title',
    description: 'description',
    ogImage: null,
    docsLocation: 'docsLocation',
    favicon: 'favicon',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
  },
};

module.exports = config;
