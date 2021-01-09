export interface UserState {
	name: string;
	isLoggedIn: boolean;
}
const initialState = {
	name: "",
	isLoggedIn: false,
};
export type UserAction =
	| { type: "LOGIN"; payload: string }
	| { type: "LOGOUT" };

const userReducer = (state: UserState = initialState, action: UserAction) => {
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
