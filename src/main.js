import React from 'react'
import ReactDom from 'react-dom'
import { MemoryRouter, Route } from 'react-router-dom'
import AppContainer from './component/app-container'

class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <main className='app'>
          <AppContainer />
        </main>
      </MemoryRouter>

    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
