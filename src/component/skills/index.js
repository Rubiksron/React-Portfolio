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
        <img src={ HTMLIcon } alt="html" />
        <img src={ JavaScriptIcon } alt="javascript" />
        <img src={ CSSIcon } alt="css" />
        <img src={ SQLIcon } alt="sql" />
        <h1> Libraries/Frameworks:</h1>
        <img src={ NodeIcon } alt="node.js" />
        <img src={ ReactIcon } alt="react.js" />
        <img src={ PostgreSQLIcon } alt="postgreSQL" />
        <img src={ Angular2 } className="angular" alt="angular2" />
      </div>
    )
  }
}

export default SkillsContainer
