import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface MarkdownTemplateProps {
  markdownRemark: {
    html: string
    frontmatter: {
      title?: string
    }
  }
}

const Markdown: React.FC<PageProps<MarkdownTemplateProps>> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout title={post.frontmatter.title}>
      <SEO title="邓清的个人简历" />
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Markdown

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
