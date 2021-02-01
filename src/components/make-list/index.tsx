// Packages
import React, { useState } from 'react';
import { useSelector } from "react-redux";

// Definitions
import { RootState } from '@def/TRootReducer';
import { IMake } from '@def/IMake';
import { IMakesList } from '@def/IList';

// Styles
import { MakeListWrapper, MakeListContainer, MakeListInfo, MakeListText, MakeListSpan, MakeListAccordionTrigger, MakeListAccordionText } from './style';

const MakeList: React.FC<IMakesList> = (props) => {
	const makes = useSelector((state: RootState) => state.makes.data.makes);

	const [accordion, setAccordion] = useState<boolean>(false);
	const handlerSubmit = ( e: React.MouseEvent<HTMLDivElement> ) => setAccordion(!accordion);

	return (
		<MakeListWrapper>
			<MakeListContainer type={props.type} active={accordion}>
				<MakeListInfo>
					<MakeListText href="#">
						<MakeListSpan>All Makes</MakeListSpan>
					</MakeListText>
				</MakeListInfo>
				{makes.map((item: IMake, index: number) => (
					<MakeListInfo key={index} type={props.type} collapse={item.collapse} active={accordion}>
						{/*href = { '/' + item.value }*/}
						<MakeListText href="#">
							<MakeListSpan>{item.name}</MakeListSpan>
						</MakeListText>
					</MakeListInfo>
				))}
			</MakeListContainer>
			{props.type === 'accordion' &&
				<MakeListAccordionTrigger onClick={handlerSubmit} active={accordion}>
					<MakeListAccordionText>Show all Makes</MakeListAccordionText>
					<MakeListAccordionText>Show less</MakeListAccordionText>
				</MakeListAccordionTrigger>
			}
		</MakeListWrapper>
	);
};

export default MakeList;