// Packages
import styled, { css } from 'styled-components';

const SpacesWrapper = styled.div<{ type?: string; bg?: boolean }>`
	margin: 40px 0;
	text-align: center;
	display: ${props => props.type === 'desktop' && 'none'};
	@media screen and ( min-width: 768px ) {
		display: ${(props) => (props.type === 'desktop' ? 'block' : 'none')};	
	}
	${props => props.bg === true && css`
		border: 1px solid rgba(0,0,0,0.1);
		background-color: rgba(0,0,0,0.05);
		margin: 0 -15px 40px;
		padding: 5px 0;
		@media screen and ( min-width: 768px ) {
			padding: 0;
			margin: 0 0 80px;
		}
	`}
	${props => props.type === 'floated' && css`
		text-align: center;
		border: 1px solid rgba(0,0,0,0.1);
		background-color: rgba(0,0,0,0.05);
		padding: 6px 0;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 2;
	`}
	img {
		display: block;
		margin: auto;
	}
`;
export {
	SpacesWrapper
};