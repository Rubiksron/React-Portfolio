import React from 'react'
import ReactDom from 'react-dom'
import Navbar from '../navbar'
import Router from '../router-container'
import Skills from '../skills'
import Footer from '../footer'

class AppContainer extends React.Component {
  render() {
    return (
      <main className='app-container'>
        <Navbar />
        <Router />
        <Skills />
        <Footer />
      </main>
    )
  }
}

export default AppContainer
