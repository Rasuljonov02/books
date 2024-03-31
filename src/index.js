import React from "react";
import { createRoot } from "react-dom/client";
import { QueryParamProvider } from "use-query-params";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index";

import "./assets/main.css";

const root = createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<QueryParamProvider>
			<Routes />
		</QueryParamProvider>
	</BrowserRouter>
);
