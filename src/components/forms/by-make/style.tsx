// Packages
import styled, { css } from 'styled-components';

const ByMakeFormWrapper = styled.form<{ type: string }>`
	${props => props.type === 'search-box' && css`
		@media screen and ( min-width: 768px ) {
			display: flex;
			flex-wrap: wrap;
			> div {
				flex: 0 0 32%;
				max-width: 32%;
				margin-right: 1.95%;
				&:nth-child(3) {
					margin-right: 0;
				}
			}
		}

		@media screen and ( min-width: 1260px ) {
			> div {
				flex-basis: 0;
				flex-grow: 1;
				max-width: 100%;
				margin-bottom: 0;
				margin-right: 15px;
				&:nth-child(3) {
					margin-right: 15px;
				}
			}
			> button {
				flex: 0 0 100px;
				max-width: 100px;
			}
		}
	`}
`;

export {
	ByMakeFormWrapper
};