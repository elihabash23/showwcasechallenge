import React from 'react'
import Modal from 'react-modal';

const EducationModal = ({ show, close } : { show: true, close: any}) => {

	const customStyles = {
		content : {
		  top: '50%',
		  left: '50%',
		  right: 'auto',
		  bottom: 'auto',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)'
		}
	 };

	return (
		<div>
			<Modal 
				isOpen={show}
				style={customStyles}
				onRequestClose={close}>
					over
				New Education Modal
			</Modal>
		</div>
	)
}

export default EducationModal;
