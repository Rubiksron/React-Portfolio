import React from 'react'
import Footer from '../footer'
import WestOfTheRockies from '../../../images/West-of-the-Rockies.png'
import Wattle from '../../../images/wattle-dot-io.png'
import Portfolio from '../../../images/portfolio-img.png'

class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className='portfolio-container'>
        <hr/>
        <a href="https://github.com/grello-project"><img src={ Wattle } className="wattle"/><br/>Wattle/Grello Github Repo</a><br/>
        <p>When assigned a task in google docs, one might have to scroll through a 100+ page document to find their task, Grello will take you to the very line in the document that your task was assigned.  This is software that is to be implemented with google.docs, so one cannot visit Grello online, however the README.md on the backend has flowcharts and further explanation of how Grello works.</p>
        <hr/>

        <a href="https://rubiksron.github.io/West-of-the-Rockies/"><img src= { WestOfTheRockies } className="west-of-the-rockies"/><br/>West of the Rockies</a><br/>
        <a href="https://github.com/Rubiksron/West-of-the-Rockies"> Github Repo </a>
        <p>This is a text based game much like a 'choose your own adventure' book, where the user can travel to each of the states West of the Rockies.  Once you arrive you will be welcomed with a state motto or a suggested sight to see.  The front end uses Angular2 design patterns and CSS for styling and JavaScript for logic.</p>
        <hr/>

        <a><img src={ Portfolio } className="portfolio-image"/></a><br/>
        <a href="https://github.com/Rubiksron/React-Portfolio">This Portfolio's Github Repo</a>
        <p>This Portfolio is built with a react.js frontend, using JavaScript for logic.</p>
        <hr/>

        <h1>Coming Soon...</h1>
        <div className="coming-soon"></div><br/>
        <p>Working on an app to help developers find each other.</p>
        <hr/>
      </div>
    )
  }
}

export default PortfolioContainer
