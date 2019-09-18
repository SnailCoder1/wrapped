import React from "react"


const WorkCard = (props) => {
  let work = props.work
  return (
    <div key={work.id}>
      <div>
        <img src={work.image} />
        <div>{work.name}</div>
      </div>

      <div style={{ minHeight: '120px' }}>
          <div>{work.name}</div>
          <p>
              {work.description}
          </p>
      </div>

      <div>
          <a href={work.link} target="_blank"><button>Link</button></a>
      </div>
    </div>
  )
}

export default WorkCard 