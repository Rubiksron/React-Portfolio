import React from 'react'
import ReactDom from 'react-dom'
import { MemoryRouter, Route } from 'react-router-dom'
import './style/main.scss'

import AboutContainer from './component/about-container'
import DashboardContainer from './component/dashboard-container'
import PortfolioContainer from './component/portfolio-container'
import ContactContainer from './component/contact-container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
