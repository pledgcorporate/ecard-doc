const { description } = require("../../package");

module.exports = {
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
      title: "Intégration du paiement en plusieurs fois Pledg",
      description: 'Intégration simple avec notre plugin et nos modules CMS'
    },
    '/en/': {
      lang: 'en-GB',
      title: 'Integration of Pledg buy now pay later solution',
      description: 'Easy integration of buy now pay later with our plugin and CMS modules'
    }
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    displayAllHeaders: true,
    repo: "pledgcorporate/ecard-doc",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsRepo: "pledgcorporate/ecard-doc",
    docsDir: "docs",
    lastUpdated: true,
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        // text for the language dropdown
        selectText: 'Langues',
        // label for this locale in the language dropdown
        label: 'Français',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Langues',
        // text for the edit-on-github link
        editLinkText: 'Editez sur GitHub',
        nav: [
          {
            text: "Guide",
            link: "/guide/",
          },
          {
            text: "Plugin",
            link: "/plugin/",
          },      
          {
            text: "Modules",
            link: "/modules/",
          },
        ],
        sidebar: [
          "/",
          {
            title: "Guide",
            collapsable: true,
            children: [
              "/guide/",
              "/guide/quickstart",
              "/guide/payment-link"],
          },
          {
            title: "Plugin",
            collapsable: true,
            children: [
              "/plugin/",
              "/plugin/integration",
            ],
          },
          {
            title: "Modules",
            collapsable: true,
            children: [
              "/modules/",
              "/modules/magento-2",
              "/modules/prestashop-16",
              "/modules/prestashop-17",
              "/modules/woocommerce",
            ],
          },
        ],
        algolia: {
          apiKey: '3bd06682cc4110749630ba525d6de897',
          indexName: 'pledg',
          algoliaOptions: { 'facetFilters': ["lang:fr-FR"] }
        },               
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: "Guide",
            link: "../guide/",
          },
          {
            text: "Plugin",
            link: "../plugin/",
          },      
          {
            text: "Modules",
            link: "../modules/",
          },
        ],
        sidebar: 'auto',
        algolia: {
          apiKey: '3bd06682cc4110749630ba525d6de897',
          indexName: 'pledg',
          algoliaOptions: { 'facetFilters': ["lang:en-GB"] }
        }
      }
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/google-analytics",
    {
      ga: "", // UA-00000000-0
    },
    {
      "sitemap": {
        hostname: "https://docs.pledg.co",
      },
    },
    ["vuepress-plugin-code-copy", true],
  ],
};
