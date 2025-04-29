import _projects from "../../parseddata/projects.json";
import { Project } from "../../scripts/types";

const projects = _projects as Project[];

export const ProjectArea = () => {
	return (
		<div>
			<h2 className="text-xl mb-3">
				There are {projects.length} flashcards:{" "}
			</h2>
			{projects.map((project, index) => {
				return (
					<div className="mb-4 w-full md:w-[35rem]" key={index}>
						<div className="bg-slate-600 text-slate-200 p-2 rounded-t cursor-pointer">
							{project.title}
						</div>
					</div>
				);
			})}
		</div>
	);
};
