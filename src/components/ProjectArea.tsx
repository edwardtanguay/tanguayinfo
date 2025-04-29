import _projects from "../../parseddata/projects.json";
import { Project } from "../../scripts/types";

const projects = _projects as Project[];

export const ProjectArea = () => {
	return (
		<div className="md:w-[30rem] w-full">
			{projects.map((project, index) => {
				return (
					<div className="mb-4 w-full bg-slate-800 p-3" key={index}>
						<h2 className="bg-slate-950 p-2">
							<p className="text-xl font-semibold">{project.title}</p>
						</h2>
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							<img
								src={`images/${project.idCode}.png`}
								className="w-full md:w-[30rem] border border-slate-950"
							/>
						</a>
						<p className="bg-slate-950 p-2 italic text- text-xs text-center text-slate-300">{project.body}</p>
					</div>
				);
			})}
		</div>
	);
};
