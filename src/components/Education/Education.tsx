import React from 'react'

const Education = ({ currentEducation } : { currentEducation: any }) => {

	let educationInfo = currentEducation ? 
		<div>
			<h2>{currentEducation.school}</h2>
		</div> 
		
		: <p>No educations listed</p>

	return (
		<div className="education">
			{educationInfo}
		</div>
	)
}

export default Education;
