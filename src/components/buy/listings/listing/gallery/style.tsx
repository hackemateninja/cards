// Packages
import styled, { css } from 'styled-components';

const GalleryWrapper = styled.div`
	max-width: 400px;
	overflow: hidden;
	margin: 0 auto;
	.flickity-button {
		z-index: 1;
		background-color: #fff;
		width: 32px;
		height: 38px;
		@media screen and ( min-width: 768px ) {
			width: 24px;
			height: 28px;
		}
	}
	.flickity-prev-next-button.previous {
		left: 0;
		border-radius: 0 4px 4px 0;
	}
	.flickity-prev-next-button.next {
		right: 0;
		border-radius: 4px 0 0 4px;
	}
	.flickity-prev-next-button.previous, .flickity-prev-next-button.next {display: block;}
	.flickity-prev-next-button .flickity-button-icon {
		fill: rgba(0,0,0,0.2);
		width: 70%;
	}
	.flickity-page-dots {
		bottom: 0;
		left: 50%;
		width: auto;
		background-color: rgba(0,0,0,.5);
		border-radius: 7px;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		padding: 3px 4px;
		.dot {
			background: rgba(255,255,255,0.6);
			width: 8px;
			height: 8px;
			margin: 0;
			opacity: 1;
			transform: scale(0.8);
			&:not(:first-child) {
				margin-left: 6px;
			}
			&.is-selected {
				background: #fff;
				transform: scale(1);
			}
		}
	}
`;
const GalleryImgContainer = styled.div`
	overflow: hidden;
	height: 220px;
	width: 100%;
    padding-bottom: 62.55%;
	@media screen and ( min-width: 340px ) {
		height: 280px;
	}
	@media screen and ( min-width: 768px ) {
		height: 120px;
	}
	@media screen and ( min-width: 1260px ) {
		height: 190px;
	}
`;
const GalleryImgCover = styled.div`
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
`;
const GalleryImg = styled.img`
    position: absolute;
    inset: 0px;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    overflow: hidden;
    width: 50%;
`;
const GalleryBottom = styled.div<{ partner?: string }>`
	min-height: 63px;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
	display: ${(props) => props.partner ? 'flex' : 'none'};
	@media screen and ( min-width: 768px ) {
		padding: 10px;
		border: none;
		display: flex;
	}
	p {
		margin: 0;
		color: #707070;
		font-size: 12px;
		line-height: 16px;
		text-align: right;
	}
	@media screen and ( min-width: 768px ) {
		p {
			margin: ${(props) => props.partner ? '0' : 'auto'};
			${(props) => props.partner && css` max-width: 50px; `}
		}
	}
`;
const GalleryPtr = styled.span<{ partner?: string, make?: string; }>`
	span {
		font-size: 12px;
		font-weight: 700;
		max-width: 75px;
		color: #6D6E71;
		display: inline-block;
	}
	${(props) => (props.partner === 'carmax' || props.partner === 'autonation') && css`
		height: 21px;
		svg { width: 113px; height: 21px; }
		@media screen and ( min-width: 768px ) {
			height: 15px;
			svg { width: 66px; height: 15px; }
		}
		@media screen and ( min-width: 1260px ) {
			height: 21px;
			svg { width: 113px; height: 21px; }
		}
	`}
	${(props) => props.partner === 'cpo' && css`
		
	`}
`;

export {
	GalleryWrapper,
	GalleryImgContainer,
	GalleryImgCover,
	GalleryImg,
	GalleryBottom,
	GalleryPtr
};