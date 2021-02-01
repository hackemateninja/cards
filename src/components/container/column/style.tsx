// Packages
import styled, { css } from 'styled-components';

const ColumnWrapper = styled.div<{ xs?: number | 'auto', sm?: number | 'auto', md?: number | 'auto', lg?: number | 'auto', xl?: number | 'auto' }>`
	-webkit-box-flex: 0;
	// XS
	${props => props.xs === 'auto' && css`
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 100%;
	`}
	${props => props.xs !== undefined && props.xs !== 'auto' && css`
		flex: 0 0 ${`${100 / props.xs}%`};
		max-width: ${`${100 / props.xs}%`};
		padding: 0 5px;
	`}
	// SM
	${props => props.sm === 'auto' && css`
		@media screen and ( min-width: 576px ) {
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			max-width: 100%;
		}
	`}
	${props => props.sm !== undefined && props.sm !== 'auto' && css`
		@media screen and ( min-width: 576px ) {
			flex: 0 0 ${`${100 / props.sm}%`};
			max-width: ${`${100 / props.sm}%`};
			padding: 0 7px;
		}
	`}
	// MD
	${props => props.md === 'auto' && css`
		@media screen and ( min-width: 768px ) {
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			max-width: 100%;
		}
	`}
	${props => props.md !== undefined && props.md !== 'auto' && css`
		@media screen and ( min-width: 768px ) {
			flex: 0 0 ${`${100 / props.md}%`};
			max-width: ${`${100 / props.md}%`};
			padding: 0 10px;
		}
	`}
	// LG
	${props => props.lg === 'auto' && css`
		@media screen and ( min-width: 1024px ) {
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			max-width: 100%;
		}
	`}
	${props => props.lg !== undefined && props.lg !== 'auto' && css`
		@media screen and ( min-width: 1024px ) {
			flex: 0 0 ${`${100 / props.lg}%`};
			max-width: ${`${100 / props.lg}%`};
			padding: 0 15px;
		}
	`}
	// XL
	${props => props.xl === 'auto' && css`
		@media screen and ( min-width: 1260px ) {
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			max-width: 100%;
		}
	`}
	${props => props.xl !== undefined && props.xl !== 'auto' && css`
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