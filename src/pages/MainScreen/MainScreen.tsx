import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import { getName, getEducation } from '../../store/reducers/User';

const MainScreen = () => {
	const [showEducationModal, setShowEducationModal] = useState(false);
	const name = useSelector(getName);
	const education = useSelector(getEducation);
	const history = useHistory();

	useEffect(() => {
		if (!name) {
			history.push("/");
		}
	})

	return (
		<div>
			<h1>Welcome to {name}'s education page</h1>
			<Button
				type="button"
				onClick={() => setShowEducationModal(true)}>
				Add new education
			</Button>
		</div>
	);
}

export default MainScreen;