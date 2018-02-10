import React from 'react'
import Navbar from '../navbar'
import HTMLIcon from '../../../images/html.png'
import NodeIcon from '../../../images/nodejs.png'
import ReactIcon from '../../../images/reactjs.png'
import CSSIcon from '../../../images/css.png'

class SkillsContainer extends React.Component {
  render() {
    return (
      <div className="skills-icon">
        <h1> Technical Skills: </h1>
        <img src={ HTMLIcon }/>
        <img src={ NodeIcon }/>
        <img src={ ReactIcon }/>
        <img src={ CSSIcon }/>
      </div>
    )
  }
}

export default SkillsContainer
