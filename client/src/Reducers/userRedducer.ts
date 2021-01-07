export interface UserState {
	name: string;
	isLoggedIn: boolean;
}
const initialState = {
	name: "",
	isLoggedIn: false,
};
type Action = { type: "LOGIN" | "LOGOUT"; payload: string };

const userReducer = (state: UserState = initialState, action: Action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, name: action.payload, isLoggedIn: true };
		case "LOGOUT":
			return initialState;
		default:
			return state;
	}
};
export default userReducer;
