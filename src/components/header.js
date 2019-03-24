import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css';

const partiallyActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ` active` : ``),
})

const PartiallyActiveLink = ({ className, ...rest }) => (
  <Link getProps={partiallyActive(className)} {...rest} />
)

const Header = ({ siteTitle }) => (
  <header>
    <Link activeClassName="active" className="header-link" to="/">
      Principal
    </Link>
    <PartiallyActiveLink activeClassName="active" className="header-link" to="/blog">
      Blog
    </PartiallyActiveLink>
    <Link activeClassName="active" className="header-link" to="/contact">
      Contacto
    </Link>
    <Link activeClassName="active" className="header-link" to="/portfolio">
      Portafolio
    </Link>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
