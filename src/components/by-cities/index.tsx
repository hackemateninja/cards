// Packages
import Scroll from 'react-scroll';

// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';
import SectionTitle from '@comp/section-title';

// Styles
import { ByCitiesWrapper } from './style';

const ByCities: React.FC<IList> = (props) => {
	const Element = Scroll.Element;
	return (
		<ByCitiesWrapper>
			<Element name="browseByLocation">
				<SectionTitle>Browse by Top Cities</SectionTitle>
				<List items={props.items} type={props.type} columns={props.columns} />
			</Element>
		</ByCitiesWrapper>
	);
};

export default ByCities;