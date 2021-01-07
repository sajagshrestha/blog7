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
