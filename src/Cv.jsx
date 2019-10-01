import React, { Component } from "react"
import axios from "axios"
import EducationCard from "./EducationCard"
import WorkCard from "./WorkCard";

class Cv extends Component {
  componentDidMount() {
    axios.get("./src/data/education.json")
    .then(response => {
      this.setState({
        education: response.data
      })
    })

    .then(
      axios.get("./src/data/work.json")
      .then(response => {
        this.setState({
          work: response.data 
        })
      })
    )
  }

  constructor() {
    super();
    this.state = {
      education: [],
      work: [],
    };
  }

  render() {
    const education = this.state.education
    const work = this.state.work
    let educationList;
    let workList;


    if (education.length > 0) {
      educationList = education.map(education => {
        return (
          <div key={education.id}>
            <EducationCard education={education} />
          </div>
        )
      })
    }

    if (work.length > 0) {
      workList = work.map(work => {
        return (
          <div key={work.id}>
            <WorkCard work={work} />
          </div>
        )
      })
    }

  return (
    <div className="px-4 pt-4 flex-1 overflow-y-scroll">
        <div className="mb-12">
            <h2>Education</h2>
          </div>

        <div >
          {educationList}
        </div>

      

    
          <div className="mb-12">
            <h2>Work Experience</h2>
          </div>

          <div>
            {workList}
          </div>

    </div>
      
    );
  }
}



export default Cv