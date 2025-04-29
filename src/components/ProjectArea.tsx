import _projects from "../../parseddata/projects.json";
import { Project } from "../../scripts/types";

const projects = _projects as Project[];

export const ProjectArea = () => {
	return (
		<div className="md:w-[30rem] w-full">
			{projects.map((project, index) => {
				return (
					<div className="mb-4 w-full" key={index}>
						<h2 className="mb-1 text-xl text-center font-semibold">{project.title}</h2>
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							<img
								src={`images/${project.idCode}.png`}
								className="mb-1 w-full md:w-[30rem] border-[.2rem] rounded-lg border-yellow-500"
							/>
						</a>
						<p className="italic text- text-xs text-center text-slate-300">{project.body}</p>
					</div>
				);
			})}
		</div>
	);
};
