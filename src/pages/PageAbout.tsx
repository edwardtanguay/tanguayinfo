export const PageAbout = () => {
	return (
		<div className="md:w-[25rem] w-full">
			<img src="images/edward.jpg" />
			<p className="text-center mt-2">professional web developer, passionate learner, have philosophy degree, love languages, run marathons, concerned about society, critical as hell</p>
			<h2 className="text-lg mt-3">Connect: </h2>
			<ul className="list-disc ml-6 mt-2 text-lg">
				<li> <a className="underline" href="https://www.linkedin.com/in/edward-tanguay">linkedin.com/in/edward-tanguay</a></li>
				<li> <a className="underline" href="https://github.com/edwardtanguay">github.com/edwardtanguay</a></li>
			</ul>
			<h2 className="text-sm border-t border-slate-600 pt-3 mt-6">This site:</h2>
			<ul className="list-disc ml-6 text-sm">
				<li>live: <a className="underline" href="https://tanguayinfo.vercel.app">tanguayinfo.vercel.app</a></li>
				<li>repo: <a className="underline" href="https://github.com/edwardtanguay/tanguayinfo">edwardtanguay/tanguayinfo</a></li>
			</ul>
		</div>
	)
}
