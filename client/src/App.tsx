import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "./Reducers";
import { UserState } from "./Reducers/userRedducer";
import { darkTheme } from "./Theme/theme";

const App = () => {
	const isLoggedin = useSelector<RootState, boolean>(
		(state) => state.userReducer.isLoggedIn
	);
	const name = useSelector<RootState, UserState["name"]>(
		(state) => state.userReducer.name
	);
	const dispatch = useDispatch();
	const login = () => {
		dispatch({ type: "LOGIN", payload: "sj007" });
	};
	const logout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<ThemeProvider theme={darkTheme}>
			<h1>Hello {isLoggedin ? name : "sjout"}!</h1>
			<button onClick={login}>Login</button>
			<button onClick={logout}>Logout</button>
		</ThemeProvider>
	);
};

export default App;
