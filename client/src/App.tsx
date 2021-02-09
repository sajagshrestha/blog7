import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle, darkTheme } from "./GlobalStyles";
import useDarkMode from "./CustomHooks/useDarkMode";

const App = () => {
	const [theme, toggleTheme] = useDarkMode();
	useEffect(() => {}, []);
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Navbar />
		</ThemeProvider>
	);
};

export default App;
