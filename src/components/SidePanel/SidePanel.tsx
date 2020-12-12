import React from 'react';
import './SidePanel.css';

const SidePanel = ({ education, currentEducationIndex, changeCurrentEducationIndex } : { education: any, currentEducationIndex: number, changeCurrentEducationIndex: any}) => {
	return (
		<div className="sidepanel">
			<h3>Education</h3>
			<ul className="education-list">
				{education.map((educationObject: { school: string; }, i: number) => (
					<li 
					className={currentEducationIndex === i ? "selected" : ""}
					onClick={() => {
						changeCurrentEducationIndex(i);
					}}>
						{educationObject.school}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SidePanel;
