import React from 'react'
import Navbar from '../navbar'
import HTMLIcon from '../../../images/html.png'
import JavaScriptIcon from '../../../images/javascript.png'
import ReactIcon from '../../../images/reactjs.png'
import CSSIcon from '../../../images/css.png'
import NodeIcon from '../../../images/nodejs.png'
import PostgreSQLIcon from '../../../images/postgresql.png'
import SQLIcon from '../../../images/sql.png'
import Angular2 from '../../../images/angular.jpeg'

class SkillsContainer extends React.Component {
  render() {
    return (
      <div className="skills-icon">
        <h1> Languages: </h1>
        <img src={ HTMLIcon }/>
        <img src={ JavaScriptIcon }/>
        <img src={ CSSIcon }/>
        <h1> Libraries/Frameworks:</h1>
        <img src={ NodeIcon }/>
        <img src={ ReactIcon }/>
        <img src={ PostgreSQLIcon }/>
        <img src={ SQLIcon }/>
        <img src={ Angular2 } className="angular"/>
      </div>
    )
  }
}

export default SkillsContainer
