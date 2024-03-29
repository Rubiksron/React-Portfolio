import React from 'react'

class AboutContainer extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/vwn7_02kVSY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>I want to build software that will change peoples lives for the better. Previously, I was a well-known performer of Rubik’s Cube speed-cubing feats, averaging just 15 seconds to solve a Rubik’s cube from any orientation. It may seem a surprising past, but my experience draws on a decade of dedication to algorithmic problem-solving. I’m able to easily adapt to changes and I'm quick to learn new languages. My ability to perceive patterns and algorithms has transitioned into a curiosity and passion for data structures and CPU efficiency. </p>
        <p>In the clip below I'm entertaining an audience in Pike Place Market by hula hooping and solving a Rubik's Cube with one hand while spinning a book on the other.</p>
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/PQWMOGJi63o" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    )
  }
}

export default AboutContainer
