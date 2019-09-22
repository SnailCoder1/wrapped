import React from "react"

const EducationCard = (props) => {
  let education = props.education
  return (
    <div style={{ minHeight: '120px' }}>
      <div key={education.id}>
        {education.time}  
        {education.name}
        {education.subject}  
        {education.description}  
        {education.website}   
      </div>
    </div>
  )
}
export default EducationCard 
