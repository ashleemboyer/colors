import React from "react"
import Layout, { get_text_color } from "../components/layout"

export default ({ data }) => {
  var color = data.allSitePage.edges[0].node.context;
  return (
    <Layout>
      <h2 style={{ marginBottom: '24px' }}>{color.name}</h2>
      <div>{
        color.tones.map(tone => {
          return (
            <div style={{ textAlign: 'center' }}>
              <div class="block" style={{ color: get_text_color(tone.light), backgroundColor: tone.light }}>
                <p>{tone.tone} // light</p>
                <p>{tone.light}</p>
              </div>
              
              <div class="block" style={{ color: get_text_color(tone.default), backgroundColor: tone.default }}>
                <p>{tone.tone} // default</p>
                <p>{tone.default}</p>
              </div>
  
              <div class="block" style={{ color: get_text_color(tone.dark), backgroundColor: tone.dark }}>
                <p>{tone.tone} // dark</p>
                <p>{tone.dark}</p>
              </div>
            </div>
          )
        })
      }</div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            tones {
              tone
              default
              light
              dark
            }
          }
        }
      }
    }
  }
`
