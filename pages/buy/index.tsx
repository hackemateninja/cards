// Packages
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

// Layout
import DefaultLayout from '@layout/default';

//Components
import Container from '@comp/container';
import Row from '@comp/container/row';
import Column from '@comp/container/column';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

const Buy: React.FC = ( props ) => {
	
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<Head>
				<title>Buy Used Cars - Shop Used Cars</title>
			</Head>
			<GlobalStyles />
			<DefaultLayout>
				<Container>
                    <Row>
                        <Column xs={1} md={4}>
                            <p>Filters</p>
                        </Column>
                        <Column xs={1} md='auto'>
                            <p>Listings</p>
                        </Column>
                    </Row>
				</Container>
			</DefaultLayout>
		</ThemeProvider>
	);
};

export default Buy;