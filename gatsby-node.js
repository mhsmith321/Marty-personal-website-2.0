const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    // perform a graphql query and deconstruct data from it
    const {data} = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)
    
    // deconstruct nodes data from graphql query data
    const {nodes} = data.allMarkdownRemark;

    // iterate through nodes
    nodes.forEach(node => {
        // deconstruct slug from each node
        const {slug} = node.frontmatter;
        // create a page using the slug to make a pathway and pass slug to page to get the rest of the data
        actions.createPage({
            path: '/projects/' + slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: {slug: slug}
        });
    });
}