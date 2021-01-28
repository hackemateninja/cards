// Packages
import styled from 'styled-components';

const ByPricesWrapper = styled.div`
	display: block;
`;
const ByPricesTitle = styled.div`
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
const ByPricesImg = styled.img`
	max-width: 100%;
    width: 100%;
    height: auto;
`;

export {
	ByPricesWrapper,
	ByPricesTitle,
	ByPricesImg
};