import React from "react";

function UploadPage() {
	return (
		<>
			<form
				action={`${process.env.REACT_APP_API_URL}/photography/upload`}
				method='POST'
				encType='multipart/form-data'
			>
				<input name='image' type='file' accept='image/*' />
				<input type='submit' value='Submit' />
			</form>

			{/* Software images upload */}
			<form
				action={`${process.env.REACT_APP_API_URL}/software/upload`}
				method='POST'
				encType='multipart/form-data'
			>
				<input name='image' type='file' accept='image/*' />

				<label style={{ color: "black" }}>name</label>
				<input style={{ color: "black" }} type='text' name='name' />
				<label style={{ color: "black" }} type='text'>
					description
				</label>
				<textarea style={{ color: "black" }} type='text' name='description' />
				<label style={{ color: "black" }} type='text'>
					url
				</label>
				<input style={{ color: "black" }} type='text' name='url' />

				<input type='submit' value='Submit' />
			</form>
		</>
	);
}

export default UploadPage;
