//dpod
export class DpodFile {
	private pathAndFileName: string;
	
	constructor(pathAndFileName: string) {
		this.pathAndFileName = pathAndFileName;
	}

	public debug() {
		console.log("pathAndFileName: " + this.pathAndFileName);
	}
}
