// Packages
import { useSelector } from "react-redux";

// Definitions
import { RootState } from '@def/TRootReducer';
import { IMake } from '@def/IMake';

// Styles
import { MakeListWrapper, MakeListContainer, MakeListInfo, MakeListText, MakeListSpan } from './style';

const MakeList: React.FC = () => {
	const makes = useSelector(( state: RootState ) => state.makes.data.makes );

	return (
		<MakeListWrapper>
			<MakeListContainer>
				{makes.map((item: IMake, index: number) => (
					<MakeListInfo>
						<MakeListText>
							<MakeListSpan></MakeListSpan>
						</MakeListText>
					</MakeListInfo>
				))}
			</MakeListContainer>
		</MakeListWrapper>
	);
};

export default MakeList;