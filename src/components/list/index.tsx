// Components
import Container from '@comp/container';

// Definitions
import { IList } from '@def/IList';

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
					{TopCities.map((item: IList, index: number) => (
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