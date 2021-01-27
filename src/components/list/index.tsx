// Components
import Container from '@/comp/container';

// Definitions
import { IListContent } from '@/def/IListContent';

// Styles
import { ListWrapper, ListContainer, ListInfo, ListText } from './style';

const TopCities = [
	{ url: '/', title: 'About Us' },
	{ url: '/', title: 'Contact Us' },
];

const List: React.FC = () => {
	return (
		<ListWrapper>
			<Container>
				<ListContainer>
					{TopCities.map((item: IListContent, index: number) => (
						<ListInfo>
							<ListText>Brimfield, MA</ListText>
						</ListInfo>
					))}
				</ListContainer>
			</Container>
		</ListWrapper>
	);
};

export default List;