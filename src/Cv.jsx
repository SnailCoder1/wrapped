import React, { Component } from "react"
import axios from "axios"
import { UndrawDesigner } from 'react-undraw-illustrations';



class Cv extends Component {
  componentDidMount() {
    axios.get('./src/data/cv.json')
    .then(response => {
      this.setState({
        cv: response.data
      })
    })
  }

  constructor (){
    super();
    this.state ={
      cv: []
    };
  }

  render() {
    let cv = this.state.cv
    let cvList 

    if (cv.length > 0) {
      cvList = cv.map(cv => {
        return (
          <div key={cv.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <ProjectCard cv={cv} />
      </div>
        )
      })
    }


  return (
    <div className="content-wrapper">
        <div className="flex mb-4">
            <div className="w-1/4">
                <UndrawDesigner />
            </div>
            <div className="w-3/4">
                <h1>My Projects</h1>
                <p></p>
            </div>

        </div>

        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {cvList}
        </div>
    </div>
    )
  }

};



export default Cv