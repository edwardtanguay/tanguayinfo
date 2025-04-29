import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as tools from "../tools";
import React from "react";

const menuItems = [
	{
		idCode: "projects",
		title: "Projects",
	},
	{
		idCode: "latest",
		title: "Latest",
	},
	{
		idCode: "about",
		title: "About",
	},
];

export const Nav = () => {
	const location = useLocation();
	const pageIdCode = tools.chopLeft(location.pathname, "/");
	const currentMenuItem = menuItems.find((m) => m.idCode === pageIdCode);

	return (
		<>
			{currentMenuItem && (
				<nav>
					<div className="bg-slate-800 px-4 py-2 content border-0 border-slate-700 rounded">
						<ul className="flex gap-4">
							{menuItems.map((menuItem, index) => {
								return (
									<React.Fragment key={index}>
										{
											<li key={index}>
												<NavLink to={menuItem.idCode}>
													{menuItem.title}
												</NavLink>
											</li>
										}
									</React.Fragment>
								);
							})}
						</ul>
					</div>
				</nav>
			)}
		</>
	);
};
