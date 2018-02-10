import React from 'react'
import Navbar from '../navbar'
import Skills from '../skills'
import Footer from '../footer'

class DashboardContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showErrors: true,
    }
  }
  render(){
    return (
      <div className='dashboard-container'>
        <Navbar />
        <Skills />
      </div>
    )
  }
}

export default DashboardContainer
