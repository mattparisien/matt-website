import React from "react";
import Figure from "../Figure/Figure";
import Filter from "../Filter/Filter";
import { useState } from "react";
import classNames from "classnames";

function ProjectList({ projects, photos }) {
	const [selected, setSelected] = useState("Software");

	const classes = classNames(`c-project is-category-${selected.toLowerCase()}`)
	

	return (
		<div className={classes}>
			<Filter
				selected={selected}
				setSelected={setSelected}
				categories={[
					{
						name: "Software",
						length: projects && projects.length,
					},
					{
						name: "Photography",
						length: projects && projects.length,
					},
				]}
			/>
			<div className='c-project_list'>
				{selected === "Software" &&
					projects &&
					projects.map(project => {
						return (
							<ProjectItem
								key={project.id}
								title={project.Title}
								videoUrl={project.Cover.video && project.Cover.video.url}
								imageUrl={project.Cover.image && project.Cover.image.url}
								imageAlt={project.Cover.image && project.Cover.image.alt}
								projectLocation={project.Location}
							/>
						);
					})}
				{selected === "Photography" &&
					photos &&
					photos.map(photo => {
						return (
							<ProjectItem
								key={photo.id}
								title={photo.caption}
								videoUrl={null}
								imageUrl={photo.url}
								imageAlt={photo.alternativeText}
								projectLocation={null}
							/>
						);
					})}
			</div>
		</div>
	);
}

function ProjectItem({ title, videoUrl, imageUrl, imageAlt, projectLocation }) {
	return (
		<div className='c-project_item'>
			<div className='c-project_inner'>
				<a href={projectLocation} className='c-project_link'>
					<Figure
						img={{
							src: imageUrl,
							alt: imageAlt,
						}}
						video={videoUrl}
					/>

					<div className='c-project_info'>
						<div className='c-project_line'>
							<div className='c-project_title'>{title}</div>
							<div className='c-project_org'>Lighthouse Labs</div>
						</div>
					</div>
					<h2 className='c-project_category c-heading -h2 -split'>Software</h2>
				</a>
			</div>
		</div>
	);
}

export default ProjectList;
