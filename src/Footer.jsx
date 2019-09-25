import React, { Component }from "react"
import axios from "axios"
import TechStackCard from  "./TechStackCard"

class Footer extends Component {
  componentDidMount() {
    axios.get('./src/data/techstack.json')
    .then(response => {
      this.setState({
        techstack: response.data
      })
    })
  }

  constructor() {
    super();
    this.state = {
      techstack : []
    };
  }

  render() {
    const techstack = this.state.techstack
    let techstackList

    if (techstack.length > 0) {
      techstackList = techstack.map(techstack => {
        return (
          <div key={techstack.id}>
            <img src={techstack.logo}></img>
              <TechStackCard techstack={techstack} />
            </div>
        )
      })
    }

  return (

    <div className="footer-wrapper">
    <div className="footer-content">
        {techstackList}
      </div>  
    </div>  
  )
}

}

export default Footer
