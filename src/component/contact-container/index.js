import React from 'react'
import Navbar from '../navbar'

class ContactContainer extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <Navbar />
        <p> Here is my contact information </p>
      </div>
    )
  }
}

export default ContactContainer
