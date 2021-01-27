// Packages
import styled from 'styled-components';

const FooterWrapper = styled.div`
	background-color: #054664;
    padding: 10px 15px 72px;
	@media screen and ( min-width: 768px ) {
		padding: 15px 0;
	}
`;
const FooterContainer = styled.ul`
	list-style: none;
    padding: 0;
    margin: 0;
`;
const FooterList = styled.li`
	color: #fff;
`;
const FooterAnchor = styled.a`
	padding: 12px 0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
`;
const FooterText = styled.p`
	margin: 8px 0 0;
    color: #4a7f98;
    font-size: 12px;
    line-height: 16px;
	@media screen and ( min-width: 768px ) {
		margin: 15px 0 0;
	}
`;
export {
	FooterWrapper,
	FooterContainer,
	FooterList,
	FooterAnchor,
	FooterText
};