import * as qfil from "../qtools/qfil";
//dpod
export class DpodFile {
	private pathAndFileName: string;
	private lines: string[] = []; 

	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
		this.lines = qfil.getLinesFromFile(this.pathAndFileName);
	}

	public debug() {
		console.log("pathAndFileName: " + this.pathAndFileName);
		console.log("lines: " + this.lines.length);
	}
}
