// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';
import SectionTitle from '@comp/section-title';

// Styles
import { ByArticlesWrapper } from './style';

const ByArticles: React.FC<IList> = (props) => {
	return (
		<ByArticlesWrapper>
			<SectionTitle>Articles & Tips</SectionTitle>
			<List items={props.items} type={props.type} columns={props.columns} />
		</ByArticlesWrapper>
	);
};

export default ByArticles;