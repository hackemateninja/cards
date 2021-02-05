// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';
import SectionTitle from '@comp/section-title';

// Styles
import { ByCitiesWrapper } from './style';

const ByCities: React.FC<IList> = (props) => {
	return (
		<ByCitiesWrapper>
			<SectionTitle>Browse by Top Cities</SectionTitle>
			<List items={props.items} type={props.type} columns={props.columns} />
		</ByCitiesWrapper>
	);
};

export default ByCities;