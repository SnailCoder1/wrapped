import React, { Component } from "react"
import axios from "axios"
import TechStackCard from "./TechStackCard"

class TechStack extends Component {
  ComponentDidMount() {
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
      techstack: []
    };
  }

  render() {
    const techstack = this.state.techstack
    let techstack

  if (techstack.length > 0) {
    techstack = techstack.map(techstack => {
      return (
        <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <TechStackCard techstack ={techstack} />
        </div>
      )
    })
  }

  return (
    <div className="content-wrapper">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {TechStackCard}
        </div>
    </div>
    )
  }


}

export default TechStack