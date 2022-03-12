import React, { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";


function Form(props) {
	const [values, setValues] = useState("");
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);

	const classes = classNames("c-form", { [props.classes]: props.classes });

	const handleChange = e => {
		setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		console.log('helo!')
		axios.post(process.env.REACT_APP_API_URL)
	}

	return (
		<form className='c-form' onSubmit={handleSubmit}>
			<div className='c-form_wrapper -flex -gap2'>
				<div className='c-form_block'>
					{props.formFields.map((formField, i) => {
						return (
							i < 3 && (
								<div className='c-form_item'>
									<label className='c-form_label'>{formField.label}</label>
									<FormField
										key={i}
										name={formField.name}
										value={values[formField.name]}
										tagName={formField.tagName}
										classes={formField.classes}
										placeholder={formField.placeholder}
										handleChange={handleChange}
									/>
								</div>
							)
						);
					})}
				</div>
				<div className='c-form_block'>
					<div className='c-form_item'>
						<label className='c-form_label'>{props.formFields[3].label}</label>
						<FormField
							handleChange={handleChange}
							name={props.formFields[3].name}
							value={values[props.formFields[3].name]}
							tagName={props.formFields[3].tagName}
							classes={props.formFields[3].classes}
							placeholder={props.formFields[3].placeholder}
						/>
					</div>
				</div>
			</div>
			<button className='c-button' type='submit'>
				Submit
			</button>
		</form>
	);
}

function FormField({
	tagName,
	name,
	value,
	classes,
	placeholder,
	handleChange,
}) {
	const fieldClasses = classNames(`c-form_${tagName}`, { [classes]: classes });

	return React.createElement(tagName, {
		key: tagName.id,
		name: name,
		value: value,
		className: fieldClasses,
		placeholder: placeholder,
		required: true,
		onChange: handleChange,
	});
}

export default Form;
