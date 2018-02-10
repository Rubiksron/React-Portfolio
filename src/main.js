import React from 'react'
import ReactDom from 'react-dom'
import './style/main.scss'
import { MemoryRouter, Route } from 'react-router-dom'
import AboutContainer from './component/about-container'
import DashboardContainer from './component/dashboard-container'
import PortfolioContainer from './component/portfolio-container'
import ContactContainer from './component/contact-container'
import Footer from './component/footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: '',
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  render() {
    return (
      <main className='app'>
        <MemoryRouter>
          <div>
              <Route exact path='/'
                component={ DashboardContainer } />
              <Route exact path='/about'
                component={ AboutContainer } />
              <Route exact path='/portfolio'
                component={ PortfolioContainer } />
              <Route exact path='/contact'
                component={ ContactContainer} />
          </div>
        </MemoryRouter>
      <Footer />
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
