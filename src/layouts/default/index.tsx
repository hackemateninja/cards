// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Components
import Header from '@comp/header';
import Container from '@comp/container';
import Footer from '@comp/footer';
import SVGs from '@comp/svgs';

const DefaultLayout: React.FC<IPlainObject> = ( props ) => {
	return (
		<>
			<Header />
			<Container>
				{props.children}
			</Container>
			<Footer />
			<SVGs />
		</>
	);
};

export default DefaultLayout;