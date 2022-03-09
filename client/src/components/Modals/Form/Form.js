import React, { useState } from "react";
import Button from "../../Button/Button";


function Form() {
	const [state, setState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const handleChange = e => {
		setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		
		e.preventDefault();
		setState({
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		})
	};

	return (
		<div className='form-container -isAbsolute -isAbsolute__centered -flexCenterAll'>
				<form onSubmit={handleSubmit} action="mailto:hello@matthewparisien.com" className="-isFlex -flexColumn">
	 			<input
					type='text'
					name='firstName'
					value={state.firstName}
					placeholder='First name'
					onChange={handleChange}
					autoFocus
				></input>
        
				<input
					type='text'
					name='lastName'
					placeholder='Last name'
					value={state.lastName}
					onChange={handleChange}
				></input>
				<input
					type='text'
					name='email'
					placeholder='Email'
					value={state.email}
					onChange={handleChange}
				></input>
				<textarea
					name='message'
					id='form-message'
					cols='30'
					rows='10'
					value={state.message}
					onChange={handleChange}
				></textarea>
			
				</form>
		</div>
	);
	
}

export default Form;
