import React from "react";
import Figure from "../Figure/Figure";
import Filter from "../Filter/Filter";

function ProjectList({ projects, photos }) {
	return (
		<div className='c-project'>
			<Filter
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
				{projects &&
					projects.map(project => {
						return (
							<div className='c-project_item' key={project.id}>
								<div className='c-project_inner'>
									<a href={project.Location} className='c-project_link'>
										<Figure
											img={{
												src: project.Cover.image.url,
												alt: project.Cover.image.alt,
											}}
											video={project.Cover.video && project.Cover.video.url}
										/>

										<div className='c-project_info'>
											<div className='c-project_line'>
												<div className='c-project_title'>{project.Title}</div>
												<div className='c-project_org'>Lighthouse Labs</div>
											</div>
										</div>
										<h2 className='c-project_category c-heading -h2'>
											Software
										</h2>
									</a>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default ProjectList;
