import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps<{}>> = ({ data }) => {
  return (
    <Layout title="项目介绍">
      <SEO title="邓清的个人简历" />
      <div>
        <ul style={{ marginLeft: "2rem", listStyle: "none" }}>
          <li>该项目是用gatsby实现的</li>
          <li>简历部分是采用mdnice编写排版</li>
          <li>暂时该项目只展示简历，可能后续会展示其他东西。</li>
          <li>
            <Link to="/resume">查看简历</Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
