/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={title || data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: "25px 20px",
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer
          style={{ textAlign: "center", padding: "20px", color: "#5e709d" }}
        >
          © {new Date().getFullYear()}, 邓清
          {` `}
          <a
            style={{
              color: "#5e709d",
              // fontSize: "14px",
              marginRight: "12px",
              marginLeft: "12px",
              textDecoration: "none",
            }}
            href="https://github.com/1247748612"
          >
            github地址
          </a>
          <a
            style={{
              color: "#5e709d",
              marginRight: "12px",
              textDecoration: "none",
            }}
            href="https://github.com/1247748612"
          >
            项目地址
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
