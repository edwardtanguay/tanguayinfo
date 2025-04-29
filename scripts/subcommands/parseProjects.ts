import { DpodFile } from "../classes/DpodFile";
import { Project } from "../types";
import * as qdev from "../qtools/qdev";

export const parseProjects = () => {
	const dpodFile = new DpodFile("../../data/projects.dpod.txt");
	const projects: Project[] = [];
	for (const dpodLineBlock of dpodFile.dpodLineBlocks) {
		const project: Project = {
			idCode: dpodLineBlock.lines[1].trim(),
			title: dpodLineBlock.lines[2].trim(),
			url: dpodLineBlock.lines[3].trim(),
			body: dpodLineBlock.lines[4].trim(),
		}
		projects.push(project)
	}
	qdev.debug(projects);
}