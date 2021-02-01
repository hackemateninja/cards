// Packages
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button<{ st?: string }>`
	cursor: pointer;
	outline: 0;
	border-radius: 4px;
	padding: 8px 10px;
	width: 100%;
	display: inline-block;

	text-decoration: none;
	font-weight: bold;
	text-align: center;
	border: 1px solid rgba( 0, 0, 0, .1 );
	
	${props => props.st === undefined && css`
		font-size: 18px;
		line-height: 26px;
		background: #00DC14;
		color: #FFF;
		text-shadow: 0 1px 2px #00AB10;
	`}
	${props => props.st === 'browse' && css`
		background: #FFF;
		box-shadow: 0 5px 8px -4px rgba( 0, 0, 0, .2 );
		color: #00A0FF;
		font-size: 14px;
		line-height: 20px;
		width: auto;
	`}
`;

export {
	ButtonWrapper
};