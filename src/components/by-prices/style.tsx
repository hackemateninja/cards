// Packages
import styled from 'styled-components';

const ByPricesWrapper = styled.div`
	display: block;
	margin-bottom: 40px;
	@media screen and ( min-width: 1024px ) {
		margin-bottom: 80px;
	}
`;
const ByPricesImg = styled.img`
	max-width: 100%;
    width: 100%;
    height: auto;
`;

export {
	ByPricesWrapper,
	ByPricesImg
};