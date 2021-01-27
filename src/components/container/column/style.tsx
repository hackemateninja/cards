// Packages
import styled, { css } from 'styled-components';

const ColumnWrapper = styled.div<{ xs?: number, sm?: number, md?: number, lg?: number, xl?: number }>`
	-webkit-box-flex: 0;
	${props => props.xs !== undefined && css`
		flex: 0 0 ${`${100 / props.sm}%`};
		max-width: ${`${100 / props.sm}%`};
		padding: 0 5px;
	`}
	${props => props.sm !== undefined && css`
		@media screen and ( min-width: 576px ) {
			flex: 0 0 ${`${100 / props.sm}%`};
			max-width: ${`${100 / props.sm}%`};
			padding: 0 7px;
		}
	`}
	${props => props.md !== undefined && css`
		@media screen and ( min-width: 768px ) {
			flex: 0 0 ${`${100 / props.md}%`};
			max-width: ${`${100 / props.md}%`};
			padding: 0 10px;
		}
	`}
	${props => props.lg !== undefined && css`
		@media screen and ( min-width: 1024px ) {
			flex: 0 0 ${`${100 / props.lg}%`};
			max-width: ${`${100 / props.lg}%`};
			padding: 0 15px;
		}
	`}
	${props => props.xl !== undefined && css`
		@media screen and ( min-width: 1260px ) {
			flex: 0 0 ${`${100 / props.xl}%`};
			max-width: ${`${100 / props.xl}%`};
			padding: 0 15px;
		}
	`}
`;

export {
	ColumnWrapper
};