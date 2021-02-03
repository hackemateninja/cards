import styled, { css } from 'styled-components';

const ListingCardWrapper = styled.a`
	text-decoration: none;
	border: 1px solid rgba( 0, 0, 0, .2 );
	border-radius: 4px;
	background: #FFF;
	box-shadow: 0 8px 5px -5px rgba( 0, 0, 0, .1 );
	display: block;
	width: 250px;
	margin-bottom: 8px;
	&:not(:last-child) {
		margin-right: 20px;
	}

	> span {
		display: block;
	}
`;

const ListingCardImage = styled.img`
	display: block;
	width: 100%;
	height: 187px;
	border-radius: 3px 3px 0 0;
	border-bottom: 1px solid rgba( 0, 0, 0, .2 );
`;

const ListingCardContent = styled.span`
	padding: 8px 12px 10px 12px;
`;

const ListingCardBadge = styled.span<{ type: string }>`
	display: flex;
	align-items: center;
	position: absolute;
	top: 8px;
	right: -6px;
	border-radius: 4px 4px 0px 4px;
	font-size: 12px;
	line-height: 14px;
	color: #ffffff;
	padding: 4px 4px;
	z-index: 5;
	text-transform: capitalize;
	text-shadow: 0 1px 1px rgba( 0, 0, 0, .4 );
	&:before {
		content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-right: 5px solid transparent;
		border-top: 4px solid #22242A;
    bottom: -4px;
    right: 0;
    z-index: 2;
	}

	${props => props.type === 'good' && css`
		background: #737A8F;
	`}

	${props => props.type === 'great' && css`
		background: #00A0FF;
	`}

	${props => props.type === 'best' && css`
		background: #D70AE6;
	`}
`;

const ListingCardStar = styled.svg`
	display: block;
	width: 9px;
	height: 9px;
	margin: 0 4px;
`;

const ListingCardHeader = styled.span`
	color: #00A0FF;
	font-size: 18px;
	line-height: 22px;
	font-weight: bold;
	padding-right: 75px;

	span {
		font-size: 14px;
		line-height: 20px;
		color: #B2B2B2;
		font-weight: normal;
	}
`;

const ListingCardTitle = styled.span`
	font-size: 14px;
	line-height: 20px;
	color: #054664;
	font-weight: bold;
	margin: 3px 0;
	display: block;

	@media screen and ( min-width: 1280px ) {
		margin: 7px 0;
	}
`;

const ListingCardText = styled.span`
	display: block;
	font-size: 12px;
	line-height: 16px;
	color: #4C4C4C;
	&:not(:last-child) {
		margin-bottom: 3px;
	}
	
	@media screen and ( min-width: 12602px ) {
		&:not(:last-child) {
			margin-bottom: 9px;
		}
	}
`;

export {
	ListingCardWrapper,
	ListingCardImage,
	ListingCardContent,
	ListingCardBadge,
	ListingCardStar,
	ListingCardHeader,
	ListingCardTitle,
	ListingCardText
};