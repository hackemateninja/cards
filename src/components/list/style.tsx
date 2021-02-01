// Packages
import styled, { css } from 'styled-components';

const ListWrapper = styled.div`
	display: block;
`;
const ListContainer = styled.ul<{ type?: string }>`
	list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
	@media screen and ( min-width: 768px ) {
		flex-direction: column;
		${props => props.type === 'prices' && css`
			height: 200px;
		`}
		${props => props.type === 'articles' && css`
			height: 120px;
		`}
		${props => props.type === 'cities' && css`
			height: 350px;
		`}
	}
	@media screen and ( min-width: 1260px ) {
		${props => props.type === 'articles' && css`
			height: 100px;
		`}
	}
`;
const ListInfo = styled.li<{ type?: string; col: number }>`
	-webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
	${props => props.type === 'prices' && css`
		border-bottom: 1px solid rgba(0,0,0,0.1);
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			margin-top: -6px;
			right: 17px;
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-bottom: 6px solid transparent;
			border-left: 8px solid #0ae61e;
			display: block;
		}
	`}
	${props => props.type === 'articles' && css`
		&:last-child a {
			color: #00a0ff;
		}
	`}
	${props => props.type === 'cities' && css`
		border-bottom: 1px solid rgba(0,0,0,0.1);
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			margin-top: -6px;
			right: 17px;
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-bottom: 6px solid transparent;
			border-left: 8px solid #0ae61e;
			display: block;
		}
	`}
	@media screen and ( min-width: 768px ) {
		height: auto;
		max-height: 45px;
		-webkit-flex-basis: auto;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 100%;
		margin-bottom: 18px;
		${props => props.type === 'prices' && css`
			border-bottom: none;
			&:after {
				display: none;
			}
		`}
		${props => props.type === 'cities' && css`
			border-bottom: none;
			&:after {
				display: none;
			}
		`}
		${props => props.col === 3 && css`
			width: 33.333333%;
		`}
		${props => props.col === 4 && css`
			width: 25%;
		`}
	}
	@media screen and ( min-width: 1260px ) {
		max-height: 32px;
	}
`;
const ListText = styled.a`
	display: inline-block;
    padding: 12px 50px 12px 15px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #4c4c4c;
    font-size: 16px;
    line-height: 20px;
	-webkit-transition: all ease 0.3s;
	transition: all ease 0.3s;
	&:before {
		@media screen and ( min-width: 768px ) {
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
			transform: scale(0.7);
			-webkit-transition: all ease 0.3s;
			transition: all ease 0.3s;
		}
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
	@media screen and ( min-width: 768px ) {
		padding: 6px 10px;
		font-weight: bold;
		color: #707070;
	}
`;
const ListSpan = styled.span`
	display: block;
`;

export {
	ListWrapper,
	ListContainer,
	ListInfo,
	ListText,
	ListSpan
};