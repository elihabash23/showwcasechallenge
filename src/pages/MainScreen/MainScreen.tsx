import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getName, getEducation } from '../../store/reducers/User';

const MainScreen = () => {
	const name = useSelector(getName);
	const education = useSelector(getEducation);

	return (
		<div>
			
		</div>
	);
}

export default MainScreen;