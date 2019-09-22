import React, { Component } from "react"
import axios from "axios"
import EducationCard from "./EducationCard"
import WorkCard from "./WorkCard"

class Cv extends Component {
  componentDidMount() {
    axios.get('./src/data/education.json')
    .then(response => {
      this.setState({
        education: response.data
      })
    })

    .then(
      axios.get('./src/data/work.json')
      .then(response => {
        this.setState({
          work: response.data 
        })
      })
    )
  }

  constructor (){
    super();
    this.state = {
      education: [],
      work: [],
    };
  }

  render() {
    const education = this.state.education
    const work = this.state.work
    let educationList 
    let workList


    if (education.length > 0) {
      educationList = education.map(education => {
        return (
          <div key={education.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <EducationCard education={education} />
          </div>
        )
      })
    }

    if (work.length > 0) {
      workList = work.map(work => {
        return (
          <div key={work.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <WorkCard work={work} />
          </div>
        )
      })
    }

  return (
    <>
        <div className="flex mb-4">  
          <div className="w-3/4">
            <h1>Education</h1>
          </div>
        </div>

        <div className="">
          {educationList}
        </div>

        <div className="flex mb-4">
          <div className="w-3/4">
            <h1>Work Experience</h1>
          </div>

          <div className="">
            {workList}
          </div>
        </div>
      </>
    )
  }
};



export default Cv