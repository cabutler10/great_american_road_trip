import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>

    <p>
      <Link to="/blog/">Go Blog</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
