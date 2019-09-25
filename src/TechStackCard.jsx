import React from "react"

const TechStackCard = () => {
  return (
  <div key={techstack.id} className="mb-12 text-grey-dark flex flex-wrap"> 
    <div className="text-grey-dark text-base w-full border-grey-dark border-b mb-2 pb-1">{techstack.image} </div>
      <div className="w-1/3">

      <a href={techstack.link} target="_blank" className="no-underline text-grey-dark hover:text-blue">{}</a>
      </div>
    </div>  
  )
}

export default TechStackCard