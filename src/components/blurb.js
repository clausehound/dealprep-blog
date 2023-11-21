/**
 * Blurb component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { createElement as h } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Blurb = () => {
  const data = useStaticQuery(graphql`
    query BlurbQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const { description } = data.site.siteMetadata

  return h("div", { className: "blurb" }, h("p", null, description))
}

export default Blurb
