// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Components
import Header from '@comp/header';
import Footer from '@comp/footer';
import SVGs from '@comp/svgs';

const DefaultLayout: React.FC<IPlainObject> = ( props ) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
			<SVGs />
		</>
	);
};

export default DefaultLayout;