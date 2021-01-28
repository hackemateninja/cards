// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';

// Styles
import { ByCitiesWrapper, ByCitiesTitle } from './style';

const ByCities: React.FC<IList> = (props) => {
	return (
		<ByCitiesWrapper>
			<ByCitiesTitle>Browse by Top Cities</ByCitiesTitle>
			<List items={props.items} type={props.type} columns={props.columns} />
		</ByCitiesWrapper>
	);
};

export default ByCities;