/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            textAlign: 'center',
          }}
        >
          <main>{children}</main>
          <footer style={{ marginTop: '100px' }}>
            © {new Date().getFullYear()}, Built by
            {' '}
            <a href="https://twitter.com/ashleemboyer">Ashlee</a>
            {' '}
            with
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

/**
 * 
 * https://stackoverflow.com/a/3943023
 * 
 */
export function get_text_color(hex_color) {
  var red_hex = hex_color.substring(1, 3);
  var green_hex = hex_color.substring(3, 5);
  var blue_hex = hex_color.substring(5, 7);

  var red = parseInt(red_hex, 16) / 255.0;
  if (red <= 0.03928) {
    red = red / 12.92;
  } else {
    red = Math.pow(((red + 0.055) / 1.055), 2.4);
  }

  var green = parseInt(green_hex, 16) / 255.0;
  if (green <= 0.03928) {
    green = green / 12.92;
  } else {
    green = Math.pow(((green + 0.055) / 1.055), 2.4);
  }

  var blue = parseInt(blue_hex, 16) / 255.0;
  if (blue <= 0.03928) {
    blue = blue / 12.92;
  } else {
    blue = Math.pow(((blue + 0.055) / 1.055), 2.4);
  }

  var luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  if (luminance > 0.179) {
    return '#000000';
  } else {
    return '#ffffff';
  }
};

export default Layout
