// Definitions
import { IList } from '@def/IList';

//Components
import List from '@comp/list';

// Styles
import { ByArticlesWrapper, ByArticlesTitle } from './style';

const ByArticles: React.FC<IList> = (props) => {
	return (
		<ByArticlesWrapper>
			<ByArticlesTitle>Articles & Tips</ByArticlesTitle>
			<List items={props.items} type={props.type} columns={props.columns} />
		</ByArticlesWrapper>
	);
};

export default ByArticles;