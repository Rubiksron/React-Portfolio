import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioWorking from '../../../images/portfolio-working.jpeg'
import DashRon from '../../../images/dashboard-ron.jpg'

class DashboardContainer extends React.Component {
  render(){
    return (
      <div className='dashboard-container'>
        <img src={ DashRon } className="dash-ron"/>
        <p className="bio">
          Javascript developer always on the lookout for the next big challenge. I can solve a rubik’s cube in 15 seconds and algorithmic problem solving is in my blood. Aside from years of teaching other nerds how to Speed-Cube by selling custom DVD’s and giving tailored lessons, I’ve camped and hiked my way around the Pacific Northwest. Although a native Washingtonian, I’ve lived across the United States in Alaska, North Carolina, and Los Angeles. A puzzle-solver by nature, I excel at efficiency and adaptability.
        </p>
        <Link to='/portfolio'><div className="link-to-portfolio"></div></Link>
        <Link to='/about'><div className="link-to-about"></div></Link>
      </div>
    )
  }
}

export default DashboardContainer
