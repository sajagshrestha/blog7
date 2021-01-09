import { ThemeProvider } from "styled-components";
import { useReduxDispatch, useReduxSelector } from "./Reducers";
import { darkTheme } from "./Theme/theme";

const App = () => {
	const user = useReduxSelector((state) => state.user);
	const dispatch = useReduxDispatch();
	const login = () => {
		dispatch({ type: "LOGIN", payload: "sj007" });
	};
	const logout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<ThemeProvider theme={darkTheme}>
			<h1>Hello {user.isLoggedIn ? user.name : "sjout"}!</h1>
			<button onClick={login}>Login</button>
			<button onClick={logout}>Logout</button>
		</ThemeProvider>
	);
};

export default App;
