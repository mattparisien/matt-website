import React, { useState, useEffect } from "react";
import classNames from "classnames";

function Form(props) {
	const [values, setValues] = useState("");
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);

	const classes = classNames("c-form", { [props.classes]: props.classes });

	return (
		<form className='c-form'>
			{props.formFields.map((formField, i) => {
				return (
					<div className='c-form_item'>
						<label className='c-form_label'>{formField.label}</label>
						<FormField
							key={i}
							name={formField.name}
							value={values[formField.name]}
							tagName={formField.tagName}
							classes={formField.classes}
						/>
					</div>
				);
			})}
		</form>
	);
}

function FormField({ tagName, name, value, classes }) {
	const fieldClasses = classNames(`c-form_${tagName}`, { [classes]: classes });

	return React.createElement(tagName, {
		key: tagName.id,
		name: name,
		value: value,
		className: fieldClasses,
	});
}

export default Form;
