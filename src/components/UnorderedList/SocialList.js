import React from "react";
import UnorderedList from "./UnorderedList";
import { InstagramIcon, GitHubIcon, LinkedInIcon } from "../Vector/Socials";
import { StyledSocialList } from "./styles/StyledSocialList";

function SocialList({ orientation }) {
	const listInfo = [
		{
			url: "https://instagram.com/parisien.photo",
			title: null,
			vector: <InstagramIcon />,
			openNewTab: true,
		},
		{
			url: "https://www.linkedin.com/in/matthew-parisien-365572130/",
			title: null,
			vector: <LinkedInIcon />,
			openNewTab: true,
		},
		{
			url: "https://github.com/mattparisien?tab=repositories",
			title: null,
			vector: <GitHubIcon />,
			openNewTab: true,
		},
	];

	return (
		<StyledSocialList className={"SocialList"}>
			<UnorderedList
				listInfo={listInfo}
				orientation={orientation}
				justifyContent={"flex-start"}
				alignItems={"flex-start"}
			/>
		</StyledSocialList>
	);
}

export default SocialList;
