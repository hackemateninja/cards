// Components
import Container from '@comp/container';

// Definitions
import { IListContent } from '@def/IListContent';

// Styles
import { ListWrapper, ListContainer, ListInfo, ListText } from './style';

const TopCities = [
	{ url: '/', title: 'Brimfield, MA' },
	{ url: '/', title: 'Contact Us' },
];

const List: React.FC = () => {
	return (
		<ListWrapper>
			<Container>
				<ListContainer>
					{TopCities.map((item: IListContent, index: number) => (
						<ListInfo key={index}>
							<ListText href={item.url}>{item.title}</ListText>
						</ListInfo>
					))}
				</ListContainer>
			</Container>
		</ListWrapper>
	);
};

export default List;