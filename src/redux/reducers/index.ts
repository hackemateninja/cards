// Packages
import { combineReducers } from 'redux';

// Slices
import testSlice from '@redux/slices/test';
import makesSlice from '@redux/slices/makes';
import filtersSlice from '@redux/slices/filters';

const rootReducer = combineReducers({
	test: testSlice,
	makes: makesSlice,
	filters: filtersSlice
});

export default rootReducer;