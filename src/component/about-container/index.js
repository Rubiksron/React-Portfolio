import React from 'react'
import Navbar from '../navbar'

class AboutContainer extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <Navbar />
        <p> Here are a few words about myself...</p>
      </div>
    )
  }
}

export default AboutContainer
