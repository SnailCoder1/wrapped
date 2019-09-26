import React from "react"

const About = () => {
  return (
    <div className="md:flex bg-white rounded-lg p-6">
        <img className="h-60 w-60 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="./src/img/moi.png"></img>
        <div className="text-center md:text-left">
          <h2 className="text-lg">Boa Matule</h2>
         <div className="text-purple-500">Software Developer</div>
          <div className="text-gray-600">boa.matule@gmail.com</div>
         <div className="text-gray-600">40101117</div>
      </div>
    </div>
  )
}



export default About 