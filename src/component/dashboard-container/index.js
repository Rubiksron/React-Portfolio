// npm modules
import React from 'react'
// // app modules
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

  //render
  render(){
    return (
      <div className='dashboard-container'>
        <p> A Dashboard I am </p>
        <Navbar />
      </div>
    )
  }
}

export default DashboardContainer
