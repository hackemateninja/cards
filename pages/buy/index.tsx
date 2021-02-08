// Packages
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GetServerSideProps } from 'next';
import absoluteUrl from 'next-absolute-url';

// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Layout
import SRPLayout from '@layout/srp';

//Components
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
			<SRPLayout>
				<Listings items={props.results} />
			</SRPLayout>
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