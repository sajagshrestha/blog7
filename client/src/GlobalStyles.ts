import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		primaryBackgroundColor: string;
		secondaryBackgroundColor: string;
		textColor: string;
	}
}

const commonTheme = {
	textColor: "white",
};

export const darkTheme: DefaultTheme = {
	...commonTheme,
	primaryBackgroundColor: "black",
	secondaryBackgroundColor: "grey",
};

export const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
	body{
		background:${(props) => props.theme.primaryBackgroundColor}
	}
`;
