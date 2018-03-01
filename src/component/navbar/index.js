import React from 'react'
import { Link } from 'react-router-dom'
// import JSHeroImage from '../../../images/';

class Navbar extends React.Component {
  render() {
    return (
      <header className="header-section-style">
        <h3 className="name">Ron Dunphy</h3>
          <ul>
            <li> <Link to='/'><p className="navbar-icon">Dashboard</p></Link> </li>
            <li> <Link to='/about'><p className="navbar-icon">About</p></Link> </li>
            <li> <Link to='/portfolio'><p className="navbar-icon">Portfolio</p></Link> </li>
          </ul>
      </header>
    )
  }
}

export default Navbar
