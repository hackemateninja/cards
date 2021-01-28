// Packages
import { ThemeProvider } from 'styled-components';

// Layout
import DefaultLayout from '@layout/default';

//Components
import HeroImage from '@comp/hero-image';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

const Home: React.FC = ( props ) => {
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
			<DefaultLayout>
				<HeroImage />
			</DefaultLayout>
		</ThemeProvider>
	);
};

export default Home;
