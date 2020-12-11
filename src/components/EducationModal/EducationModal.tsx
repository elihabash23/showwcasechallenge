import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../store/reducers/User';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/TextArea';
import './EducationModal.css'

const customStyles = {
	content : {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)',
	  width: '50%'
	}
 };

const EducationModal = ({ show, close } : { show: true, close: any}) => {

	const [newSchool, setNewSchool] = useState("");
	const [newDegree, setNewDegree] = useState("");
	const [newFieldOfStudy, setNewFieldOfStudy] = useState("");
	const [newStartDate, setNewStartDate] = useState("");
	const [newEndDate, setNewEndDate] = useState("");
	const [newGpa, setNewGpa] = useState("");
	const [newExtracurricular, setNewExtracurricular] = useState("");
	const [newDescription, setNewDescription] = useState("");

	const [universityList, setUniversityList] = useState([]);
	const [showUniversityList, setShowUniversityList] = useState(false);

	const dispatch = useDispatch();
	

	const addNewEducation = (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		dispatch(addEducation({
			school: newSchool,
			degree: newDegree,
			fieldOfStudy: newFieldOfStudy,
			startDate: newStartDate,
			endDate: newEndDate,
			gpa: newGpa,
			extracurricular: newExtracurricular,
			description: newDescription
		}));

		// Reseting the Modal
		setNewSchool("");
		setNewDegree("");
		setNewFieldOfStudy("");
		setNewStartDate("");
		setNewEndDate("");
		setNewGpa("");
		setNewExtracurricular("");
		setNewDescription("")

		close();	// Close Modal
	}

	const loadUniversities = () => {
		axios.get(`http://universities.hipolabs.com/search?name=${newSchool}&country=United%20States`)
			.then(res => {
				setUniversityList(res.data);
			})
	}

	useEffect(loadUniversities, [newSchool]);

	let showSchools = showUniversityList ? 
							universityList.length > 0 ?
							universityList.map((university: any) => (
								<span 
									className="university"
									onClick={() => {
										setNewSchool(university.name);
										setShowUniversityList(false);
									}}>
									{university.name}
								</span>
							))
							:
								<span 
									className="university">
									No Universities found.
								</span>
						: ""


	return (
		<>
			<Modal 
				isOpen={show}
				style={customStyles}
				onRequestClose={close}
			>
				<h2>New Education Modal</h2>
				<form onSubmit={addNewEducation}>
					<label>School:</label>
					<div className="space-out">
						<Input 
							type="text"
							placeholder="School"
							value={newSchool}
							onChange={(e) => {
								setNewSchool(e.target.value);
							}}
							onFocus={() => setShowUniversityList(true)}
							required
						/>
						<div className="school-list">
							{showSchools}
						</div>
					</div>

					<label>Degree:</label>
					<div className="space-out">
						<Input 
							type="text"
							placeholder="Degree"
							value={newDegree}
							onChange={(e) => {
								setNewDegree(e.target.value)
							}}
						/>
					</div>

					<label>Field of Study:</label>
					<div className="space-out">
						<Input 
							type="text"
							placeholder="Field of Study"
							value={newFieldOfStudy}
							onChange={(e) => {
								setNewFieldOfStudy(e.target.value)
							}}
						/>
					</div>
					
					<label>Start Date:</label>
					<div className="space-out">
						<Input 
							type="date"
							value={newStartDate}
							onChange={(e) => {
								setNewStartDate(e.target.value)
							}}
						/>
					</div>
					
					<label>End Date:</label>
					<div className="space-out">
						<Input 
							type="date"
							value={newEndDate}
							onChange={(e) => {
								setNewEndDate(e.target.value)
							}}
						/>
					</div>

					<label>GPA:</label>
					<div className="space-out">
						<Input 
							type="text"
							placeholder="GPA"
							value={newGpa}
							onChange={(e) => {
								setNewGpa(e.target.value)
							}}
						/>
					</div>
					
					<label>Extracurriculars:</label>
					<div className="space-out">
						<TextArea 
							value={newExtracurricular}
							placeholder="Extracurriculars"
							onChange={(e) => {
								setNewExtracurricular(e.target.value)
							}} 
						/>
					</div>
					
					<label>Description:</label>
					<div className="space-out">
						<TextArea 
							value={newDescription}
							placeholder="Descpription"
							onChange={(e) => {
								setNewDescription(e.target.value)
							}} 
						/>
					</div>

				</form>
			</Modal>
		</>
	)
}

export default EducationModal;
