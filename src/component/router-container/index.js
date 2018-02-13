import React from 'react'
import ReactDom from 'react-dom'
import '../../style/main.scss'
import { MemoryRouter, Route } from 'react-router-dom'
import AboutContainer from '../../component/about-container'
import DashboardContainer from '../../component/dashboard-container'
import PortfolioContainer from '../../component/portfolio-container'

class RouterContainer extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <div>
          <Route exact path='/'
          component={ DashboardContainer } />
          <Route exact path='/about'
          component={ AboutContainer } />
          <Route exact path='/portfolio'
          component={ PortfolioContainer } />
        </div>
      </MemoryRouter>
    )
  }
}

export default RouterContainer
