import { createSlice } from '@reduxjs/toolkit';

// Helper method to sort educations by start date
const compare = (a: any, b: any) => {
	const aStartDate = a.startDate.toUpperCase();
	const bStartDate = b.startDate.toUpperCase();

	let comparison = 0;
	if (aStartDate > bStartDate) {
		comparison = 1;
	} else if (aStartDate < bStartDate) {
		comparison = -1;
	}
	return comparison;
}

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
			newEducation = newEducation.sort(compare);
			state.education = newEducation;
		}
	},
})

export const { addName, addEducation } = userSlice.actions;
export const getName = (state: { user: { name: string; }; }) => state.user.name;
export const getEducation = (state: { user: { education: any; }; }) => state.user.education;
export default userSlice.reducer;