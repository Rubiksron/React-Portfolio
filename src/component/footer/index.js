import React from 'react'
import Facebook from '../../../images/facebook.png'
import Github from '../../../images/github-blue.png'
import LinkedIn from '../../../images/linkedin.png'
import Email from '../../../images/email-blue.png'
import Twitter from '../../../images/twitter.png'

class FooterContainer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/Rubiksron"><img src={ Github } className="footer-icon" /></a>
        <a href="https://www.linkedin.com/in/rondunphy/"><img src={ LinkedIn } className="footer-icon" /></a>
        <a href="mailto:rubiksron@gmail.com"><img src={ Email } className="footer-icon" /></a>
        <a href="https://www.facebook.com/ron.dunphy.10"><img src={ Facebook } className="footer-icon" /></a>
        <a href="https://twitter.com/RonDunphy"><img src={ Twitter } className="footer-icon" /></a>

        <p> &copy; Ron Dunphy 2018 </p>
      </footer>
    )
  }
}

export default FooterContainer
