// Packages
import { createSlice } from '@reduxjs/toolkit';

interface IStateTest {
	currentSelected: Number
}

// Initial state
const initialCurrent: IStateTest = {
	currentSelected: 1
};

const testSlice = createSlice({
	name: 'test',
	initialState: initialCurrent,
	reducers: {
		setCurrent: ( state, action ) => {
			state.currentSelected = action.payload
		},
	}
});

export const {setCurrent} = testSlice.actions;

export default testSlice.reducer