require("dotenv").config();

const {
  TS_API_ENDPOINT,
  TS_PROJECT_ID,
  TS_AUTH_TOKEN
} = process.env;

module.exports = {
  siteMetadata: {
    title: "Shape Portfolio"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Shape Portfolio",
        short_name: "portfolio",
        start_url: "/",
        background_color: "#5439D2",
        theme_color: "#5EDEB3",
        display: "minimal-ui",
        icon: "src/images/takeshape-icon.png"
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        url: `${TS_API_ENDPOINT}/project/${TS_PROJECT_ID}/graphql`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TS_AUTH_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    "gatsby-plugin-offline"
  ]
};
