module.exports = {
  pathPrefix: "/yoomoney.github.io",
  siteMetadata: {
    siteUrl: "https://opensource.yoomoney.ru/",
    title: "YooMoney GitHub Landing",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // Needed for dynamic images
    "gatsby-plugin-styled-components"
  ],
};
