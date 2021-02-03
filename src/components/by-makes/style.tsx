// Packages
import styled, { css } from 'styled-components';

const ByMakesWrapper = styled.div`
	display: block;
	margin-bottom: 40px;
	@media screen and ( min-width: 1024px ) {
		margin-bottom: 80px;
	}
`;
const ByMakesImg = styled.img`
	max-width: 100%;
    width: 100%;
    height: auto;
`;
const ByMakesSideTitle = styled.h4`
	color: #00a0ff;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin: 40px 0 12px;
`;
const ByMakesSideText = styled.p`
	color: #054664;
    font-size: 14px;
    line-height: 18px;
    margin: 12px 0;
`;

export {
	ByMakesWrapper,
	ByMakesImg,
	ByMakesSideTitle,
	ByMakesSideText
};