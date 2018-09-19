import React from 'react'
import Navbar from '../navbar'
import HTMLIcon from '../../../images/html.png'
import JavaScriptIcon from '../../../images/javascript.png'
import ReactIcon from '../../../images/reactjs.png'
import CSSIcon from '../../../images/css.png'
import NodeIcon from '../../../images/nodejs.png'
import Angular2 from '../../../images/angular.jpeg'
import CSharpIcon from '../../../images/CSharpIcon.jpeg'
import Tsql from '../../../images/new_tsql_logo.png'

class SkillsContainer extends React.Component {
  render() {
    return (
      <div className="skills-icon">
        <h1> Languages: </h1>
        <img src={ HTMLIcon } alt="html" />
        <img src={ JavaScriptIcon } alt="javascript" />
        <img src={ CSharpIcon } className="csharpicon" alt="csharp" />
        <img src={ CSSIcon } alt="css" />
        <img src={ Tsql } alt="tsql" />
        <h1> Libraries/Frameworks:</h1>
        <img src={ NodeIcon } alt="node.js" />
        <img src={ ReactIcon } alt="react.js" />
        <img src={ Angular2 } className="angular" alt="angular2" />
      </div>
    )
  }
}

export default SkillsContainer
