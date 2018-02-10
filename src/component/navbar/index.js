import React from 'react'
import { Link } from 'react-router-dom'
import JSHero from '../../../images/JavaScript-hero-image.png'

class Navbar extends React.Component {

  render() {
    return (
      <header>
        <img src={ JSHero } className="JavaScriptHero" />
        <h3> Ron Dunphy </h3>
        <nav>
          <ul>
              <li> <Link to='/'> Dashboard </Link> </li>
              <li> <Link to='/about'> About </Link> </li>
              <li> <Link to='/portfolio'> Portfolio </Link> </li>
              <li> <Link to='/contact'> Contact </Link> </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
