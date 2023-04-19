import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
	name: string;
	age: number;
}

const initialState: IUser = {
	name: '',
	age: 20,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeName(state: IUser, action: PayloadAction<string>) {
			state.name = action.payload;
		}
	}
});

export const { changeName } = userSlice.actions;

export default userSlice.reducer;