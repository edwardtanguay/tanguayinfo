import { DpodFile } from "../classes/DpodFile";

export const parseProjects = () => {
	const dpodFile = new DpodFile("../../data/projects.txt");
	dpodFile.debug();
}