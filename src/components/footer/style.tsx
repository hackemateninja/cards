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
	list-style-type: none;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
	@media screen and ( min-width: 768px ) {
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		height: 180px;
	}
`;
const FooterList = styled.li`
	-webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
	@media screen and ( min-width: 768px ) {
		width: 33.333333%;
		height: auto;
		max-height: 50px;
		-webkit-flex-basis: auto;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 100%;
	}
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