import React, { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../App/App";

function FooterNav() {
	const data = useContext(DataContext);
	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<div
			className={
				"footer-bottom -fullWidth -flex -align-end -justify-between -text-tiny"
			}
		>
			<div className='year'>©2022</div>
			<ul className='-ul-small'>
				{data &&
					data.socials &&
					data.socials.map((link, i) => {
						return (
							<li>
								<a
									href={link.path}
									rel='noreferrer'
									target={link.Title === "Email" ? "_self" : "_blank"}
								>
									{link.Title}
								</a>
							</li>
						);
					})}
			</ul>
			<ul className='-ul-small'>
				<li>Matthew Parisien</li>
				<li>Montreal, Quebec</li>
				<li>Canada ↗︎</li>
			</ul>
			<div className='phone'>
				{data && data.contact && data.contact.Phone}↗︎
			</div>
		</div>
	);
}

export default FooterNav;
