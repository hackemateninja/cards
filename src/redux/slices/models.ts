// Packages
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Definitions
import { IStateModels } from '@def/IStateModels';

// Initial state
const initialModels: IStateModels = {
	data: {
		models: [],
		selectedModel: {}
	},
};

// Set Models
export const setModels = createAsyncThunk( 'get/models', async ( make: string ) => {
	if ( make !== '' ) {
		return new Promise(( resolve, reject ) => {
			fetch( `${window.location.origin}/api/models/${make}` )
				.then(( response ) => {
					if ( response.ok ) {
						return response.json();
					} else {
						throw new Error( 'Something went wrong' );
					}
				})
				.then(( response ) => {
					resolve( response );
				})
				.catch(( error ) => {
					reject( error );
				});
		});
	} else {
		return [];
	}
});

const modelsSlice = createSlice({
	name: 'models',
	initialState: initialModels,
	reducers: {
		setSelectedModel: ( state, action ) => {
			const model = state.data.models.filter( model => model.value === action.payload );

			state.data.selectedModel = model.length !== 0 ? model[0] : {};
		},
		saveModels: ( state, action ) => {
			state.data.models = action.payload;
		},
	},
	extraReducers: builder => {
		// Models
		builder.addCase( setModels.pending, ( state ) => {
			state.data.models = [];
		});
		builder.addCase( setModels.fulfilled, ( state, action ) => {
			state.data.models = action.payload;
		});
	}
});

export const { setSelectedModel, saveModels } = modelsSlice.actions;

export default modelsSlice.reducer