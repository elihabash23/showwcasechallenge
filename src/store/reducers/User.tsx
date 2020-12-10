import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: "",
		education: [] as any
	},
	reducers: {
		addName: (state, action) => {
			state.name = action.payload;
		},
		addEducation: (state, action) => {
			let newEducation = [...state.education, action.payload];
			state.education = newEducation;
		}
	},
})

export const { addName, addEducation } = userSlice.actions;
export const getName = (state: { user: { name: string; }; }) => state.user.name;
export const getEducation = (state: { user: { education: any; }; }) => state.user.education;
export default userSlice.reducer;