import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image'


const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
