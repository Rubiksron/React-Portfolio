import React from 'react'
import ReactDom from 'react-dom'
import Footer from './component/footer'
import Router from './component/router-container'

class App extends React.Component {
  render() {
    return (
      <main className='app'>
      <Router />
      <Footer />
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
