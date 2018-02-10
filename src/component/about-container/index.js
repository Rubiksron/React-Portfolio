import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

class AboutContainer extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <Navbar />
        <p> I am a full-stack JavaScript developer. I want to build software that changes peoples lives. Previously, I was a well-known performer of Rubik’s Cube speed-cubing feats, averaging just 15 seconds to solve a Rubik’s cube from any orientation. It may seem a surprising past, but my experience draws on a decade of dedication to algorithmic problem-solving. I’m able to easily adapt to changes and I'm quick to learn new languages. My ability to perceive patterns and algorithms has transitioned into a curiosity and passion for data structures and CPU efficiency. </p>
      </div>
    )
  }
}

export default AboutContainer
