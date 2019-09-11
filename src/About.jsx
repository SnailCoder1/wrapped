import React from "react"

const About = () => {
  return (
      <div className="md:flex bg-white rounded-lg p-6"> 
        <img className="h-16 w-16 md:h-24 md:w-24 rounded mx-auto md:mx-0 md:mr-6"src="src/img/boa.png"></img>
      <div>
        <h1 className="content-text">About Me</h1>
        <p className="content-text">Born and raised in Mozambique. Based in Oslo, Norway.</p>
      </div>
    </div>
  )
}



export default About 