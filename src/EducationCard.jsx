import React from "react"


const EducationCard = (props) => {
  let education = props.education
  return (
    <div key={education.id}>
      <div>
        <img src={education.image} />
        <div>{education.name}</div>
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
export default EducationCard 