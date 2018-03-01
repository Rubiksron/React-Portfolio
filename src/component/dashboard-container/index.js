import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioWorking from '../../../images/portfolio-working.jpeg'
import DashRon from '../../../images/dashboard-ron.jpg'

class DashboardContainer extends React.Component {
  render(){
    return (
      <div className='dashboard-container'>
        <img src={ DashRon } className="dash-ron"/>
        <Link to='/portfolio'><div className="link-to-portfolio"><p className="dash-links">Portfolio</p></div></Link>
        <Link to='/about'><div className="link-to-about"><p className="dash-links">About</p></div></Link>
      </div>
    )
  }
}

export default DashboardContainer
