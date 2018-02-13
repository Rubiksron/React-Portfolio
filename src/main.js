import React from 'react'
import ReactDom from 'react-dom'
import Footer from './component/footer'
import Router from './component/router-container' 
import { MemoryRouter, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import Skills from './component/skills'


class App extends React.Component {
  render() {
    return (

      <MemoryRouter>
        <main className='app'>
          <Navbar />
          <Router />
          <Skills />
          <Footer />
        </main>
      </MemoryRouter>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
