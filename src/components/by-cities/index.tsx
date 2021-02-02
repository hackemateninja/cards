// Packages
import Scroll from 'react-scroll';

// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';

// Styles
import { ByCitiesWrapper, ByCitiesTitle } from './style';

const ByCities: React.FC<IList> = (props) => {
	const Element = Scroll.Element;
	return (
		<ByCitiesWrapper>
			<Element name="browseByLocation">
				<ByCitiesTitle>Browse by Top Cities</ByCitiesTitle>
				<List items={props.items} type={props.type} columns={props.columns} />
			</Element>
		</ByCitiesWrapper>
	);
};

export default ByCities;