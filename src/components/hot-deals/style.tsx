// Packages
import styled from 'styled-components';

const HotDealsWrapper = styled.div`
	overflow: hidden;
	margin: 40px 0;
	padding: 0 15px;

	@media screen and ( min-width: 1024px ) {
		margin: 80px 0;
    padding: 40px 0;
    background-color: #F6F6F6;
	}
`;

const HotDealsSlider = styled.div`
	@media screen and ( min-width: 1024px ) {
		padding: 0;
		margin: 0 auto;
		width: 790px;
	}
	@media screen and ( min-width: 1260px ) {
		width: 1060px;
	}
`;

export {
	HotDealsWrapper,
	HotDealsSlider
};