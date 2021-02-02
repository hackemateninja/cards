// Packages
import React, { useState } from 'react';
import Scroll from 'react-scroll';

// Definitions
import { IBodyTypes, IBodyType } from '@def/IBodyType';

// Components
import Row from '@comp/container/row';
import Column from '@comp/container/column'

// Styles
import { ByTypesWrapper, ByTypesTitle, ByTypesListWrapper, ByTypesList, ByTypesListText, ByTypesCategoryTitle, ByTypesSubTitle, ByTypesSubText, ByTypesDivision, ByTypesAccordion, ByTypesAccordionContent, ByTypesAccordionTrigger, ByTypesAccordionText } from './style';

const ByTypes: React.FC<IBodyTypes> = (props) => {
	const [accordion, setAccordion] = useState<boolean>(false);
	const handlerSubmit = (e: React.MouseEvent<HTMLDivElement>) => setAccordion(!accordion);
	const Element = Scroll.Element;

	return (
		<ByTypesWrapper>
			<Element name="browseByType">
				<ByTypesTitle>Search by Type</ByTypesTitle>
				<ByTypesListWrapper>
					{props.items.filter(item => item.category === 'bodytype').map((item: IBodyType, index: number) => (
						<ByTypesList key={index}>
							<ByTypesListText href={item.url} type={item.value}>{item.title}</ByTypesListText>
						</ByTypesList>
					))}
				</ByTypesListWrapper>

				<ByTypesAccordion>
					<ByTypesAccordionContent active={accordion}>
						<Row>
							<Column xs={1} sm={1} md={3}>
								<Row>
									<Column xs={1} sm={1} md={1}>
										<ByTypesCategoryTitle>Vehicle Size</ByTypesCategoryTitle>
									</Column>
									{props.items.filter(item => item.category === 'vehicleSize').map((item: IBodyType, index: number) => (
										<Column key={index} xs={2} sm={2} md={1} lg={2}>
											<ByTypesSubTitle href={item.url}>
												<ByTypesSubText>{item.title}</ByTypesSubText>
											</ByTypesSubTitle>
										</Column>
									))}
								</Row>
								<ByTypesDivision></ByTypesDivision>
							</Column>
							<Column xs={1} sm={1} md={3}>
								<Row>
									<Column xs={1} sm={1} md={1}>
										<ByTypesCategoryTitle>Alternative Fuel Type</ByTypesCategoryTitle>
									</Column>
									{props.items.filter(item => item.category === 'fuelType').map((item: IBodyType, index: number) => (
										<Column key={index} xs={2} sm={2} md={1} lg={2}>
											<ByTypesSubTitle href={item.url}>
												<ByTypesSubText>{item.title}</ByTypesSubText>
											</ByTypesSubTitle>
										</Column>
									))}
								</Row>
								<ByTypesDivision></ByTypesDivision>
							</Column>
							<Column xs={1} sm={1} md={3}>
								<Row>
									<Column xs={1} sm={1} md={1}>
										<ByTypesCategoryTitle>Luxury & Performance</ByTypesCategoryTitle>
									</Column>
									{props.items.filter(item => item.category === 'performance').map((item: IBodyType, index: number) => (
										<Column key={index} xs={2} sm={2} md={1} lg={2}>
											<ByTypesSubTitle href={item.url}>
												<ByTypesSubText>{item.title}</ByTypesSubText>
											</ByTypesSubTitle>
										</Column>
									))}
								</Row>
							</Column>
						</Row>
					</ByTypesAccordionContent>
					<ByTypesAccordionTrigger active={accordion} onClick={handlerSubmit}>
						<ByTypesAccordionText>Or choose Fuel Type, Performance or Car Size</ByTypesAccordionText>
						<ByTypesAccordionText>Show less options</ByTypesAccordionText>
					</ByTypesAccordionTrigger>
				</ByTypesAccordion>
			</Element>
		</ByTypesWrapper>
	);
};

export default ByTypes;