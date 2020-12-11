import React from 'react'

const SidePanel = ({ education } : { education: any}) => {
	return (
		<div className="sidepanel">
			<h3>Education</h3>
			<ul>
				{education.map((educationObject: { school: string; }) => (
					<li>
						{educationObject.school}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SidePanel;
