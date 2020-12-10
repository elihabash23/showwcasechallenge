import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';

const HomeScreen = () => {
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const history = useHistory();

	const goToMainScreen = () => {
		if (name) {
			history.push('/education');
		} else {
			setError("Please enter your name.");
		}
	}

	return(
		<div>
			<p>
				Hi there! Welcome to your education showcase.
			</p>
			<p>
				Type your name and click "Enter below to begin!"
			</p>
			<input 
				type="text"
				placeholder="Your name"
				onChange={e => setName(e.target.value)}
			/>
			<Button 
				type="button"
				onClick={goToMainScreen}>
				Enter!
			</Button>
			<p
				style={{ marginTop: "10px",
							color: 'red' ,
							fontSize: '.7em'}}>
				{error}
			</p>
		</div>
	);
}

export default HomeScreen;