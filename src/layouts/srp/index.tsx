// Definitions
import { IPlainObject } from '@def/IPlainObject';

// Components
import Header from '@comp/header';
import Footer from '@comp/footer';
import SVGs from '@comp/svgs';
import Container from '@comp/container';
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import SRPSidebar from '@comp/buy/sidebar';

const SRPLayout: React.FC<IPlainObject> = ( props ) => {
	return (
		<>
			<Header />
			<div>Breadcrumbs</div>
			<Container>
				<Row>
					<Column xs={1} md={4}>
						<SRPSidebar />
					</Column>
					<Column xs={1} md='auto'>
						{props.children}
					</Column>
				</Row>
			</Container>
			<Footer />
			<SVGs />
		</>
	);
};

export default SRPLayout;