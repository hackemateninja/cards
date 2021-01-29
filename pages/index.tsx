// Packages
import { ThemeProvider } from 'styled-components';

// Layout
import DefaultLayout from '@layout/default';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

//Components
// import HeroImage from '@comp/hero-image';
import ByTypes from '@comp/by-types';
import ByPrices from '@comp/by-prices';
import ByArticles from '@comp/by-articles';
import ByCities from '@comp/by-cities';

const TopCities = [
	{ url: '#', title: 'Austin, TX' },
	{ url: '#', title: 'Baltimore, MD' },
	{ url: '#', title: 'Brimfield, MA' },
	{ url: '#', title: 'Charlotte, NC' },
	{ url: '#', title: 'Colorado Springs, CO' },
	{ url: '#', title: 'Columbus, OH' },
	{ url: '#', title: 'Dallas, TX' },
	{ url: '#', title: 'Denver, CO' },
	{ url: '#', title: 'Detroit, MI' },
	{ url: '#', title: 'Fort Worth, TX' },
	{ url: '#', title: 'Houston, TX' },
	{ url: '#', title: 'Indianapolis, IN' },
	{ url: '#', title: 'Jacksonville, FL' },
	{ url: '#', title: 'Louisville, KY' },
	{ url: '#', title: 'Miami, FL' },
	{ url: '#', title: 'Milwaukee, WI' },
	{ url: '#', title: 'Phoenix, AZ' },
	{ url: '#', title: 'Pittsburgh, PA' },
	{ url: '#', title: 'San Antonio, TX' },
	{ url: '#', title: 'San Jose, CA' },
	{ url: '#', title: 'Tucson, AZ' },
];

const Articles = [
	{ url: '#', title: 'What is a Used Car Vehicle History Report?' },
	{ url: '#', title: 'How to Inspect a Used Car' },
	{ url: '#', title: 'What to Look for on a Used Car Test Drive' },
	{ url: '#', title: '3 Types of Car GPS Systems' },
	{ url: '#', title: 'How to Negotiate a Private Party Used Car Sale' },
	{ url: '#', title: 'View All Articles' },
];

const Prices = [
	{ url: '#', title: 'Cars Under $5,000' },
	{ url: '#', title: 'Cars Under $10,000' },
	{ url: '#', title: 'Cars Under $15,000' },
	{ url: '#', title: 'Cars Under $20,000' },
	{ url: '#', title: 'Cars Under $25,000' },
	{ url: '#', title: 'Cars Under $30,000' },
	{ url: '#', title: 'Cars Under $35,000' },
	{ url: '#', title: 'Cars Under $40,000' },
	{ url: '#', title: 'Cars Under $45,000' },
	{ url: '#', title: 'Cars Over $45,000' },
];

const BodyTypes = [
	{ url: '/', value: 'coupes', title: 'Coupes', category: 'bodytype' },
	{ url: '/', value: 'convertibles', title: 'Convertibles', category: 'bodytype' },
	{ url: '/', value: 'sedans', title: 'Sedans', category: 'bodytype' },
	{ url: '/', value: 'wagons', title: 'Wagons', category: 'bodytype' },
	{ url: '/', value: 'hatchbacks', title: 'Hatchbacks', category: 'bodytype' },
	{ url: '/', value: 'minivans', title: 'Minivans', category: 'bodytype' },
	{ url: '/', value: 'pickup-trucks', title: 'Pickup Trucks', category: 'bodytype' },
	{ url: '/', value: 'suvs', title: 'SUVs', category: 'bodytype' },
	{ url: '/', value: 'crossovers', title: 'Crossovers', category: 'bodytype' },
	{ url: '/', value: 'subcompact', title: 'Subcompact', category: 'vehicleSize' },
	{ url: '/', value: 'mid-size', title: 'Mid Size', category: 'vehicleSize' },
	{ url: '/', value: 'compact', title: 'Compact', category: 'vehicleSize' },
	{ url: '/', value: 'full-size', title: 'Full-Size', category: 'vehicleSize' },
	{ url: '/', value: 'hybrid', title: 'Hybrid', category: 'fuelType' },
	{ url: '/', value: 'diesel', title: 'Diesel', category: 'fuelType' },
	{ url: '/', value: 'electric', title: 'Electric', category: 'fuelType' },
	{ url: '/', value: 'plug-in-hybrid', title: 'Plug-In Hybrid', category: 'fuelType' },
	{ url: '/', value: 'exotic', title: 'Exotic', category: 'performance' },
	{ url: '/', value: 'luxury', title: 'Luxury', category: 'performance' },
	{ url: '/', value: 'high-performance', title: 'High Performance', category: 'performance' },
	{ url: '/', value: 'sport', title: 'Sport', category: 'performance' },
];

const Home: React.FC = ( props ) => {
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
			<DefaultLayout>
				{/*<HeroImage />*/}

				<ByTypes items={BodyTypes} />

				<ByPrices items={Prices} type="prices" columns={3} />

				<ByArticles items={Articles} type="articles" columns={3} />

				<ByCities items={TopCities} type="cities" columns={3} />
			</DefaultLayout>
		</ThemeProvider>
	);
};

export default Home;