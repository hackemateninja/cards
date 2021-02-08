// Packages
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

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
import HeroImage from '@comp/home/hero-image';
import SearchBox from '@comp/home/search-box';
import ByTypes from '@comp/home/by-types';
import ByPrices from '@comp/home/by-prices';
import ByMakes from '@comp/home/by-makes';
import ByArticles from '@comp/home/by-articles';
import HotDeals from '@comp/home/hot-deals';
import ByCities from '@comp/home/by-cities';
import Spaces from '@comp/spaces';
import BackToTop from '@comp/back-to-top'
import Display from '@comp/container/display';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

const Home: React.FC = ( props ) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMakes(makes));
	}, []);
	
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<Head>
				<title>Used Cars For Sale | Pre-Owned Cars, Trucks and SUVs at UsedCars.com</title>
			</Head>
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
				</Container>

				<HotDeals />

				<Container>
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