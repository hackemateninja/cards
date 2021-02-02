// Packages
import { useEffect, useRef } from 'react';
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
import Container from '@comp/container';
import HeroImage from '@comp/hero-image';
import ByTypes from '@comp/by-types';
import ByPrices from '@comp/by-prices';
import ByMakes from '@comp/by-makes';
import ByArticles from '@comp/by-articles';
import ByCities from '@comp/by-cities';
import Spaces from '@comp/spaces';
import BackToTop from '@comp/back-to-top'
import Display from '@comp/container/display';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';
import SearchBox from '@comp/search-box';

const Home: React.FC = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMakes(makes));
	}, []);
	
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
			<DefaultLayout>
				<Container>
					<HeroImage />					
					<SearchBox />

					<Spaces type="desktop">
						<img src="assets/img/banners/banner-02.png" alt="Space Desktop 2" />
					</Spaces>
					
					<ByTypes items={BodyTypes} />

					<Spaces type="mobile" bg={true}>
						<img src="assets/img/banners/banner-01-m.jpg" alt="Space Mobile 1" />
					</Spaces>

					<ByPrices items={Prices} type="prices" columns={3} />
					<ByMakes />

					<Spaces type="desktop" bg={true}>
						<img src="assets/img/banners/banner-01.jpg" alt="Space Desktop 1" />
					</Spaces>

					<ByArticles items={HomeArticles} type="articles" columns={3} />

					<Spaces type="mobile" bg={true}>
						<img src="assets/img/banners/banner-02-m.jpg" alt="Space Mobile 2" />
					</Spaces>

					<ByCities items={TopCities} type="cities" columns={3} />

					<Spaces type="desktop" bg={true}>
						<img src="assets/img/banners/banner-01.jpg" alt="Space Desktop 1" />
					</Spaces>

					<Spaces type="mobile" bg={true}>
						<img src="assets/img/banners/banner-02-m.jpg" alt="Space Mobile 2" />
					</Spaces>

					<Spaces type="floated" bg={true}>
						<img src="assets/img/banners/banner-01-m.jpg" alt="Space Mobile 1" />
					</Spaces>

					<Display hide="desktop">
						<BackToTop />
					</Display>

				</Container>				
			</DefaultLayout>
		</ThemeProvider>
	);
};

export default Home;