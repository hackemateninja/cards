// Packages
import styled, { css } from 'styled-components';

const MakeListWrapper = styled.div`
	display: block;
`;
const MakeListContainer = styled.ul<{ type?: string; active?: boolean }>`
	list-style: none;
    padding-left: 0;
    margin: 0;
    height: auto;
    overflow: hidden;
	max-height:  ${(props) => (props.type === 'accordion' ? '660px' : '4000px')};
	max-height:  ${(props) => (props.type === 'accordion' && props.active === true && '4000px')};
	@media screen and ( min-width: 768px ) {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		height: 100%;
		max-height:  ${(props) => (props.type === 'accordion' ? '660px' : '1260px')};
		max-height:  ${(props) => (props.type === 'accordion' && props.active === true && '1260px')};
	}
`;
const MakeListInfo = styled.li<{ type?: string; collapse?: boolean; active?: boolean }>`
	margin: 0 0 20px;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 36px;
	${props => props.collapse === true && props.type === 'accordion' && css`display: none;`}
	${props => props.active === true && props.type === 'accordion' && css`display: block;`}
	@media screen and ( min-width: 768px ) {
		width: 33.333333%;
	}
	&:first-child {
		a {color: #00a0ff;}
	}
`;
const MakeListText = styled.a`
	display: inline-block;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
	padding: 6px 10px;
    font-weight: bold;
    color: #707070;
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
		-webkit-transform: scale(0.7);
		-ms-transform: scale(0.7);
		-webkit-transform: scale(0.7);
		-ms-transform: scale(0.7);
		transform: scale(0.7);
		-webkit-transition: all ease 0.3s;
		-webkit-transition: all ease 0.3s;
		transition: all ease 0.3s;
	}
	&:hover {
		@media screen and ( min-width: 768px ) {
			color: #00a0ff;
			&:before {
				opacity: 1;
				-webkit-transform: scale(1);
				-ms-transform: scale(1);
				transform: scale(1);
			}
		}
	}
`;
const MakeListSpan = styled.span`
	display: block;
`;
const MakeListAccordionTrigger = styled.div<{ active?: boolean }>`
	text-align: center;
    padding-top: 10px;
	cursor: pointer;
    border-top: 1px solid rgba(0,0,0,0.2);
	@media screen and ( min-width: 768px ) {
		margin-top: 20px;
	}
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
const MakeListAccordionText = styled.span`
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
	MakeListWrapper,
	MakeListContainer,
	MakeListInfo,
	MakeListText,
	MakeListSpan,
	MakeListAccordionTrigger,
	MakeListAccordionText
};