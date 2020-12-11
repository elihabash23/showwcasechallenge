import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addName } from '../../store/reducers/User';
import Button from '../../components/UI/Button/Button';
import './HomeScreen.css';
import Input from '../../components/UI/Input/Input';

const HomeScreen = () => {
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	const goToMainScreen = () => {
		if (name) {
			dispatch(addName(name));
			history.push('/education');
		} else {
			setError("Please enter your name.");
		}
	}

	return(
		<div className="center-screen">
			<p>
				Hi there! Welcome to your education showcase.
			</p>
			<p>
				Type your name and click "Enter" below to begin!
			</p>
			<Input 
				placeholder="Your Name"
				onChange={e => setName(e.target.value)}
			/>
			<div>
				<Button 
					type="button"
					onClick={goToMainScreen}>
					Enter
				</Button>
			</div>
			<p
				className="error" >
				{error}
			</p>
		</div>
	);
}

export default HomeScreen;