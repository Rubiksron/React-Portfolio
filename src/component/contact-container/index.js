import React from 'react'
import Navbar from '../navbar'

class ContactContainer extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <Navbar />
        <p> Here is my contact information: </p>
        <a href="https://www.facebook.com/ron.dunphy.10"> facebook </a>
        <a href="https://github.com/Rubiksron"> github </a>
        <a href="https://www.linkedin.com/in/rondunphy/"> linkedIn </a>
        <a href="mailto:rubiksron@gmail.com"> email </a>
      </div>
    )
  }
}

export default ContactContainer
