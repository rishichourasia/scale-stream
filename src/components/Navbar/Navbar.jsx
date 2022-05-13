import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<>
			<header className="nav fixed">
				<div className="menu-logo">
					<NavLink to="/">
						<div className="menu-btn">
							<img
								className="logo-svg"
								src="logo simple light.svg"
								alt="logo-svg"
							/>
						</div>
					</NavLink>
				</div>
				<div className="nav-btn">
					<NavLink to="/login">
						<button className="btn btn-primary">Login</button>
					</NavLink>
				</div>
			</header>
		</>
	);
};
