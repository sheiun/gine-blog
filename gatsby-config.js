module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/2818e2353e8f44d282bc34cb00fd4eea"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/6b1628ab5d544065bf53b13c85dc4be2"
            }
        }
    ],
}
