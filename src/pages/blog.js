import React from "react"
import { Link, graphql } from "gatsby"
// eslint-disable-next-line
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

import './blog.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title="Blog – Andreas Leimbach"/>
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="post" key={post.id}>
                <h2 className="post-title">
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h2>
                <h3 className="post-date-author">Escrito en {post.frontmatter.date} por Andreas</h3>
                <p className="post-excerpt">{post.frontmatter.excerpt}</p>
              </div>
            )
          })}
      </div>    
    </Layout>
  )
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
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`