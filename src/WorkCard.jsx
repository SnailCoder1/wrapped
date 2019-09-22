import React from "react"

const WorkCard = (props) => {
  let work = props.work
  return (
    <div style={{ minHeight: '120px' }}>
      <div key={work.id}>
        {work.name}
        {work.description}  
      </div>
    </div>
  )
}

export default WorkCard 