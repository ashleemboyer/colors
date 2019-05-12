import React from "react"
import { graphql } from "gatsby"

import Layout, { get_text_color } from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  var edges = data.allSitePage.edges;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {
        edges.map(({ node }) => {
          if (node && node.context && node.context.name) {
            var bgColor;
            for (var i in node.context.tones) {
              if (node.context.tones[i].tone === '500') {
                bgColor = node.context.tones[i].default;
              }
            }
            return <div style={{ display: 'inline-block' }}>
              <a
                style={{
                  width: '200px',
                  height: '200px',
                  lineHeight: '200px',
                  verticalAlign: 'middle',
                  backgroundColor: bgColor,
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: get_text_color(bgColor),
                  margin: '4px',
                  borderRadius: '4px',
                }}
                href={node.context.name}
              >
                {node.context.name}
              </a>
            </div>
          }
        })
      }
    </Layout>
  )
}

export const query  = graphql`
  query {
    allSitePage {
      edges {
        node {
          context {
            name
            tones {
              tone
              default
            }
          }
        }
      }
    }
  }
`
