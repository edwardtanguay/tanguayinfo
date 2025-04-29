import { DpodFile } from "../classes/DpodFile";
import { LatestItem } from "../types";
import * as qfil from "../qtools/qfil";

export const parseLatestItems = () => {
	const dpodFile = new DpodFile("../../data/latestItems.dpod.txt");
	const projects: LatestItem[] = [];
	for (const dpodLineBlock of dpodFile.dpodLineBlocks) {
		const latestItem: LatestItem = {
			idCode: dpodLineBlock.lines[1].trim(),
			whenOccured: dpodLineBlock.lines[2].trim(),
			title: dpodLineBlock.lines[3].trim(),
			url: dpodLineBlock.lines[4].trim(),
			body: dpodLineBlock.lines[5].trim(),
		}
		projects.push(latestItem)
	}
	qfil.saveArrayOfObjectsToJsonFile(projects, "../../parseddata/latestItems.json");
}