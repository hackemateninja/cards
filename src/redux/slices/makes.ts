// Packages
import { createSlice } from '@reduxjs/toolkit';

// Definitions
import { IStateMakes } from '@def/IStateMakes';

// Initial state
const initialMakes: IStateMakes = {
	data: {
		makes: [],
		selectedMake: {}
	},
};

const makesSlice = createSlice({
	name: 'makes',
	initialState: initialMakes,
	reducers: {
		setMakes: ( state, action ) => {
			state.data.makes = action.payload
		},
		setSelectedMake: ( state, action ) => {
			const make = state.data.makes.filter( make => make.value === action.payload );

			state.data.selectedMake = make.length !== 0 ? make[0] : {};
		}
	}
});

export const { setMakes, setSelectedMake } = makesSlice.actions;

export default makesSlice.reducer