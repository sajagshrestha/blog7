import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme/theme";

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<h1>Helo world!</h1>
		</ThemeProvider>
	);
};

export default App;
