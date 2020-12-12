import React from 'react'

const Education = ({ currentEducation } : { currentEducation: any }) => {

	const parseDate = (date: string) => {
		return new Date(date).toLocaleDateString("en-US");
	}

	let educationInfo = currentEducation ? 
		<div>
			<h2>{currentEducation.degree} in {currentEducation.fieldOfStudy} @ {currentEducation.school}</h2>
			<p>{parseDate(currentEducation.startDate)} - {currentEducation.endDate ? parseDate(currentEducation.endDate) : "Present"}</p>
			<p>GPA: {currentEducation.gpa}</p>
			<p>{currentEducation.extracurricular}</p>
			<p>{currentEducation.description}</p>
		</div> 
		
		: <p>No educations listed</p>

	return (
		<div className="education">
			{educationInfo}
		</div>
	)
}

export default Education;
