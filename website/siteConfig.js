/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: 'react-placeholder-fallback', // Title for your website.
    tagline: 'Easily manage when to show placeholders and fallback ui',
    url: 'https://react-placeholder-fallback.netlify.com', // Your website URL
    baseUrl: '/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'react-placeholder-fallback',
    organizationName: 'weffe',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: 'getting-started', label: 'Docs' },
        { doc: 'api/placeholderfallback', label: 'API' },
        // { page: 'help', label: 'Help' },
        { blog: true, label: 'Blog' },
    ],

    /* path to images for header/footer */
    headerIcon: 'img/icons/icon-64x64-white.png',
    footerIcon: 'img/icons/icon-64x64-white.png',
    favicon: 'img/favicon.png',

    /* Colors for website */
    colors: {
        primaryColor: '#137CBD',
        secondaryColor: '#137CBD',
    },

    /* Custom fonts for website */
    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'tomorrow',
    },

    usePrism: true,

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/icons/icon-64x64-gray.png',
    twitterImage: 'img/icons/icon-64x64-gray.png',

    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/Weffe/react-placeholder-fallback',
};

module.exports = siteConfig;
