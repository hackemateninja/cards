// Packages
import Scroll from 'react-scroll';

// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';
import Row from '@comp/container/row';
import Column from '@comp/container/column';
import Display from '@comp/container/display'
import SectionTitle from '@comp/section-title';

// Styles
import { ByPricesWrapper, ByPricesImg } from './style';

const ByPrices: React.FC<IList> = (props) => {
	const Element = Scroll.Element;
	return (
		<ByPricesWrapper>
			<Element name="browseByPrice">
				<SectionTitle>Browse by Price</SectionTitle>
				<Row>
					<Column xs={1} sm={1} md='auto'>
						<List items={props.items} type={props.type} columns={props.columns} />
					</Column>
					<Column xs={1} sm={1} md={4}>
						<Display hide="mobile">
							<ByPricesImg src="/assets/img/price-image.jpg" alt="Price Image" />
						</Display>
					</Column>
				</Row>
			</Element>
		</ByPricesWrapper>
	);
};

export default ByPrices;