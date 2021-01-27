// Packages
import { combineReducers } from 'redux';

// Slices
import testSlice from '@redux/slices/test';

const rootReducer = combineReducers({
	test: testSlice
});

export default rootReducer;