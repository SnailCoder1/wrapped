import React from "react"

const TechStackCard = (props) => {
  let techstack = props.techstack
  return (
    <div key={techstack.id} className=""> 
      <div>
      <a href={techstack.website} target="_blank" className="">{techstack.logo}</a>
    </div>
    </div>
  )
}

export default TechStackCard