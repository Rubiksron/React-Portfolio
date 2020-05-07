import React from 'react'
import Navbar from '../navbar'
import HTMLIcon from '../../../images/html5.png'
import JavaScriptIcon from '../../../images/JavaScriptClassic.png'
import ReactIcon from '../../../images/react.png'
import CSSIcon from '../../../images/css.png'
import NodeIcon from '../../../images/node.png'
import Angular2 from '../../../images/angular.png'
import CSharpIcon from '../../../images/CSharpIcon.jpeg'
import SQL from '../../../images/sql.png'
import JQuery from '../../../images/jquery.png'
import Express from '../../../images/Express-icon.png'
import EJS from '../../../images/EJS.png'
import Bcrypt from '../../../images/bcrypt.jpg'

class SkillsContainer extends React.Component {
  render() {
    return (
      <div className="skills-icon">
        <h1> Languages: </h1>
        <img src={ JavaScriptIcon } alt="javascript" className="javascript" />
        <img src={ CSharpIcon } className="csharpicon" alt="csharp" />
        <img src={ HTMLIcon } alt="html" className="html5" />
        <img src={ CSSIcon } alt="css" className="css" />
        <img src={ SQL } alt="tsql" className="sql" />
        <h1> Libraries/Frameworks:</h1>
        <img src={ NodeIcon } className="node" alt="node.js" />
        <img src={ ReactIcon } className="react" alt="react.js" />
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
