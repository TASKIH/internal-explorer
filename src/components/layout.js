/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

import Header from "./header"
import "./layout.css"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
const GetAnimation = () => {
  const val = getRandomInt(0, 6);
  switch (val) {
    case 0:
      return "Star";
    case 1:
      return "shrink";
    case 2:
      return "rotate";
    case 3:
      return "shake";
    case 4:
      return "jump";
  }
  return "cry";
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [flare, setFlare] = useState(null);

  useEffect(() => {
    import("flare-react")
      .then((flare) => {
        setFlare(flare);
      })
      .catch((error) => console.error(error));
  },[])
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          {flare && (
            <flare className="medjged" style={{position: `fixed`, bottom: 0, right: 0}} width={300} height={300} animationName={GetAnimation()} file={withPrefix('/medjed.flr')}/>
          )}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
