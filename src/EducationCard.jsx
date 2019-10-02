import React from "react"

const EducationCard = (props) => {
  let education = props.education
    return (
      <div key={education.id} className="mb-12 text-grey-dark flex flex-wrap"> 
        <div className="text-grey-dark text-base w-full border-grey-dark border-b mb-2 pb-1">{education.title} </div>
          <div className="w-1/3">
            <a href={education.website} target="_blank" className="no-underline text-grey-dark hover:text-blue">{education.school}</a>
            <p className="text-grey-dark mb-8">{education.time}</p>
          </div>
      </div>
  )
}
export default EducationCard 
