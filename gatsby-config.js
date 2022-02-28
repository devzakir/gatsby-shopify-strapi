require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        apiKey: process.env.SHOPIFY_API_KEY,
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        shopifyConnections: ["collections"],
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};
