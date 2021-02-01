// Packages
import { ThemeProvider } from 'styled-components';

// Layout
import DefaultLayout from '@layout/default';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

// Data
import { TopCities } from '@data/TopCities';
import { HomeArticles } from '@data/HomeArticles';
import { Prices } from '@data/Prices';
import { BodyTypes } from '@data/BodyTypes';

//Components
// import HeroImage from '@comp/hero-image';
import ByTypes from '@comp/by-types';
import ByPrices from '@comp/by-prices';
import ByArticles from '@comp/by-articles';
import ByCities from '@comp/by-cities';

const Home: React.FC = ( props ) => {
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
			<DefaultLayout>
				{/*<HeroImage />*/}

				<ByTypes items={BodyTypes} />

				<ByPrices items={Prices} type="prices" columns={3} />

				<ByArticles items={HomeArticles} type="articles" columns={3} />

				<ByCities items={TopCities} type="cities" columns={3} />
			</DefaultLayout>
		</ThemeProvider>
	);
};

export default Home;