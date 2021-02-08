import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle, darkTheme } from "./GlobalStyles";
import { useReduxDispatch, useReduxSelector } from "./Reducers";

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
			<GlobalStyle />
			<Navbar />
			<h1>Hello {user.isLoggedIn ? user.name : "sjout"}!</h1>
			<button onClick={login}>Login</button>
			<button onClick={logout}>Logout</button>
		</ThemeProvider>
	);
};

export default App;
