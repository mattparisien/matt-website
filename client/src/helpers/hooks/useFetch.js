import React, { useEffect, useState } from "react";

export default function useFetch(path) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const baseUrl = process.env.REACT_APP_STRAPI_URL;
	const url = baseUrl + path;

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data.data))
			.catch(err => setError(err))
			.finally(setLoading(true));
	}, []);

	return [data, error, loading];
}
