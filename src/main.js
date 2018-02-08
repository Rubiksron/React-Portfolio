import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style/main.scss'

import AboutContainer from './component/about-container'
import DashboardContainer from './component/dashboard-container'
import PortfolioContainer from './component/portfolio-container'
import ContactContainer from './component/contact-container'

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = {
    }

    this.getApp = this.getApp.bind(this)
  }

  //hooks
  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  //methods
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  //render
  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/'
                component={ () => <DashboardContainer app={ this.getApp() } /> } />
              <Route exact path='/about'
                component={ AboutContainer } />
              <Route exact path='/portfolio'
                component={ PortfolioContainer } />
              <Route exact path='/contact'
                component={ ContactContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

// identical statements
//<DashboardContainer app={this.getApp()} />
//new DashboardContainer({app: this.getApp()})

ReactDom.render(<App />, document.getElementById('root'))
