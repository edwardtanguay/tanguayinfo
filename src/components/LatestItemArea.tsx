import _latestItems from "../../parseddata/latestItems.json";
import { LatestItem } from "../../scripts/types";

const latestItems = _latestItems as LatestItem[];

export const LatestItemArea = () => {
	return (
		<div className="md:w-[30rem] w-full">
			{latestItems.map((latestItem, index) => {
				return (
					<div className="mb-4 w-full bg-slate-800 p-3" key={index}>
						<h2 className="bg-slate-950 p-2 text-xl font-semibold">{latestItem.title}</h2>
						<a href={latestItem.url} target="_blank" rel="noopener noreferrer">
							<img
								src={`images/${latestItem.idCode}.png`}
								className="w-full md:w-[30rem] border-0 border-slate-600"
							/>
						</a>
						<p className="bg-slate-950 p-2 italic text- text-xs text-center text-slate-300">{latestItem.body}</p>
					</div>
				);
			})}
		</div>
	);
};
