import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
  return (
    <navbar className="navbar bg-primary">
      <h1>{title}</h1>
    </navbar>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
