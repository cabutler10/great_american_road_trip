import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Container from "../components/Container"
import Blog from "../components/blog/Blog"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              excerpt {
                excerpt
              }
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Blog" />
      <Hero />

      <Container className={classes.container}>
        <Blog posts={data.allContentfulBlogPost.edges} />
        {/*        
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="post" key={edge.node.id}>
                <h2>
                  <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
                </h2>
                <div className="meta">
                  <span>Posted on {edge.node.publishedDate}</span>
                </div>
                {edge.node.featuredImage && (
                  <GatsbyImage
                    image={getImage(edge.node.featuredImage.fluid)}
                    alt={edge.node.title}
                  />
                )}
                <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
                </p>
                <div className="button">
                  <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
                </div>
              </li>
            )
          })}
        </ul> */}
      </Container>
    </Layout>
  )
}

export default IndexPage
