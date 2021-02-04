// Packages
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import absoluteUrl from 'next-absolute-url';

// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Layout
import DefaultLayout from '@layout/default';

//Components
import Container from '@comp/container';
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import Listings from '@comp/buy/listings'

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

const Buy: React.FC<IPlainObject> = ( props ) => {
	
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
							<Listings items={props.results} />
                        </Column>
                    </Row>
				</Container>
			</DefaultLayout>
		</ThemeProvider>
	);
};

export const getServerSideProps: GetServerSideProps = async ( context ) => {
	const { origin } = absoluteUrl(context.req, context.req.headers.host);
	const response = await fetch( `${origin}/api/results` );
	const results = await response.json();

	return {
		props: {
			results: results
		},
	}
}
export default Buy;