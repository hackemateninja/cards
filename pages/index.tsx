// Packages
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Layout
import DefaultLayout from '@layout/default';

// Data
import { TopCities } from '@data/TopCities';
import { HomeArticles } from '@data/HomeArticles';
import { Prices } from '@data/Prices';
import { makes } from '@data/makes';
import { BodyTypes } from '@data/BodyTypes';

// Slices
import { setMakes } from '@redux/slices/makes';

//Components
// import HeroImage from '@comp/hero-image';
import ByTypes from '@comp/by-types';
import ByPrices from '@comp/by-prices';
import ByMakes from '@comp/by-makes';
import ByArticles from '@comp/by-articles';
import ByCities from '@comp/by-cities';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

const Home: React.FC = (props) => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch( setMakes( makes ) );
	}, []);
	
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
			<DefaultLayout>
				{/*<HeroImage />*/}

				<ByTypes items={BodyTypes} />

				<ByPrices items={Prices} type="prices" columns={3} />

				<ByMakes />

				<ByArticles items={HomeArticles} type="articles" columns={3} />

				<ByCities items={TopCities} type="cities" columns={3} />
			</DefaultLayout>
		</ThemeProvider>
	);
};

export default Home;