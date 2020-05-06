import React from 'react'
import Footer from '../footer'
import WestOfTheRockies from '../../../images/West-of-the-Rockies.png'
import Wattle from '../../../images/wattle-dot-io.png'
import Portfolio from '../../../images/portfolio-img.png'
import Wordtwist from '../../../images/wordtwist.png'
import ChoreBear from '../../../images/chore-bear.png'

class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className='portfolio-container'>

        <hr/>
        <a href="https://chorebear.herokuapp.com/"><img src={ ChoreBear } className="chore-bear"/><br/>Chore Bear</a><br/>
        <a href="https://github.com/Rubiksron/memo">Github</a>
        <p>   Chore Bear lets you add and delete chores on this main page by selecting which category of chore, then adding the chore itself. You can scroll down and see your chores in this main view or you can click the 'chore stores' button (top-right) and see each chore type by itself, where you can also add and delete chores. When you're done with a chore click the 'x' to remove the item, and move down the line until all of your chores are done!
        Chore Bear is built with JavaScript for logic and EJS for server-side rendering.
        </p>
        <hr/>

        <a href="https://chrome.google.com/webstore/search/wordtwist_wizard"><img src={ Wordtwist } className="wordtwist-image"/></a><br/>
        <a href="https://github.com/Rubiksron/wordtwist_wizard">Github</a>
        <p>This is a Google extension that will search for wordtwist gameboards with at least 140 ultra rare words.  You can open a few tabs set to search while you make yourself lunch, and when you return wordtwist wizard will have done the work for you.</p>
        <hr/>

        <a href="https://github.com/Rubiksron/React-Portfolio"><img src={ Portfolio } className="portfolio-image"/></a><br/>
        <a href="https://github.com/Rubiksron/React-Portfolio">Github</a>
        <p>This Portfolio is built with a React.js frontend, using JavaScript for logic, and webpack to configure loaders.</p>
        <hr/>

        <a href="https://rubiksron.github.io/West-of-the-Rockies/"><img src= { WestOfTheRockies } className="west-of-the-rockies"/><br/>West of the Rockies</a><br/>
        <a href="https://github.com/Rubiksron/West-of-the-Rockies"> Github </a>
        <p>This is a text based game much like a 'choose your own adventure' book, where the user can travel to each of the states West of the Rockies.  Once you arrive you will be welcomed with a state motto or a suggested sight to see.  The front end uses Angular2 design patterns and CSS for styling and JavaScript for logic.</p>
        <hr/>

        <a href="https://github.com/grello-project"><img src={ Wattle } className="wattle"/><br/>Wattle/Grello Github</a><br/>
        <p>When assigned a task in google docs, one might have to scroll through a 100+ page document to find their task, Grello will take you to the very line in the document that your task was assigned.  The README.md on the backend has flowcharts and further explanation of how Grello works.</p>
        <hr/>

      </div>
    )
  }
}

export default PortfolioContainer
