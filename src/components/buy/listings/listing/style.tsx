// Packages
import styled, { css } from 'styled-components';

const ListingWrapper = styled.a`
    display: flex;
    flex-wrap: wrap;
	border: 1px solid rgba(0,0,0,.1);
	border-radius: 6px;
	background-color: #F6F6F6;
	margin: 15px 0;
	overflow: hidden;
	text-decoration: none;
`;
const ListingImg = styled.div`
	-webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
	background: green;
`;
const ListingMain = styled.div`
	-webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
	order: 2;
	@media screen and ( min-width: 768px ) {
		order: 0;
	}
`;
const ListingInfo = styled.div`
	-webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
`;
const ListingMainTrigger = styled.div<{ active?: boolean }>`
	background-color: #E0E0E0;
	text-align: center;
	padding: 6px;
	color: #707070;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	@media screen and ( min-width: 768px ) {
		display: none;
	}
	&:after {
		content: '';
		display: inline-block;
		vertical-align: middle;
		margin-top: -1px;
		margin-left: 5px;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 6px solid rgba(0,0,0,.3);
		-webkit-transform: none;
		-ms-transform: none;
		transform: none;
		-webkit-transition: all cubic-bezier( .68,-.55,.265,1.55 ) .3s;
		transition: all cubic-bezier( .68,-.55,.265,1.55 ) .3s;
		transform: ${props => props.active ? 'rotate( -180deg )' : 'none'};
	}
`;
const ListingMainContent = styled.div<{ active?: boolean }>`
	transition: all .3s ease-in-out;
    max-height: 0;
	${(props) => props.active === true && css`
		max-height: 500px;
	`}
	@media screen and ( min-width: 768px ) {
		max-height: 100%;
	}
`;
const ListingMainContentPad = styled.span`
	padding: 15px;
    display: block;
	@media screen and ( min-width: 768px ) {
		padding: 0;
	}
`;
const ListingMainTitle = styled.span`
	display: none;
`;
const ListingMainSpecs = styled.span`
	
`;
const ListingMainSpec = styled.span`
	display: block;
	margin-bottom: 8px;
	color: #054664;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	&:last-child {
		margin-bottom: 15px;
	}
	span {
		color: #707070;
		font-size: 12px;
		line-height: 16px;
		font-weight: 300;
	}
`;
const ListingMainLocation = styled.span`
	display: none;
`;
const ListingMainButton = styled.span`
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 4px;
	background-color: #0AE61E;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	line-height: 40px;
	text-align: center;
	text-shadow: 0 1px 2px #07AB16;
	display: block;
`;
const ListingInfoSale = styled.span`
	
`;
const ListingInfoPrice = styled.span`
	
`;
const ListingInfoPayment = styled.span`
	
`;
const ListingInfoTitle = styled.span`
	
`;
const ListingInfoMiles = styled.span`
	
`;
const ListingInfoLocation = styled.span`
	
`;
const ListingInfoBtn = styled.span`
	
`;

export {
	ListingWrapper,
	ListingImg,
	ListingMain,
	ListingInfo,
	ListingMainTrigger,
	ListingMainContent,
	ListingMainContentPad,
	ListingMainTitle,
	ListingMainSpecs,
	ListingMainSpec,
	ListingMainLocation,
	ListingMainButton,
	ListingInfoSale,
	ListingInfoPrice,
	ListingInfoPayment,
	ListingInfoTitle,
	ListingInfoMiles,
	ListingInfoLocation,
	ListingInfoBtn
};