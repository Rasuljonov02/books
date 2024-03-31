// index.tsx (or index.js)
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";

import "./assets/main.css";

const root = createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes />
	</Router>
);
