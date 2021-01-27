// Definitions
import { IList, IListContent } from '@def/IList';

// Styles
import { ListWrapper, ListContainer, ListInfo, ListText, ListSpan } from './style';

const List: React.FC<IList> = (props) => {
	return (
		<ListWrapper>
			<ListContainer type={props.type}>
				{props.items.map((item: IListContent, index: number) => (
					<ListInfo type={props.type} col={props.columns} key={index}>
						<ListText href={item.url}><ListSpan>{item.title}</ListSpan></ListText>
					</ListInfo>
				))}
			</ListContainer>
		</ListWrapper>
	);
};

export default List;