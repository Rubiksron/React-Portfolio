import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import WestOfTheRockies from '../../../images/West-of-the-Rockies.png'
import Campfire from '../../../images/campfire-coffee.png'
import Wattle from '../../../images/wattle-dot-io.png'

class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className='portfolio-container'>
        <Navbar />

        <a href="https://github.com/grello-project"><img src={ Wattle } className="wattle"/>Wattle/Grello Repo</a>
        <p>When assigning a task in google docs, one might have to scroll through a 100+ page document to find their task, but with Grello tasks are imported into the app where they can be further categorized into more detailed buckets.  And with the touch of a button Grello will take you to the very line in the document that your task was assigned.  This is software that is to be implemented with google.docs so one cannot visit Grello online, however the README.md on the backend has charts and flowcharts and further explanation of how Grello works.</p>


        <a href="https://rubiksron.github.io/West-of-the-Rockies/"><img src= { WestOfTheRockies } className="west-of-the-rockies"/>West of the Rockies</a><br/>
        <a href="https://github.com/Rubiksron/West-of-the-Rockies"> Github Repo </a>
        <p>This is a text based game, much like a 'choose your own adventure' book, where the user can travel to each of the states West of the Rockies.  Once you arrive you will be welcomed with a state motto or a suggested sight to see.</p>


        <a href="http://rubiksron.github.io/campfire-coffee/"><img src={ Campfire } className="campfire" />Campfire Coffee</a><br/>
        <a href="https://github.com/Rubiksron/campfire-coffee"> Github Repo </a>
        <p>This Coffee speciality site has a section that will assist in calculating future needs of store locations based upon the number of customers that visit on average.</p>

        <a href="https://github.com/Rubiksron/React-Portfolio">This Portfolio's Repo</a>

        <h1>Coming Soon...</h1>
        <p> This site can see time in reverse all the way back to your infancy!</p>
      </div>
    )
  }
}

export default PortfolioContainer
