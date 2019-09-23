import React from "react"

const EducationCard = (props) => {
  let education = props.education
  return (
    <div style={{ minHeight: '120px' }}> 
      <div key={education.name}>
        <div key= {education.id} className="text-grey-dark uppercase text-base w-full border-grey-dark border-b mb-2 pb-1">
          {education.time}  
          {education.subject}  
          {education.description}
          {education.website}   
        </div>
      </div>
    </div>
  )
}
export default EducationCard 
