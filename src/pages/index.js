import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .filter(post => post.node.frontmatter.published)
          .map(({ node: post }) => {
            return (
              <div className="post" key={post.id}>
                <h2 className="post-title">
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <h3 className="post-date-author">
                  Escrito por Andreas el {post.frontmatter.date} 
                </h3>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(
              formatString: "DD MMMM, YYYY",
              locale: "es-ES"
              )
            path
            published
          }
        }
      }
    }
  }
`;
