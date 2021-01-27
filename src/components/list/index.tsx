// Definitions
<<<<<<< HEAD
import { IList, IListContent } from '@def/IList';
=======
import { IList } from '@def/IList';
>>>>>>> 31e0c2d0d046ad799f31d844bfc0a98ff38f35e0

// Styles
import { ListWrapper, ListContainer, ListInfo, ListText, ListSpan } from './style';

const List: React.FC<IList> = (props) => {
	return (
		<ListWrapper>
<<<<<<< HEAD
			<ListContainer type={props.type}>
				{props.items.map((item: IListContent, index: number) => (
					<ListInfo type={props.type} col={props.columns} key={index}>
						<ListText href={item.url}><ListSpan>{item.title}</ListSpan></ListText>
					</ListInfo>
				))}
			</ListContainer>
=======
			<Container>
				<ListContainer>
					{TopCities.map((item: IList, index: number) => (
						<ListInfo key={index}>
							<ListText href={item.url}>{item.title}</ListText>
						</ListInfo>
					))}
				</ListContainer>
			</Container>
>>>>>>> 31e0c2d0d046ad799f31d844bfc0a98ff38f35e0
		</ListWrapper>
	);
};

export default List;