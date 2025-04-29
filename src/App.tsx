import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
	// const { initialize } = useTypedStoreActions((actions) => actions.mainModel);

	// useEffect(() => {
	// 	initialize();
	// });

	return (
		<main className="bg-slate-900 p-4 w-full md:w-[60rem] mt-0 md:mt-6 md:border border-slate-700 rounded-lg shadow-lg shadow-slate-900/50">
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</main>
	);
}

export default App;
