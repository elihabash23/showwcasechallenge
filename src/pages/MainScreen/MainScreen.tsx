import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Education from '../../components/Education/Education';
import SidePanel from '../../components/SidePanel/SidePanel';
import Button from '../../components/UI/Button/Button';
import { getName, getEducation } from '../../store/reducers/User';
import './MainScreen.css'

const MainScreen = () => {
	const [showEducationModal, setShowEducationModal] = useState(false);
	const [currentEducationIndex, setCurrentEducationIndex] = useState(0);
	const name = useSelector(getName);
	const education = useSelector(getEducation);
	const history = useHistory();

	useEffect(() => {
		if (!name) {
			history.push("/");
		}
	})

	return (
		<div className="container-mainscreen">
			<div className="header">
				<h1>Welcome to {name}'s education page</h1>
				<Button
					type="button"
					onClick={() => setShowEducationModal(true)}>
					Add new education
				</Button>
			</div>
			<div className="grid">
				<SidePanel 
					education={education}
					/>
				
				<Education 
					currentEducation={education[currentEducationIndex]}
				/>
			</div>
		</div>
	);
}

export default MainScreen;