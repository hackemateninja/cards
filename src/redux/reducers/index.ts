// Packages
import { combineReducers } from 'redux';

// Slices
import testSlice from '@redux/slices/test';
import makesSlice from '@redux/slices/makes';

const rootReducer = combineReducers({
	test: testSlice,
	makes: makesSlice
});

export default rootReducer;