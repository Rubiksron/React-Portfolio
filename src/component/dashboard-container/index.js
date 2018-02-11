import React from 'react'
import Navbar from '../navbar'
import Skills from '../skills'

class DashboardContainer extends React.Component {
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
