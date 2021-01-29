// Packages
import styled, { css } from 'styled-components';

const ByTypesWrapper = styled.div`
	margin-bottom: 40px;
	@media screen and ( min-width: 1024px ) {
		margin-bottom: 80px;
	}
`;
const ByTypesTitle = styled.div`
	color: #00a0ff;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    margin: 0 0 20px;
	@media screen and ( min-width: 768px ) {
		font-size: 28px;
		line-height: 32px;
		text-align: center;
		margin: 0 0 40px;
	}
`;
const ByTypesListWrapper = styled.ul`
	list-style: none;
    padding-left: 0;
    margin: 0;
    height: auto;
    max-height: 330px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
`;
const ByTypesList = styled.li`
	width: 33.33%;
	@media screen and ( min-width: 1280px ) {
		width: 11.11%;
	}
`;
const ByTypesListText = styled.a<{ type?: string }>`
    text-decoration: none;
    color: #707070;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    padding: 10px 10px 20px;
    display: block;
    max-width: 110px;
    margin: auto;
    max-height: 110px;
    transition: color ease 0.3s;
	&:before {
		content: '';
		width: 90px;
		height: 56px;
		background-image: url('assets/img/bodytype.png');
		background-size: 270px 168px;
		background-repeat: no-repeat;
		display: block;
		margin: 0 auto 5px;
		-webkit-transition: all ease 0.3s;
		transition: all ease 0.3s;
		${props => props.type === 'coupes' && css`background-position: 0 0;`}
		${props => props.type === 'convertibles' && css`background-position: -90px 0;`}
		${props => props.type === 'sedans' && css`background-position: -180px 0;`}
		${props => props.type === 'wagons' && css`background-position: 0 -56px;`}
		${props => props.type === 'hatchbacks' && css`background-position: -90px -56px;`}
		${props => props.type === 'minivans' && css`background-position: -180px -56px;`}
		${props => props.type === 'pickup-trucks' && css`background-position: 0 -112px;`}
		${props => props.type === 'suvs' && css`background-position: -90px -112px;`}
		${props => props.type === 'crossovers' && css`background-position: -180px -112px;`}
	}
	&:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		width: 110px;
		height: 110px;
		background-color: #f6f6f6;
		opacity: 0;
		-webkit-border-radius: 4px;
		border-radius: 4px;
		transform: scale(0.7);
		transition: all ease 0.3s;
		z-index: -1;
		margin: auto;
	}
	&:hover {
		@media screen and ( min-width: 1024px ) {
			color: #00a0ff;
			&:before {
				background-image: url('assets/img/bodytype-h.png');
			}
			&:after {
				opacity: 1;
				-webkit-transform: scale(1);
				-ms-transform: scale(1);
				transform: scale(1);
			}
		}
	}
`;
const ByTypesCategoryTitle = styled.div`
	color: #00a0ff;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    margin: 20px 0;
	padding: 0 10px;
	@media screen and ( min-width: 1024px ) {
		font-size: 16px;
		margin: 40px 0 20px;
		color: #054664;
	}
`;
const ByTypesSubTitle = styled.a`
    padding: 6px 10px;
    font-weight: 700;
	font-size: 16px;
    line-height: 20px;
    color: #707070;
	display: inline-block;
	text-decoration: none;
    transition: all ease 0.3s;
	margin-bottom: 10px;
	@media screen and ( min-width: 1024px ) {
		margin-bottom: 18px;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: #f6f6f6;
			opacity: 0;
			border-radius: 4px;
			transform: scale(0.7);
			transition: all ease 0.3s;
		}
		&:hover {
			color: #00a0ff;
			&:before {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
`;
const ByTypesSubText = styled.span`
	display: block;
`;
const ByTypesDivision = styled.span`
	@media screen and ( min-width: 1024px ) {
		width: 1px;
		height: 70%;
		background-color: #ccc;
		display: block;
		position: absolute;
		top: 35px;
		right: 15px;
	}
`;
const ByTypesAccordion = styled.div`
	display: block;
`;
const ByTypesAccordionContent = styled.div<{ active: boolean }>`
	display: none;
	${props => props.active !== false && css`
		display: block;
	`}
`;
const ByTypesAccordionTrigger = styled.div<{ active: boolean }>`
	text-align: center;
    padding-top: 10px;
    margin-top: 20px;
	cursor: pointer;
    border-top: 1px solid rgba(0,0,0,0.2);
	span {
		&:last-child {display: none;}
	}
	${props => props.active !== false && css`
		span {
			&:first-child {display: none;}
			&:last-child {display: inline-block;}
		}
	`}
	&:after {
		content: '';
		top: 1px;
		display: inline-block;
		vertical-align: middle;
		width: 12px;
		height: 12px;
		background-image: url('assets/img/icons-accordion.svg');
		transition: transform ease 0.3s;
		${props => props.active !== false && css`
			background-position: -12px 0;
		`}
	}
	&:hover {
		&:after {
			transform: rotate(-180deg);
		}
	}
`;
const ByTypesAccordionText = styled.span`
	color: #00a0ff;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    padding: 10px;
	display: inline-block;
	vertical-align: middle;
    text-align: center;
`;

export {
	ByTypesWrapper,
	ByTypesTitle,
	ByTypesListWrapper,
	ByTypesList,
	ByTypesListText,
	ByTypesCategoryTitle,
	ByTypesSubTitle,
	ByTypesSubText,
	ByTypesDivision,
	ByTypesAccordion,
	ByTypesAccordionContent,
	ByTypesAccordionTrigger,
	ByTypesAccordionText
};