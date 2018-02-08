import React from 'react'
import Navbar from '../navbar'
//The below is Duncan Marsh's function to avoid nested ternarys
let renderIf = (test, component) => test ? component : undefined

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
        <p> A Dashboard I am, with yams for eyes. </p>
      </div>
    )
  }
}

export default DashboardContainer
