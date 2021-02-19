// Packages
import styled, { css } from 'styled-components';

const ListingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
	-webkit-box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.1);
	-moz-box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.1);
	box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.1);
	border-radius: 6px;
	background-color: #F6F6F6;
	margin: 15px 0;
	overflow: hidden;
	@media screen and ( min-width: 768px ) {
		flex-wrap: nowrap;
	}
`;
const ListingImg = styled.div`
	-webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
	background-color: #fff;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	@media screen and ( min-width: 768px ) {
		flex: 0 0 150px;
		max-width: 150px;
		border-bottom: none;
		margin-bottom: 1px;
		margin-left: 1px;
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	@media screen and ( min-width: 1260px ) {
		flex: 0 0 252px;
		max-width: 252px;
	}
`;
const ListingMainText = styled.a`
	text-decoration: none;
	width: 100%;
	display: flex;
    flex-wrap: wrap;
	@media screen and ( min-width: 768px ) {
		flex-wrap: nowrap;
	}
`;
const ListingMain = styled.span`
	-webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
	order: 2;
	@media screen and ( min-width: 768px ) {
		order: 0;
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 100%;
		padding: 10px;
	}
	@media screen and ( min-width: 1260px ) {
		padding: 20px;
	}
`;
const ListingInfo = styled.span`
	-webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
	padding: 10px 15px;
	span:nth-last-child(2) {
		margin-bottom: 0;
	}
	@media screen and ( min-width: 768px ) {
		flex: 0 0 180px;
		max-width: 180px;
		padding: 10px;
	}
	@media screen and ( min-width: 1260px ) {
		flex: 0 0 206px;
		max-width: 206px;
		padding: 10px 20px 20px 0;
	}
`;
const ListingMainTrigger = styled.span<{ active?: boolean }>`
	background-color: #E0E0E0;
	text-align: center;
	padding: 6px;
	color: #707070;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	display: block;
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
const ListingMainContent = styled.span<{ active?: boolean }>`
	display: block;
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
	@media screen and ( min-width: 768px ) {
		display: block;
		color: #054664;
		font-size: 18px;
		font-weight: 700;
		line-height: 22px;
		margin: 10px 0 8px;
	}
	@media screen and ( min-width: 1024px ) {
		margin: 0 0 8px;
	}
`;
const ListingMainSpecsContainer = styled.span`
	@media screen and ( min-width: 1024px ) {
		display: block;
		min-height: 168px;
	}
	@media screen and ( min-width: 1260px ) {
		min-height: 158px;
	}
`;
const ListingMainSpecs = styled.span`
	@media screen and ( min-width: 768px ) {
		display: flex;
		flex-wrap: wrap;
	}
`;
const ListingMainSpec = styled.span`
	display: flex;
	margin-bottom: 8px;
	line-height: 16px;
	font-size: 12px;
	&:last-child {
		margin-bottom: 15px;
	}
	span {
		&:first-child {
			color: #054664;
			font-weight: 700;
			padding-right: 5px;
		}
		&:last-child {
			color: #707070;
			font-weight: 300;
			-ms-flex-preferred-size: 0;
			flex-basis: 0;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			-ms-flex-negative: 1;
			flex-shrink: 1;
			-webkit-box-flex: 0;
			word-break: break-word;
		}
	}
	@media screen and ( min-width: 768px ) {
		-ms-flex-preferred-size: 0;
		flex-basis: 0;
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		-ms-flex-negative: 1;
		flex-shrink: 1;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
		padding-right: 5px;
		&:last-child {
			margin-bottom: 8px;
		}
	}
	@media screen and ( min-width: 1024px ) {
		&:nth-child(1), &:nth-child(2) {
			margin-bottom: 20px;
		}
	}
`;
const ListingMainLocation = styled.span`
	display: none;
	@media screen and ( min-width: 768px ) {
		display: flex;
		color: #707070;
		font-size: 12px;
		line-height: 16px;
		align-items: center;
		margin: 10px 0;
	}
	@media screen and ( min-width: 1024px ) {
		margin: 10px 0 0;
	}
`;
const ListingMainLocationSvg = styled.svg`
	height: 16px;
	width: 12px;
	margin-right: 12px;
	fill: rgba(0,0,0,.2);
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
	@media screen and ( min-width: 768px ) {
		display: none;
	}
`;
const ListingInfoSale = styled.span`
	display: block;
	padding-right: 120px;
	@media screen and ( min-width: 768px ) {
		margin-top: 36px;
		padding-right: 0;
	}
`;
const ListingInfoPrice = styled.span`
	color: #00A0FF;
	font-size: 22px;
	font-weight: 700;
	line-height: 26px;
	margin-bottom: 4px;
	display: inline-block;
	span {display: none;}
	@media screen and ( min-width: 768px ) {
		font-size: 28px;
		line-height: 32px;
		span {
			display: block;
			font-size: 14px;
			font-weight: 700;
			line-height: 20px;	
		}
	}
`;
const ListingInfoPayment = styled.span`
	color: #707070;
	font-size: 16px;
	line-height: 20px;
	margin: 0 0 4px 6px;
	display: inline-block;
	span {display: none;}
	@media screen and ( min-width: 768px ) {
		font-size: 14px;
		line-height: 20px;
		margin: 9px 0 2px;
		span {
			display: block;
			font-size: 12px;
			line-height: 16px;
			margin-bottom: 2px;
		}
	}
`;
const ListingInfoTitle = styled.span`
	color: #054664;
	font-size: 16px;
	font-weight: 700;
	line-height: 20px;
	display: block;
	margin-bottom: 4px;
	@media screen and ( min-width: 768px ) {
		display: none;
	}
`;
const ListingInfoText = styled.span`
	color: #707070;
	font-size: 12px;
	line-height: 16px;
	display: block;
	margin-bottom: 4px;
	@media screen and ( min-width: 768px ) {
		display: none;
	}
`;
const ListingInfoMonths = styled.span`
	@media screen and ( min-width: 768px ) {
		color: #B2B2B2;
		font-size: 12px;
		line-height: 16px;	
	}
`;
const ListingInfoBtn = styled.span`
	display: none;
	@media screen and ( min-width: 768px ) {
		display: block;
		border: 1px solid rgba(0,0,0,0.1);
		border-radius: 4px;
		background-color: #0AE61E;
		color: #fff;
		font-size: 18px;
		font-weight: 700;
		line-height: 40px;
		text-align: center;
		text-shadow: 0 1px 2px #07AB16;
		margin-top: 26px;
	}
`;
const ListingBadge = styled.span`
    position: absolute;
    right: 0;
`;
const ListingBadgeBg = styled.span<{ badge?: string }>`
	color: #fff;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 7px;
	z-index: 2;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: -6px;
		width: 5px;
		height: 0px;
		border-right: 0 solid transparent;
		border-left: 6px solid transparent;
		border-bottom: 22px solid #000;
	}
	svg {
		margin-left: 1px;
		&:first-child {margin-left: 6px;}
	}
	${(props) => props.badge === 'good' && css`
		background-color: #737A8F;
		&:before {
			border-bottom-color: #737A8F;
		}
		svg {
			fill: rgba(0,0,0,.1);
			&:first-child {
				fill: #fff;
			}
		}
	`}
	${(props) => props.badge === 'great' && css`
		background-color: #00A0FF;
		&:before {
			border-bottom-color: #00A0FF;
		}
		svg {
			fill: #fff;
			&:last-child {
				fill: rgba(0,0,0,.1);
			}
		}
	`}
	${(props) => props.badge === 'best' && css`
		background-color: #D70AE6;
		&:before {
			border-bottom-color: #D70AE6;
		}
		svg {
			fill: #fff;
		}
	`}
`;
const ListingBadgeSvg = styled.svg`
	width: 9px;
	height: 9px;
	display: inline-block;
    vertical-align: middle;
`;
const ListingRibbon = styled.span<{ badge?: string }>`
	position: absolute;
    width: 19px;
    height: 0;
    border-bottom: 11px solid #585E6F;
    border-top: 11px solid #585E6F;
    border-left: 8px solid transparent;
    left: -18px;
    top: 4px;
    z-index: 1;
	&:before {
		content: '';
		position: absolute;
		left: 3px;
		top: 7px;
		border-bottom: 4px solid transparent;
		border-top: 0 solid transparent;
		border-right: 8px solid #22242A;
	}
	${(props) => props.badge === 'good' && css`
		border-bottom-color: #585E6F;
		border-top-color: #585E6F;
		&:before {
			border-right-color: #22242A;
		}
	`}
	${(props) => props.badge === 'great' && css`
		border-bottom-color: #0075DC;
		border-top-color: #0075DC;
		&:before {
			border-right-color: #22242A;
		}
	`}
	${(props) => props.badge === 'best' && css`
		border-bottom-color: #F240FF;
		border-top-color: #F240FF;
		&:before {
			border-right-color: #2B2D34;
		}
	`}
`;

export {
	ListingWrapper,
	ListingImg,
	ListingMainText,
	ListingMain,
	ListingInfo,
	ListingMainTrigger,
	ListingMainContent,
	ListingMainContentPad,
	ListingMainTitle,
	ListingMainSpecsContainer,
	ListingMainSpecs,
	ListingMainSpec,
	ListingMainLocation,
	ListingMainLocationSvg,
	ListingMainButton,
	ListingInfoSale,
	ListingInfoPrice,
	ListingInfoPayment,
	ListingInfoTitle,
	ListingInfoText,
	ListingInfoMonths,
	ListingInfoBtn,
	ListingBadge,
	ListingBadgeSvg,
	ListingRibbon,
	ListingBadgeBg
};