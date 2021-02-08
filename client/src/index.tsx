import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { rootReducer } from "./Reducers";
//for react query
const queryClient = new QueryClient();
//for redux
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
