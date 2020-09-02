import React from "react"

const WorkCard = (props) => {
  let work = props.work
  return (
    <div key={work.id} className="mb-12 text-grey-dark flex flex-wrap"> 

      <div className="text-grey-dark text-base w-full border-grey-dark border-b mb-2 pb-1">{work.title} </div>

        <div className="w-1/3">
        <a href={work.website} target="_blank" className="no-underline text-grey-dark hover:text-blue">{work.name}</a>
          <p className="text-grey-dark mb-8">{work.time}</p>
      </div>
    </div>
  )
}

export default WorkCard 