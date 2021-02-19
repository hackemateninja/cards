const primaryFilters = [
	{ label: 'Certified Pre-Owned Only', value: 'certified', checked: false },
	{ label: 'Top Deals Only', value: 'top-deals', checked: false }
];

const yearFilters = {
	title: 'Year',
	name: 'year',
	options: [
		{ title: '2021', value: '2021' },
		{ title: '2020', value: '2020' },
		{ title: '2019', value: '2019' },
		{ title: '2018', value: '2018' },
		{ title: '2017', value: '2017' },
		{ title: '2016', value: '2016' },
		{ title: '2015', value: '2015' },
		{ title: '2014', value: '2014' },
		{ title: '2013', value: '2013' },
		{ title: '2012', value: '2012' },
		{ title: '2011', value: '2011' },
		{ title: '2010', value: '2010' },
		{ title: '2009', value: '2009' },
		{ title: '2008', value: '2008' },
		{ title: '2007', value: '2007' },
		{ title: '2006', value: '2006' },
		{ title: '2005', value: '2005' },
		{ title: '2004', value: '2004' },
		{ title: '2003', value: '2003' },
		{ title: '2002', value: '2002' },
		{ title: '2001', value: '2001' },
		{ title: '2000', value: '2000' }
	]
};

const priceFilters = {
	title: 'Price',
	name: 'price',
	options: [
		{ title: '$5,000', value: '5000' },
		{ title: '$10,000', value: '10000' },
		{ title: '$15,000', value: '15000' },
		{ title: '$20,000', value: '20000' },
		{ title: '$25,000', value: '25000' },
		{ title: '$30,000', value: '30000' },
		{ title: '$35,000', value: '35000' },
		{ title: '$40,000', value: '40000' },
		{ title: '$45,000', value: '45000' }
	]
};

const mileageFilters = {
	title: 'Mileage',
	name: 'mileage',
	options: [
		{ title: '10,000', value: '10000' },
		{ title: '20,000', value: '20000' },
		{ title: '30,000', value: '30000' },
		{ title: '40,000', value: '40000' },
		{ title: '50,000', value: '50000' },
		{ title: '60,000', value: '60000' }
	]
};

const bodyTypeFilters = {
	title: 'Body Type',
	name: 'body-type',
	options: [
		{ title: 'All', value: 'bt-all', checked: false },
		{ title: 'Minivan', value: 'bt-minivan', checked: false },
		{ title: 'Coupe', value: 'bt-coupe', checked: false },
		{ title: 'Van', value: 'bt-van', checked: false },
		{ title: 'Convertible', value: 'bt-convertible', checked: false },
		{ title: 'Pickup Truck', value: 'bt-pickup-truck', checked: false },
		{ title: 'Sedan', value: 'bt-sedan', checked: false },
		{ title: 'Crossover', value: 'bt-crossover', checked: false },
		{ title: 'Wagon', value: 'bt-wagon', checked: false },
		{ title: 'SUV', value: 'bt-suv', checked: false },
		{ title: 'Hatchback', value: 'bt-hatchback', checked: false },
	]
};

const truckCabTypeFilters = {
	title: 'Truck Cab Type',
	name: 'truck-cab-type',
	options: [
		{ title: 'All', value: 'tct-all', checked: false },
		{ title: 'Crew Cab', value: 'tct-crew-cab', checked: false },
		{ title: 'Extended Cab', value: 'tct-extended-cab', checked: false },
		{ title: 'Regular Cab', value: 'tct-regular-cab', checked: false }
	]
};

const alternativeFuelType = {
	title: 'Alternative Fuel Type',
	name: 'alternative-fuel-type',
	options: [
		{ title: 'All', value: 'aft-all', checked: false },
		{ title: 'Diesel', value: 'aft-diesel', checked: false },
		{ title: 'Hybrid', value: 'aft-hybrid', checked: false },
		{ title: 'Plug-in Hybrid', value: 'aft-plug-in-hybrid', checked: false },
		{ title: 'Electric', value: 'aft-electric', checked: false }
	]
};

const luxuryPerformanceFilters = {
	title: 'Luxury & Performance',
	name: 'luxury-performance',
	options: [
		{ title: 'All', value: 'lp-all', checked: false },
		{ title: 'Luxury', value: 'lp-luxury', checked: false },
		{ title: 'Sport', value: 'lp-sport', checked: false },
		{ title: 'High Performance', value: 'lp-high-performance', checked: false },
		{ title: 'Exotic', value: 'lp-exotic', checked: false }
	]
};

const vehicleSizeFilters = {
	title: 'Vehicle Size',
	name: 'vehicle-size',
	options: [
		{ title: 'All', value: 'vs-all', checked: false },
		{ title: 'Subcompact', value: 'vs-subcompact', checked: false },
		{ title: 'Compact', value: 'vs-compact', checked: false },
		{ title: 'Mid-size', value: 'vs-mid-size', checked: false },
		{ title: 'Full-size', value: 'vs-full-size', checked: false }
	]
};

export {
	primaryFilters,
	yearFilters,
	priceFilters,
	mileageFilters,
	bodyTypeFilters,
	truckCabTypeFilters,
	alternativeFuelType,
	luxuryPerformanceFilters,
	vehicleSizeFilters
};