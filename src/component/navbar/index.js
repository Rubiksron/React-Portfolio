import React from 'react'
import { Link } from 'react-router-dom'
import JSHeroImage from '../../../images/JavaScript-hero-image.png'

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${JSHeroImage})`
};

class Navbar extends React.Component {
  render() {
    return (
      <header style={ sectionStyle }>
        <h3 className="name">
          Ron Dunphy
        </h3>
        <nav>
          <ul>
            <li> <Link to='/'> Dashboard </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/portfolio'> Portfolio </Link> </li>
            <li> <Link to='/contact'> Contact </Link> </li>
          </ul>
        </nav>
        <img src={ JSHeroImage } className="JavaScriptHero" />
      </header>
    )
  }
}

export default Navbar
