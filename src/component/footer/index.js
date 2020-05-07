import React from 'react'
import Github from '../../../images/github-cat.png'
import LinkedIn from '../../../images/linkedIn-icon.png'
import Email from '../../../images/email-blue.png'

class FooterContainer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/Rubiksron"><img src={ Github } className="footer-icon" /></a>
        <a href="mailto:rubiksron@gmail.com"><img src={ Email } className="footer-icon" /></a>
        <a href="https://www.linkedin.com/in/rondunphy/"><img src={ LinkedIn } className="footer-icon" /></a>
        <p> &copy; Ron Dunphy 2020 </p>
      </footer>
    )
  }
}

export default FooterContainer
