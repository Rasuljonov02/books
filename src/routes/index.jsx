import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import Register1 from "../pages/auth/Register";
import Login1 from "../pages/auth/Login";
import App from "../pages/shop/App";
import "../salom.css";

const Routes: React.FC = () => {
	const isAuthenticated = () => {
		const userData = localStorage.getItem("userData") || {};
		console.log(userData);
		return !!userData;
	};

	return (
		<div className="bg">
			<Switch>
				<Route path="/login" element={<Login1 />} />
				<Route path="/register" element={<Register1 />} />
				<Route path="" element={isAuthenticated() ? <App /> : <Navigate to="/register" />} />

				<Route path="*" element={<Navigate to={isAuthenticated() ? "" : "/register"} />} />
			</Switch>
		</div>
	);
};

export default Routes;
