const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title:
    "Documentation d'intégration de la solution de paiement fractionné Pledg",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "pledgcorporate/ecard-doc",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsRepo: "pledgcorporate/ecard-doc",
    docsDir: "docs",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Modules",
        link: "/modules/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "quickstart", "dashboard"],
        },
      ],
      "/modules/": [
        {
          title: "Modules",
          collapsable: false,
          children: [
            "",
            "magento-2",
            "prestashop-16",
            "prestashop-17",
            "woocommerce",
          ],
        },
      ],
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
      sitemap: {
        hostname: "https://docs.pledg.co",
      },
    },
    ["vuepress-plugin-code-copy", true],
  ],
};
