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
      </div>
    )
  }
}

export default DashboardContainer
