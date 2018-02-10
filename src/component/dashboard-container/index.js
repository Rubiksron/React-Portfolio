import React from 'react'
import Navbar from '../navbar'

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
        <h1> Welcome! </h1>
      </div>
    )
  }
}

export default DashboardContainer
