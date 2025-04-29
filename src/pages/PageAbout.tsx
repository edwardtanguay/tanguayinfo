export const PageAbout = () => {
	return (
		<>
			<img src="images/edward.jpg" />
			<p className="text-center">professional web developer, passionate learner, have philosophy degree, love languages, run marathons, concerned about society, critical as hell</p>
			<h2 className="text-xl mt-3">Connect: </h2>
			<ul className="list-disc ml-6 text-sm">
				<li> <a className="underline" href="https://www.linkedin.com/in/edward-tanguay">linkedin.com/in/edward-tanguay</a></li>
				<li> <a className="underline" href="https://github.com/edwardtanguay">github.com/edwardtanguay</a></li>
			</ul>
			<h2 className="text-sm mt-3 border-t border-slate-600 pt-3">This site:</h2>
			<ul className="list-disc ml-6 text-sm">
				<li>live: <a className="underline" href="https://tanguayinfo.vercel.app">tanguayinfo.vercel.app</a></li>
				<li>repo: <a className="underline" href="https://github.com/edwardtanguay/tanguayinfo">edwardtanguay/tanguayinfo</a></li>
			</ul>
		</>
	)
}
