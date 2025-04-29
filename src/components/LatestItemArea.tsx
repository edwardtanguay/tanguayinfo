import _latestItems from "../../parseddata/latestItems.json";
import { LatestItem } from "../../scripts/types";

const latestItems = _latestItems as LatestItem[];

export const LatestItemArea = () => {
	return (
		<div className="md:w-[30rem] w-full">
			{latestItems.map((latestItem, index) => {
				return (
					<div className="mb-4 w-full" key={index}>
						<h2 className="mb-1 text-xl text-center font-semibold">{latestItem.title}</h2>
						<a href={latestItem.url} target="_blank" rel="noopener noreferrer">
							<img
								src={`images/${latestItem.idCode}.png`}
								className="mb-1 w-full md:w-[30rem] border rounded-lg border-slate-200"
							/>
						</a>
						<p className="italic text- text-xs text-center text-slate-300">{latestItem.body}</p>
					</div>
				);
			})}
		</div>
	);
};
