import React, { useState } from "react";
import Button from "./Button";

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

	return (
		<div className='form-container'>
			<form>
				<input
					type='text'
					name='firstName'
          value={state.firstName}
					placeholder='First name'
					onChange={handleChange}
				></input>
				<input
					type='text'
					name='lastName'
					placeholder='Last name'
          value={state.value}
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
				<Button type={"submit"} style={"rectangle"} />
			</form>
		</div>
	);
}

export default Form;
