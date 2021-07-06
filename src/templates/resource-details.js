/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/resource-details.module.css';
/******* END: IMPORT LOCAL FILES *******/

export default function ResourceDetails({data}) {
    console.log(data);
    
    return (
        <Layout>
            <h1>This is a resource page!!!</h1>
        </Layout>
    );
}

export const query = graphql`
    query ResourceDetails {
        allMarkdownRemark(filter: {frontmatter: {subgroup: {eq: "web-development"}}}) {
            nodes {
                frontmatter {
                    title
                    url
                    pageTitle
                    squareImg {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                html
            }
        }
    }
`