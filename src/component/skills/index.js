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
import JQuery from '../../../images/jquery.png'
import Express from '../../../images/Express-icon.png'
import EJS from '../../../images/EJS.png'
import Bcrypt from '../../../images/bcrypt.jpg'

class SkillsContainer extends React.Component {
  render() {
    return (
      <div className="skills-icon">
        <h1> Languages: </h1>
        <img src={ JavaScriptIcon } alt="javascript" />
        <img src={ CSharpIcon } className="csharpicon" alt="csharp" />
        <img src={ HTMLIcon } alt="html" />
        <img src={ CSSIcon } alt="css" />
        <img src={ Tsql } alt="tsql" />
        <h1> Libraries/Frameworks:</h1>
        <img src={ NodeIcon } alt="node.js" />
        <img src={ ReactIcon } alt="react.js" />
        <img src={ Angular2 } className="angular" alt="angular2" />
        <img src={ JQuery } className="jquery" alt="jquery" />
        <img src={ Bcrypt } className="bcrypt" alt="bcrypt" /><br/>
        <img src={ Express } className="express" alt="express" />
        <img src={ EJS } className="ejs" alt="ejs" />
      </div>
    )
  }
}

export default SkillsContainer
