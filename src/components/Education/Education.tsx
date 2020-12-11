import React from 'react'

const Education = ({ currentEducation } : { currentEducation: any }) => {

	let educationInfo = currentEducation ? <p>Educations listed</p> : <p>No educations listed</p>

	return (
		<div className="education">
			{educationInfo}
		</div>
	)
}

export default Education;
