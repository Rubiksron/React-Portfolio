import React from 'react'
import ReactDom from 'react-dom'
import Footer from './component/footer'
import Router from './component/router-container'
import Skills from './component/skills'
class App extends React.Component {
  render() {
    return (
      <main className='app'>
      <Router />
      <Skills />
      <Footer />
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
