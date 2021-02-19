// Packages
import { createSlice } from '@reduxjs/toolkit';

// Data
import { primaryFilters, yearFilters, priceFilters, mileageFilters, bodyTypeFilters, truckCabTypeFilters, alternativeFuelType, luxuryPerformanceFilters, vehicleSizeFilters } from '@data/filters';

const filtersSlice = createSlice({
	name: 'filters',
	initialState: [
		primaryFilters,
		yearFilters,
		priceFilters,
		mileageFilters,
		bodyTypeFilters,
		truckCabTypeFilters,
		alternativeFuelType,
		luxuryPerformanceFilters,
		vehicleSizeFilters
	],
	reducers: {}
});

export const {} = filtersSlice.actions;

export default filtersSlice.reducer