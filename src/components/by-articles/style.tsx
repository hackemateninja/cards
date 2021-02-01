// Packages
import styled from 'styled-components';

const ByArticlesWrapper = styled.div`
	display: block;
	margin-bottom: 40px;
	@media screen and ( min-width: 1024px ) {
		margin-bottom: 80px;
	}
`;
const ByArticlesTitle = styled.h2`
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

export {
	ByArticlesWrapper,
	ByArticlesTitle
};