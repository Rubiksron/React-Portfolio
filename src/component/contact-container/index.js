import React from 'react'
import Navbar from '../navbar'
import Facebook from '../../../images/facebook.png'
import Github from '../../../images/github.png'
import LinkedIn from '../../../images/linkedin.png'
import Email from '../../../images/email.png'

class ContactContainer extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <Navbar />
        <a href="https://www.facebook.com/ron.dunphy.10"> <img src={ Facebook } className="contact-icon" /> </a>
        <a href="https://github.com/Rubiksron"> <img src={ Github } className="contact-icon" /> </a>
        <a href="https://www.linkedin.com/in/rondunphy/"> <img src={ LinkedIn } className="contact-icon" /> </a>
        <a href="mailto:rubiksron@gmail.com"> <img src={ Email } className="contact-icon" /> </a>
      </div>
    )
  }
}

export default ContactContainer
