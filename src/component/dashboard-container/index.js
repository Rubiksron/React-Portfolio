import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioWorking from '../../../images/portfolio-working.jpeg'
import DashRon from '../../../images/dashboard-ron.jpg'
import SayHello from '../pure-component'

class DashboardContainer extends React.Component {
  render(){
    return (
      <div className='dashboard-container'>
        <div id="round-ron-main"><img src={ DashRon } className="dash-ron" alt="picture-of-ron" /></div>
        <div className="bio">
          <p>I am a Javascript developer always on the lookout for the next big challenge. I can solve a rubik’s cube in 15 seconds and algorithmic problem solving is in my blood. I currently work as a Lead Instructor for Code Fellows coding academy in downtown Seattle, developing and teaching course curriculum for the advanced full-stack JavaScript certificate that focuses on responsive website and app development. As an instructor I build and adapt scalable full-stack curriculum, teach students important career skills such as project management and team building, and work directly with each student to build and debug projects.  
          </p>
          <p>
          Aside from years of teaching other people how to Speed-Cube by selling custom DVD’s and giving tailored lessons, I’ve camped and hiked my way around the Pacific Northwest. Although a native Washingtonian, I’ve lived across the United States in Alaska, North Carolina, and Los Angeles. A puzzle-solver by nature, I excel at efficiency and adaptability.
          </p>
        </div>
        <Link to='/portfolio'><div className="link-to-portfolio"></div></Link>
        <Link to='/about'><div className="link-to-about"></div></Link>
      </div>
    )
  }
}

export default DashboardContainer
